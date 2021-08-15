import React from 'react';
import { StyledSideNav } from './styles/sideNav.styles'
import SideNavItem from './sideNav-Item';

class SideNav extends React.Component {

      render() {
        return (
          <StyledSideNav >
            <SideNavItem/>
          </StyledSideNav>
        );
      }
}

export default SideNav;