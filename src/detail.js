import React from 'react'
import DetailList from './detailList'
import './detail.css'
import { FiPlus } from "react-icons/fi"
import { MdFilterListAlt } from "react-icons/md"
import { HiOutlineBarsArrowDown } from "react-icons/hi2"

function Detail() {
  return (
    <div className='detail-wrapper'>
        <div className='detail-container'>
        <div className='detail-row'>
            <div className='detail-text'>
                <h3>Recents</h3>
            </div>
            <div className='detail-icons'>
                <div className='detail-icon'>
                <FiPlus />
                </div>
                <div className='detail-icon'>
                <MdFilterListAlt />
                </div>
                <div className='detail-icon'>
                <HiOutlineBarsArrowDown />
                </div>
            </div>
        </div>
      </div>
      
      <DetailList />

    </div>
  )
}

export default Detail