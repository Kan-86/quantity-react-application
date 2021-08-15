import React from "react";
import {CompanyGroup} from '../home'



const EditableRow: React.FC<CompanyGroup> = (value) => {
    console.log(`inded: ${value.index}`)
    return (
        <>
            <td></td>
            <td><b>{value.name}</b></td>
            <td>{
                value.status === "SUSPENDED" 
                ? <span className="dot-suspended"><p>{value.status}</p></span> 
                : <span className="dot-active"><p>{value.status}</p></span>}</td>
            <td>
                <span className="dot-suspended"/>
            </td>
        </>
    );
}



export default EditableRow;