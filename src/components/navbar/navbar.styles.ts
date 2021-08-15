import styled from "styled-components";

// Css Code
export const Styles = styled.div`
  .navbar { 
    position: sticky;
    background-color: #FFFFFF;
    max height: 90px;
    max width: 100%;
    border-style: solid none;
    border-color: #D8D8D8;
    border-width: 1px;
    z-index: 1; 
    font-family: "Source Sans Pro";
  }


  .quantity-logo {
    height: 40px;
    width: 40px;
  }

  .paragraph-spacing {
    style: padding-top:10px;
    style: padding-bottom:10px;
    height: 28px;
    width: 82px;
    color: #3D3D3D;
    font-family: "Source Sans Pro";
    font-size: 12px;
    letter-spacing: 0;
    line-height: 14px;
    text-align: right;
  
  }

  .login-logo {
    height: 35px;
    width: 35px;
    padding: 5px;
    box-sizing: border-box;
    border: 0.68px solid #D8D8D8;
    border-radius: 4px;
    background-color: #FFFFFF;
  }

  .bordered-image {

  }

  .navbar-brand {
    margin-left: 15px;
    color: #D8D8D8;
    &:hover { color: white; }
  }

  .form-center {
    position: relative !important;
    margin-left: 50%;
  }
`;