import React, { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/custome-logo.png";
import VerticalNav from "./verticalNav";

// Redux Selector / Action
import {  useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

const Sidebar = memo(() => {
  const [isClicked, setIsClicked] = useState(false);
  const minisidebar = () => {
    setIsClicked(isClicked);
    document.body.classList.toggle('sidebar-main');
  };
  const appName = useSelector(SettingSelector.app_name)
  return (
    <Fragment>
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link to="/">
            <img src={logo} className="img-fluid" alt="" />
            <span>MindWell</span>
            {/* {appName} */}
          </Link>
        </div>
        <div id="sidebar-scrollbar">
            <VerticalNav />
        </div>
      </div>
    </Fragment>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
