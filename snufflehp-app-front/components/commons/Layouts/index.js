import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import MainHeader from "../Header";
import MenuHeader from "../menu";

class MainLayout extends Component {

	render() {
		//console.log('render Home')
		const { children } = this.props
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
        `}</style>
				
				<div className="mainHeader bgHeader">
          <MainHeader />
        </div>
				<StickyContainer >
					<Sticky  >
						{({style,	distanceFromTop,	isSticky }) => (

							<MenuHeader style={style} isSticky={isSticky}  />
						
						)}
					</Sticky>	

					<div className="mainContent">
						{ children }
					</div>
				
					
					<div className="mainFooter">
						<h1>footer</h1>
					</div>

				</StickyContainer>
       
      </div>
      
		);
	}

}

export default MainLayout
