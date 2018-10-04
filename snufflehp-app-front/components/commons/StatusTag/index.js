import React, { Component } from 'react';
import { Fade } from 'reactstrap';
import { connect } from 'react-redux'
import { FaCheckCircle } from 'react-icons/fa';


class StatusTag extends Component {

	render() {

    const { show, msg, style } = this.props
   
    //console.log('show-->',show)

    let top = '300px';

    if(show){
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

      let scroll = {
          x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
          y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

      top = `${scroll.y + 200}px`
      //console.log('scroll',scroll)
    }

    
		return (

      <Fade in={show} tag="div" style={{
          opacity:'1',
          textAlign:'center',
          width:'300px',
          position:'absolute',
          background:'#505050e3',
          border:'1px solid #040404',
          padding:'10px',
          borderRadius:'8px',
          color:'#fff',
          top:top,
          zIndex:'100',
          display:(show)?'block':'none',...style
        }}>
        
        <FaCheckCircle size={60} color="rgb(81, 197, 13)" />
        <p>{ msg }</p>
       
      </Fade>
      
		);
	}

}

const mapStateToProps = (state) => {

  return {
    show:state.StatusTagReducer.show
  }
}

export default connect(mapStateToProps)(StatusTag)
