import React from 'react'
import './content.css'

function ContentPrices() {
  return (
    <div className='numbers'>
      <ul className='infograph'>
        <li>
          <h2>$89,914</h2>
          <p>of $100,000 backed</p>
        </li>
        <li className='center'>
          <h2>5,007</h2>
          <p>total backers</p>
        </li>
        <li>
          <h2>56</h2>
          <p>days left</p>
        </li>
      </ul>
      <div className="progress-bar"></div>
    </div>
  )
}

export default ContentPrices
