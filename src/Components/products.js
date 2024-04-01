import React from 'react';
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-top-laptops.jpg';
import img3 from '../assets/images/image-gaming-growth.jpg';
import '../Styles/products.css'

export default function products() {
  return (
    <div className='products'>
      <div className='container'>
        <div className='row products-list'>
          <div className='col products-info'>
            <div>
              <img src={img1} alt='prod' height="150px"/>
            </div>
            <div>
            <h1>01</h1>
            <h5>Reviving Retro PCs</h5>
            <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className='col products-info'>
            <div>
              <img src={img2} alt='prod' height="150px"/>
            </div>
            <div>
            <h1>02</h1>
            <h5>Top 10 Laptops of 2022</h5>
            <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className='col products-info'>
            <div>
              <img src={img3} alt='prod' height="150px"/>
            </div>
            <div>
            <h1>03</h1>
            <h5>The Growth of Gaming</h5>
            <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
