import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../src/byte.png';
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { TiCalculator } from "react-icons/ti";
import { MdNotificationsNone } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiExpandUpDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from '../src/profile2.jpg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar-container">
      <button className="hamburger" onClick={toggleSidebar}>
        <RxHamburgerMenu size={30} />
      </button>
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <div className={`Side ${isOpen ? 'open' : ''}`}>
        <div className="cont-1">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="menu">
            <div className="home">
              <IoMdHome size={20} />
              <h5>Home</h5>
            </div>
            <div className="home">
              <IoPersonSharp size={20} className='customer-icon' />
              <h5>Customers</h5>
              <span>37m+</span>
            </div>
            <div className="home">
              <TiCalculator size={20} />
              <h5>POS terminals</h5>
              <span>26+</span>
            </div>
          </div>
        </div>
        <div className="cont-2">
          <div className="menu">
            <div className="home">
              <MdNotificationsNone size={20} />
              <h5>Notifications</h5>
              <span className="note">6</span>
            </div>
            <div className="home">
              <CiSettings size={20} />
              <h5>Settings</h5>
            </div>
            <div className="profile">
              <div className="image">
                <img src={Profile} alt="profile" />
              </div>
              <div className="text">
                <h5>Victor Emere</h5>
                <h6>victor@gmail.com</h6>
              </div>
              <RiExpandUpDownLine size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
