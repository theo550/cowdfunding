import React from 'react'

function ContentAbout() {
  return (
    <div className='about'>
      <div className="text">
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
      <div className="card">
        <div className="title">
          <h3>Bamboo Stand</h3>
          <p className='special'>Pledge $25 or more</p>
        </div>
        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
        <div className="bottom-card">
          <p><span className='bold'>101</span> left</p>
          <button className='btn-primary'>Select Reward</button>
        </div>
      </div>
      <div className="card">
        <div className="title">
            <h3>Black Edition Stand</h3>
            <p className='special'>Pledge $75 or more</p>
          </div>
          <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <div className="bottom-card">
            <p><span className='bold'>64</span> left</p>
            <button className='btn-primary'>Select Reward</button>
          </div>
      </div>
      <div className="card special-edition">
        <div className="title">
            <h3>Mahogany Special Edition</h3>
            <p className='special'>Pledge $200 or more</p>
          </div>
          <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <div className="bottom-card">
            <p><span className='bold'>0</span> left</p>
            <button className='btn-card'>Out of stock</button>
          </div>
      </div>
    </div>
  )
}

export default ContentAbout
