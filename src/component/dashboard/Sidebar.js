import React from "react";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidewrapper">
            <div className="sidebarmenu">
                <h1 className="sidebartitle">DashBoard</h1>
                <ul className="sidebarlist flex flex-col gap-8">
                    <li className="sidebarlistItems mt-5">
                        Home
                    </li>
                    <li>Analytics</li>
                    <li>Sales</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
