import React from 'react'
import { HiMiniArrowTrendingUp } from "react-icons/hi2"
import { HiCalculator } from "react-icons/hi2"
import { MdRestartAlt } from "react-icons/md"
const SecondMain = () => {
  return (
    <div className='main-menu'>
        <div className='menu1'>
            <div className='menu-text'>
            <div className='menu-rows-5'>
                <div className='row1'>
                    <h5>Active POS</h5>
                    <div className='icon'>
                    <HiCalculator />
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
            <div className='menu-rows-6'>
                <div className='row1'>
                    <h5>POS request</h5>
                    <div className='icon'>
                    <HiCalculator />
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
            <div className='menu-rows-7'>
                <div className='row1'>
                    <h5>Disabled POS</h5>
                    <div className='icon'>
                    <HiCalculator />
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
            <div className='menu-rows-8'>
                <div className='row1'>
                    <h5>Refund request</h5>
                    <div className='icon'>
                    <MdRestartAlt />
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
    </div>
  )
}

export default SecondMain