import React, { ChangeEvent, useState } from "react";
import { StyledRightSidebar } from './right-sidebar.styles'

const RightSideBar: React.FC = () => {

  const [searchValue, setSearchValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  }
  console.log(`search value: ${searchValue}`);

  return (
    <StyledRightSidebar >
      <div className="styledRightSidebar">
        <input type="text" 
              className="input-field" 
              placeholder="Search..."
              onChange={onChange}
        >
        </input>
      </div>
    </StyledRightSidebar>
  );
}

export default RightSideBar;