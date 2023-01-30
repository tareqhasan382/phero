import React from 'react';
import "./Dashboard.css";
import Topbar from './Topbar';
import Sidebar from "./Sidebar";
import Features from './Features';
const DashBoard = () => {
  return (
    <div className="">
        <div className="sticky top-0 z-50 h-20 bg-slate-100"><Topbar/></div>
<div className='container'>
  <Sidebar/>
  <div className='other'>
  </div>
  <Features/>
</div>


        </div>

  )
}

export default DashBoard;