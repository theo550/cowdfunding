import React from 'react'
import './content.css'
import logo from '../../static/logo-mastercraft.svg'
import bookmark from '../../static/icon-bookmark.svg'

function ContentHeader() {
  return (
    <div className='content-header'>
      <img className='logo' src={logo} alt="" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="buttons">
        <button className='btn-primary'>Back this project</button>
        <div className="bookmark">
          <img src={bookmark} alt="" />
          <button className='btn-secondary'>Bookmark</button>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
