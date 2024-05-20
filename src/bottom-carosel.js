import React from 'react'
import './bottom-carosel.css'
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { MdOutlineArrowForwardIos } from "react-icons/md"

function BottomCarousel() {
  return (
    <div className='bottom-carousel'>
        <div className='carousel'>
            <div className='icon'>
            <MdOutlineArrowBackIosNew />
            </div>
           <div className='number'>
               <ol>1</ol>
               <ol>2</ol>
               <ol>3</ol>
               <ol>4</ol>
               <ol>5</ol>
           </div>
            <div className='icon'>
           <MdOutlineArrowForwardIos />
            </div>
        </div>
    </div>
  )
}

export default BottomCarousel