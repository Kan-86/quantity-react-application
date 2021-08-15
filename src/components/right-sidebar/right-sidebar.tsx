import React from "react";
import { StyledRightSidebar } from './right-sidebar.styles'

class RightSideBar extends React.Component {

    render() {
      return (
        <StyledRightSidebar >
          <div className="styledRightSidebar">
            <input className="input-field" placeholder="Search...">
            </input>
          </div>
        </StyledRightSidebar>
      );
    }
}

export default RightSideBar;