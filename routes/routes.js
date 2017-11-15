// var qs = require('querystring');
// var fetch = require('node-fetch');
var Yelp = require('yelpv3');
var yelpKeys = require('./yelpKeys.js');

var yelp = new Yelp({
  app_id: yelpKeys.apiID,
  app_secret: yelpKeys.appSecret
});

module.exports = function (app,passport,going) {


var path = process.cwd();
function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
		  console.log(req.isAuthenticated());
			return next();
		} else {
			res.redirect('/');
		}
	}


app.get("/", function (request, response) {
  response.sendFile(path + '/client/index.html');
});

app.get("/getSearch", function (request, response) {
   var location = request.query.location;
    // console.log(location);
    yelp.search({
      term: 'restaurants', 
      location: location, 
      limit: 20
    })
      .then(function (data) {
        // console.log(data);
          going.find({}).exec(function (err,result) {
            if (err) throw err;
            let resutls = {
              businesses : JSON.parse(data).businesses,
              going: result
            };
            response.json(resutls);
        });
      })
      .catch(function (err) {
          console.error(err);
      });
});

app.post("/going",isLoggedIn, function(request, response){
  let post = request.body;
  
  // console.log(JSON.stringify(post));
  // response.end(JSON.stringify(post));
  if (post.length > 1e6){
      request.connection.destroy();
  }
  
  going.find({'locId': post.locId}).exec(function (err,result) {
    if (err) throw err;
    // console.log(result)
    if(result.length > 0){
      
         if(result[0].users.includes(post.userId)){
            going.update({'locId': post.locId},{
              $pull: { 'users': post.userId } 
              },function (err,data) {
              if (err) throw err;
              response.end();
            });
            
         }else{
           going.update({'locId': post.locId},{
              $push: { 'users': post.userId } 
              },function (err,data) {
              if (err) throw err;
              response.end();
            });
         }
    } else {
        let data = {
          locId: post.locId,
          users: [post.userId],
          createdAt: post.createdAt,
        };
        var new_going = new going(data);
        new_going.save(function (err) {
          if (err) throw err;
        // saved!
          console.log(JSON.stringify(data));
          response.end();
        });
    }
  });
});

// app.get("/test", function (request, response) {
//   var res = {results: [
//         {title: 'title1',
//         text:'aaaaaaaaaaa'},
//         {title: 'title2',
//         text:'bbbbbbbbbb'},
//         {title: 'title3',
//         text:'ccccccccccc'}
//     ]};
//   response.json(res);
// });

app.get('*', function(request, response) {
 
response.sendFile(path + '/client/index.html');
});

};