import React from 'react'
import './main.css'
import { IoPersonCircleOutline } from "react-icons/io5"
import { HiMiniArrowTrendingUp } from "react-icons/hi2"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TbRosetteDiscountCheck } from "react-icons/tb"
import { MdOutlineCancel } from "react-icons/md"
import SecondMain from './SecondMain'
import Detail from './detail'
import BottomCarousel from './bottom-carosel'


function Main() {
  return (
    <div className='main-cont'>
        <div className='main-menu'>
            <div className='main-text'>
                <h1>Hello, Victor E.</h1>
                <h5>You have<span className='span'>6 pending</span>requests since your last login</h5>
            </div>
              <div className='text'>
                    <h3>Quick actions</h3>
                </div>
            <div className='menu1'>
                <div className='menu-text'>
                <div className='menu-rows'>
                    <div className='row1'>
                        <h5>Customers</h5>
                        <div className='icon'>
                        <IoPersonCircleOutline />
                        </div>
                    </div>
                    <div className='row2'>
                        <div>
                            <h3>3,781</h3>
                        </div>
                        <div className='plus'>
                            <h6>+11.06%</h6>
                            <div>
                            <HiMiniArrowTrendingUp />
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className='menu-text'>
                <div className='menu-rows-2'>
                    <div className='row1'>
                        <h5>Upgrade request</h5>
                        <div className='icon'>
                        <IoCloudDownloadOutline />
                        </div>
                    </div>
                    <div className='row2'>
                        <div>
                            <h3>3,781</h3>
                        </div>
                        <div className='plus'>
                            <h6>+11.06%</h6>
                            <div>
                            <HiMiniArrowTrendingUp />
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <div className='menu-text'>
                <div className='menu-rows-3'>
                    <div className='row1'>
                        <h5>Approved accounts</h5>
                        <div className='icon'>
                        <TbRosetteDiscountCheck />
                        </div>
                    </div>
                    <div className='row2'>
                        <div>
                            <h3>3,781</h3>
                        </div>
                        <div className='plus'>
                            <h6>+11.06%</h6>
                            <div>
                            <HiMiniArrowTrendingUp />
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <div className='menu-text'>
                <div className='menu-rows-4'>
                    <div className='row1'>
                        <h5>Blocked accounts</h5>
                        <div className='icon'>
                        <MdOutlineCancel />
                        </div>
                    </div>
                    <div className='row2'>
                        <div>
                            <h3>3,781</h3>
                        </div>
                        <div className='plus'>
                            <h6>+11.06%</h6>
                            <div>
                            <HiMiniArrowTrendingUp />
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <SecondMain />
            <Detail />
            <BottomCarousel/>
        </div>

        
        
    </div>
  )
}

export default Main