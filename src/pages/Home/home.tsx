import React, { useState, Fragment } from 'react';
import {Styles} from './home.styles'
import { Table } from 'react-bootstrap';
import data from '../../assets/data2.json';

export type CompanyGroup = {
    id: string,
    name: string,
    status: string,
    accountCount: number,
    index: number
}

//const companyGroup: CompanyGroup[] = require('../../assets/data2.json');



const Home: React.FC = () => {
    const [groups] = useState(data);
    const [editGroupId, setEditGroupId] = useState(null);
    

    // Mouse over to populate table with buttons
    function MouseOverRender(index: any) {
        setEditGroupId(index);
    }

    return (
        <Styles>
            <h3 className="groups">Groups</h3>
            <Table responsive="lg" borderless={true} hover={true} className="align-table">
                <thead >
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>ACCOUNTS</th>
                    </tr>
                </thead>
                <tbody >
                    {groups.map((value, index) => 
                        <Fragment key={index}>
                            { editGroupId === index 
                                ? <tr key={index}>
                                    <td></td>
                                    <td><b>{value.name}</b></td>
                                    <td>{
                                        value.status === "SUSPENDED" 
                                        ? <span className="dot-suspended"><p>{value.status}</p></span> 
                                        : <span className="dot-active"><p>{value.status}</p></span>}</td>
                                    <td>
                                            <button className="buttonHover">EDIT SETTINGS</button>
                                            <button className="buttonHover">ADD ACCOUNT</button>
                                            <button className="buttonHover">MANAGE ACCOUNTS</button>
                                            <button className="buttonHover">MORE</button>
                                            <span className="three-dots">&#8942;</span>
                                    </td>
                                </tr> 
                                : <tr key={index} onMouseOver={() => MouseOverRender(index)}>
                                    <td></td>
                                    <td><b>{value.name}</b></td>
                                    <td>{
                                        value.status === "SUSPENDED" 
                                        ? <span className="dot-suspended"><p>{value.status}</p></span> 
                                        : <span className="dot-active"><p>{value.status}</p></span>}</td>
                                    <td>
                                        {value.accountCount}
                                    </td>
                                </tr> 
                            }
                        </Fragment>
                    )} 
                </tbody>
            </Table>
        </Styles>
    );
}





export default Home;