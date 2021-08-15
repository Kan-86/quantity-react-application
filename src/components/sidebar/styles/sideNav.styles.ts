import styled from "styled-components";

// Css Code for navbar
export const StyledSideNav = styled.div`
    
    .styledSideNav {
        position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
        height: 100%;
        width: 100px;     /* Set the width of the sidebar */
        z-index: 1;      /* Stay on top of everything */
        background-color: #FFFFFF; /* White */
        overflow-x: hidden;     /* Disable horizontal scroll */
        
        padding-top: 10px;
        border-style: none solid;
        border-color: #D8D8D8;
        border-width: 1px;
        text-align: center;
        font-family: "Source Sans Pro";
    }

    img {
        padding-top: 50%;
    }

    .arrow-icon {
        padding-top: 150%;
    }

    /* For Mobile */
    @media screen and (max-width: 540px) {
        .styledSideNav {
            width: 40px;
        }
        img {
            max-width: 50%;
        }
        
    }

    /* For Tablets */
    @media screen and (min-width: 540px) and (max-width: 780px) {
        .styledSideNav {
            width: 60px;
        }
        img {
            max-width: 80%;
        }
    }
`;