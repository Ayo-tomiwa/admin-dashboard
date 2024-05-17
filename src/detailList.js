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
            <div>
                <p>Account name</p>
            </div>
            <div>
                <p>Phone number</p>
            </div>
            <div>
                <p>Email address</p>
            </div>
            <div>
                <p>Tier level</p>
            </div>
            <div>
                <p>Date created</p>
            </div>
            <div>
                <p> Status</p>
            </div>
            <div>
                <p>Export info</p>
            </div>
        </div>
        <hr />
        {/* <SecondDetailList/> */}
    </div>
  )
}

export default DetailList