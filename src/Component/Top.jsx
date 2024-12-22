import React from 'react'
import './Top.css'

function Top() {
  return (
    <div>
      <div className='top'>
        <div className='left '>
          <label> <i class="fa fa-phone" aria-hidden="true"></i>
            +91 6232610873</label>
          <label> <i class="fa fa-telegram" aria-hidden="true"></i>
            ritiksingh.dx@email.com
             
            </label>
        </div>
        <div className='right'>
          <label><i class="fa fa-facebook top-img1" aria-hidden="true"></i></label>
          <label><i class="fa fa-twitter top-img2" aria-hidden="true"></i></label>
          <label><i class="fa fa-instagram top-img3" aria-hidden="true"></i></label>
          
        </div>

      </div>
    </div>
  )
}

export default Top;