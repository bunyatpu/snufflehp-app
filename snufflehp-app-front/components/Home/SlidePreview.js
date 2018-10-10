import React, { Component } from 'react';
import Slider from "react-slick";
//import ContentLoader from 'react-content-loader'
import { SyncLoader } from 'react-spinners';
import { 

  Col, Row 

} from 'reactstrap';

class SlidePreview extends Component {

  constructor(props){
    super(props)
    this.state = {
      items:[],
      loading:true
    }
  }

  componentDidMount(){
    //console.log('componentDidMount')

    this.setState({items:[2,3,4,5,2]})
  }

  onImageLoaded = () =>{
    //console.log('onImageLoaded2')
    this.setState({loading:false})
  }

  render() {

    const { items,loading } = this.state

    //console.log('render')

    const lists = items.map((i,k)=>{
      return (
        <div key={k}>
          <img src={`/static/images/img_previews/banner_${i}.png`} style={{height:"300px"}} alt=""  />
        </div>
      )
    })


    // const settings = {
     
    //   dots: true,
    //   lazyLoad: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   initialSlide: 2
    // };

    const settings = {
      arrows:false,
      dots: true,
      infinite: true,
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      variableWidth: true,
      adaptiveHeight: true,
      appendDots: dots => (
        <div
          style={{
            bottom: "-5px"
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
      onInit: ()=>{
         // console.log('onInit')
        this.onImageLoaded()
      },
      onLazyLoad: () =>{
        //console.log('onLazyLoad')
      }
    };


    return (
      <div style={{height:'300px'}}>

        { loading && 
          <Row className="d-flex align-items-center" style={{background:'#fff',height:'100%',width:'100%',margin:'0px'}}>
            <Col className="text-center">
              <SyncLoader
                sizeUnit={"px"}
                size={25}
                color={'#00d5b2'}
                loading={loading}
              />
              <div style={{color:'#b9b5b5',fontSize:'40px',fontWeight:'bold'}}>Loading...</div>
            </Col>
            
          </Row>
          
        }
       
        <div style={{display:(!loading)?'block':'none'}}>
          <Slider {...settings} >
            { lists } 
          </Slider>
        </div>
       
     
         
      </div>
      
    )
  }

}

export default SlidePreview