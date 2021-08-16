import styled from "styled-components";

// Css Code
export const Styles = styled.div`

    font-family: "Source Sans Pro";

    .align-table {
        margin-top: 5%;
        max-width: 100%;
    }

    .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
        background-color: #e8f4f8;
    }
    button {
        flex-direction: row;
        box-sizing: border-box;
        height: 33px;
        width: 100px;
        border: 1px solid #e8f4f8;
        border-radius: 4px;
        background-color: #e8f4f8;
        color: #008AC6;
        font-size: 10px;
        font-family: "Source Sans Pro";
        font-weight: bold;
        letter-spacing: 0;
        line-height: 15px;   
        text-align: center;
        white-space: nowrap;
        word-wrap: break-word;
    }



    .three-dots {
        height: 15px;
        width: 3px;
        color: #008AC6;
    }

    .buttonHover:hover {
        background-color: #ade6e6;
        border: 1px solid #ade6e6;
    }

    thead {
        height: 15px;
        width: 42px;
        color: #6D7A85;
        font-family: "Source Sans Pro";
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 15px;
    }
    
    tbody {
        background-color: #FFFFFF;
        border-style: solid none;
        border-color: #D8D8D8;
        border-width: 1px;
    }

    td {
        border-style: solid none;
        border-color: #D8D8D8;
        border-width: 1px;
        height: 20px;
        width: 33px;
        color: #606060;
        font-family: "Source Sans Pro";
        font-size: 16px;
        letter-spacing: 0;
        line-height: 20px;
    }

    .tablerow-buttons {
        padding-left: 25%; 
    }



    .groups {
        padding-left: 135px;
        padding-top: 70px;
        height: 44px;
        width: 112px;
        color: #000000;
        font-family: "Source Sans Pro";
        font-size: 35px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 44px;
    }

    .dot-suspended {
        height: 13px;
        width: 13px;
        background-color: #D69D23;
        border-radius: 3px;
        display: inline-block;
    }

    .dot-active {
        height: 13px;
        width: 13px;
        background-color: #56B267;
        border-radius: 3px;
        display: inline-block;
    }

    .button-alignment {
        margin-left: 16%;
    }

    p {
        
        padding-left: 20px;
        padding-right: 100px;
        height: 20px;
        width: 41px;
        color: #606060;
        font-family: "Source Sans Pro";
        font-size: 13px;
        letter-spacing: 0;
        line-height: 15px;
    }

    /* For Mobile */
    @media screen and (max-width: 540px) {
        .align-table {
            width: 500%;
            margin-left: 4%;
        }

        .dot-active {
            height: 7px;
            width: 7px;
        }

        .groups{
            padding-left: 60px;
            padding-top: 15px;
            font-size: 25px;
        }

        .dot-suspended {
            height: 7px;
            width: 7px;
        }

        td {
            font-size: 11px;
        }

        p {
            padding-left: 7px;
            font-size: 11px;
        }

        button {
            box-sizing: border-box;
            margin-left: 1px;
            height: 33px;
            width: 80px;
            border: 1px solid #e8f4f8;
            border-radius: 4px;
            background-color: #e8f4f8;
            color: #008AC6;
            font-size: 9px;
            font-family: "Source Sans Pro";
            font-weight: bold;
            letter-spacing: 0;
            line-height: 15px;   
            text-align: center;
            white-space: nowrap;
            word-wrap: break-word;
        }

        .button-alignment {
            margin-left: 0%;
        }
    }

    /* For Tablets */
    @media screen and (min-width: 540px) and (max-width: 780px) {
        .align-table {
            width: 55%;
            margin-left: 7%;
        }

        .groups{
            padding-left: 80px;
            padding-top: 25px;
            font-size: 25px;
        }

        .dot-active {
            height: 10px;
            width: 10px;
        }

        .dot-suspended {
            height: 10px;
            width: 10px;
        }

        td {
            font-size: 15px;
        }

        p {
            font-size: 15px;
        }
    }
`;