import React from 'react';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
export class SiblingResultsTest extends React.Component {
    render() {
  var results = this.props.results
      return (
        <div>
          <h1>{results}!</h1>
          
        </div>
      );
    }
  }
export class SiblingResultsSimple extends React.Component {
    componentDidMount() {
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
 
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
// scrollToBottom() {
//     scroll.scrollToBottom();
//   }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
}
// scrollMore() {
//     scroll.scrollMore(100);
//   }
 handleSetActive(to) {
    console.log(to);
  }
    render() {
  var results = this.props.results || [];
  const resultsList = results.map(function(result,index){
        return (
        <Element name={'result'+ index} key={index}>
          <h2>{result.title}</h2>
          <p>{result.snippet}</p>
        </Element>  
        )
      });
      return (
      <div>
          {resultsList}
      </div>
      )
    }
  }

export class SiblingResults extends React.Component {
    render() {
  var results = this.props.results || [];
  const resultsList = results.map(function(result,index){
        return (
          <div className="myWell" key={index}>
              <p><strong>{result.name}</strong></p>
              <p>{result.location.address1}</p>
          </div>
        )
      });
      return (
      <div>
          {resultsList}
      </div>
      )
    }
  }