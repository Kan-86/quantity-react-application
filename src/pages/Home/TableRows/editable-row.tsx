import React from "react";
import {CompanyGroup} from '../home'



const EditableRow: React.FC<CompanyGroup> = (value) => {
    return (
        <>
            <tr key={value.index}>
                <td></td>
                <td><b>{value.name}</b></td>
                <td colSpan={2}>{
                    value.status === "SUSPENDED" 
                    ? <span className="dot-suspended"><p>{value.status}</p></span> 
                    : <span className="dot-active"><p>{value.status}</p></span>
                    }                                         
                    <button className="buttonHover button-alignment">EDIT SETTINGS</button>
                    <button className="buttonHover">ADD ACCOUNT</button>
                    <button className="buttonHover">MANAGE ACCOUNTS</button>
                    <button className="buttonHover">MORE</button>
                    <span className="three-dots">&#8942;</span>
                </td>
                <td >
                </td>
            </tr>
        </>
    );
}



export default EditableRow;