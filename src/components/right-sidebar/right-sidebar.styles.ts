import styled from "styled-components";

// Css Code for navbar
export const StyledRightSidebar = styled.div`

    .styledRightSidebar {
        position: absolute;
        right: 0;
        height: 100%;
        max-width: 15%;     /* Set the width of the sidebar */
        z-index: 1;      /* Stay on top of everything */
        background-color: #F2F2F2; 
        border-style: none solid;
        border-color: #D8D8D8;
        border-width: 1px;
        text-align: center;
        font-family: "Source Sans Pro";
    }

    textarea:focus, input:focus{
        outline: none;
    }

    .pagination {
        padding-left: 25%;
    }

    .input-field {
        height: 74px;
        width: 100%;
        background-color: #E0E0E0;
        padding-left: 15px;
        border-style: none;
    }

    /* For Mobile */
    @media screen and (max-width: 540px) {
        .styledRightSidebar {
            width: 80%;
            z-index: 0;
        }
        
    }

    /* For Tablets */
    @media screen and (min-width: 540px) and (max-width: 780px) {
        .styledRightSidebar {
            top: 0;
            width: 30%;
        }
    }
`;