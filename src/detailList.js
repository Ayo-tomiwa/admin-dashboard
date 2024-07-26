import React from 'react'
import './detailList.css'
import SecondDetailList from './secondDetailList'
import { RiCheckboxBlankLine } from "react-icons/ri"

function DetailList() {
  return (
    <div className='parent-container'>
        <div className='detail-list-wrapper'>
            <div className='detail-list-row'>
                <div className='container1'>
                    <div className='header-text-icon'>
                    <RiCheckboxBlankLine />
                    </div>
                    <div className='header-text container'>
                        <p>Account ID</p>
                    </div>
                </div>
                <div className='container'>
                    <p>Account name</p>
                </div>
                <div className='container'>
                    <p>Phone number</p>
                </div>
                <div className='container'>
                    <p>Email address</p>
                </div>
                <div className='container'>
                    <p>Tier level</p>
                </div>
                <div className='container'>
                    <p>Date created</p>
                </div>
                <div className='container'>
                    <p> Status</p>
                </div>
                <div className='container'>
                    <p>Export info</p>
                </div>
            </div>
            <hr />
            <SecondDetailList/>
        </div>
    </div>
  )
}

export default DetailList