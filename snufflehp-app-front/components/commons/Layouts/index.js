import React, { Component } from 'react';
// import Responsive from 'react-responsive';
import { MobileScreen, DesktopScreen } from 'react-responsive-redux'
import { StickyContainer, Sticky } from 'react-sticky';
import MainHeader from "../Header";
import MenuHeader from "../menu";
import StatusTag from "../StatusTag";
import HeaderMobile from "../HeaderMobile";
import MenuMobile from "../MenuMobile";
import { connect } from "react-redux";
// const Desktop = props => <Responsive {...props} minWidth={992}  />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;


class MainLayout extends Component {

	constructor(){
		super()

		this.state = {
			sideMenuOpen:false
		}
		
	}

	render() {
		//console.log('render Home')
		const { children, responsive } = this.props
		const { sideMenuOpen } = this.state


		return (

      <div>
				<style jsx global>{`
          .bgHeader{
						color: rgba(255,255,255,0.75);
						background-color: #313340;
					}
					.mainFooter{
						border-top: 1px solid #c6c8ca;
						background: #525d69;
						height: 200px;
					}

					.bm-burger-button {
						width: ${(responsive.phone)?'76px':'36px'} !important;
						height: ${(responsive.phone)?'75px':'30px'} !important;
					}

					
        `}</style>


				
				<DesktopScreen >
		
					<div className="mainHeader bgHeader">
						<MainHeader />
					</div>
					<StickyContainer >
						<Sticky  >
							{({ style, distanceFromTop, isSticky }) => (

								<MenuHeader style={style} isSticky={isSticky} />

							)}
						</Sticky>

						<div className="mainContent">
							{ children }
						</div>

						<div className="mainFooter">
							<h1>footer</h1>
						</div>

					</StickyContainer>

				</DesktopScreen>

				<MobileScreen id="outer-container" >

					

					<div style={{
							position:'fixed',
							width:'100%',
							zIndex:'1',
							top:'1px'
						}}>
						<HeaderMobile />
					</div>

					<MenuMobile className="MobileSideMenu" sideMenuOpen={ sideMenuOpen } />

					<div className="mainContent" id="page-wrap" style={{marginTop:'59px'}} >
						{ children }
					</div>

					<div className="mainFooter">
						<h1>footer</h1>
					</div>
					
				</MobileScreen>
				

				
				
       
				<StatusTag msg="เพิ่มลงรถเข็นสำเร็จ" style={{right:'43%'}} />
			  
      </div>
      
		);
	}

}

const mapStateToProps = state => {
  return {
    responsive: state.responsive
  };
};

export default connect(mapStateToProps)(MainLayout)
