import React from 'react'
import './detail.css'
import { FiPlus } from "react-icons/fi"

function Detail() {
  return (
    <div className='detail-wrapper'>
        <div className='detail-row'>
            <div className='detail-text'>
                <h3>Recents</h3>
            </div>
            <div className='detail-icon'>
                <div>
                <FiPlus />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Detail