import React from 'react';
import posterDesktop from '../assets/images/image-web-3-desktop.jpg';
import posterMobile from '../assets/images/image-web-3-mobile.jpg';
import '../Styles/mainBody.css';
export default function mainBody() {
const { innerWidth: width} = window;
let poster_img = width>=1024?posterDesktop:posterMobile;
return (
    <div className='mainbody'>
      <div className='container'>
      <div class="row">
          <div class="col main-body">
          <img src={poster_img} alt="poster" className="poster-img" width="100%"/><br/>
          <div className='row down-body'>
            <div className='col'><h1>The Bright Future of Web 3.0?</h1></div>
            <div className='col'>
              <p className="info">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='info-btn'>Read More</button>
            </div>
          </div>
          </div>
          <div class="col side-body">
            <h1>New </h1>
            <div>
              <h5>Hydrogen VS Electric Cars</h5>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr/>
            <div>
              <h5>The Downsides of AI Artistry</h5>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr/>
            <div>
              <h5>Is VC Funding Drying Up?</h5>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}