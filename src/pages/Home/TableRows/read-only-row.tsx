import React from "react";
import {CompanyGroup} from '../home'



const ReadOnlyRow: React.FC<CompanyGroup> = (value) => {
    return (
        <>
            <td></td>
            <td><b>{value.name}</b></td>
            <td>{
                value.status === "SUSPENDED" 
                ? <span className="dot-suspended"><p>{value.status}</p></span> 
                : <span className="dot-active"><p>{value.status}</p></span>}</td>
            <td>
                {value.accountCount}
            </td>
        </>
    );
}

export default ReadOnlyRow;

