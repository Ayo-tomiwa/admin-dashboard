import React from 'react'
import './detailList.css'
import { RiCheckboxBlankLine } from "react-icons/ri"

function DetailList() {
  return (
    <div className='detail-list-wrapper'>
        <div className='detail-list-row'>
            <div className='cont'>
                <div className='header-text-icon'>
                <RiCheckboxBlankLine />
                </div>
                <div className='header-text'>
                    <p>Account ID</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailList