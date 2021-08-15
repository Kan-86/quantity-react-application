import React from "react";
import userIcon from '../../assets/userIcon.svg'
import companyIcon from '../../assets/companyIcon.svg'
import users from '../../assets/users.svg'
import editIcon from '../../assets/edit.svg'
import arrow from '../../assets/arrow.svg'

class SideNavItem extends React.Component {

      render() {
        return (
            <div className="styledSideNav">
                <img src={userIcon} alt="user-icon"/>
                <br/>
                <img src={companyIcon} alt="company-icon"/>
                <br/>
                <img src={users} alt="users-icon"/>
                <br/>
                <img src={editIcon} alt="edit-icon"/>
                <br/>
                <img src={arrow} alt={"arrow-icon"} className="arrow-icon"></img>
            </div>
        );
      }
}

export default SideNavItem;