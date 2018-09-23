import React,{ Component } from 'react';
//import { Form,Image} from 'semantic-ui-react'
//import resizeImage from 'resize-image';

import { 
  Input
} from 'reactstrap';
import { API } from '../../config'
import { FaCamera } from 'react-icons/fa';
//import blankImg from '../manageWriting/blank_img.png'


class ImageUpload extends Component {

  constructor(props) {
    super(props);

    //let image = '/static/images/avatars/avatar-new.jpg';
    let image = '/static/images/avatars/avatar-new.jpg';
  
    if(props.pathImg !== undefined ){
      image = props.pathImg
    }
    this.state = {
      file: '',
      imagePreviewUrl:image
    };
  }

  componentWillReceiveProps(props){
    if(props.pathImg !== undefined ){
      this.setState({imagePreviewUrl:props.pathImg})
    }
    
    
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {

      //console.log('dataURL',reader.result)
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)

    this.props.setImg(file)

    // let reader = new FileReader();
    // let file = e.target.files[0];

    // reader.onloadend = () => {

    //   //console.log('dataURL',reader.result)
    //   this.setState({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   });

      
 
    //   var img = new Image();
    //   img.onload= () =>  {
    //     var data = resizeImage.resize(img, '80', '80',resizeImage.PNG);
    //     //console.log('af data',data);
    //     this.props.setImg(data)
    //   };
    //   img.src = reader.result; // local image url
    // }

    // reader.readAsDataURL(file)

    


    

  }

  render() {
    let { imagePreviewUrl } = this.state;
 

    return (
      <div>

        <style jsx global>{`
    
          .borderAvatar{
            border:2px solid #e6e6e6;
            padding:5px;
            width:150px;
            height:155px; 
            border-radius: .5em;
            text-align: center;
            position:relative;
          }
          .img-avatar-big{
            
            margin: 0px;
            max-width: 100%;
            border-radius: 50em;
            vertical-align: middle;
            border-style: none;
            border:1px solid #fff;
          }

          .borderAvatar .footIcon{
            position: absolute;
            color: #c7c7c7;
            bottom: 3px;
            right: 3px;
          }

          .borderAvatar  .overlay {

            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;

          }
        `}</style>

        <div className="borderAvatar float-right" >
          <img 
            style={{height:'140px'}}
            src={imagePreviewUrl} 
            className="img-avatar-big" 
            alt="" />
          
          <FaCamera className="footIcon" size={25} />

          <div className="overlay">
            <Input 
              type="file" 
              style={{width:'100%',height:'100%',opacity:'0'}}
              name="imgFile"
              onChange={(e)=>this._handleImageChange(e)}
            />
          </div>
          
        </div>
      </div>
    )
  
  }

}

export default ImageUpload;