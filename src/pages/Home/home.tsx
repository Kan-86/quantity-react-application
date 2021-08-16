import React, { useState, Fragment } from 'react';
import {Styles} from './home.styles'
import { Table } from 'react-bootstrap';
import data from '../../assets/data2.json';
import { StyledRightSidebar } from '../../components/right-sidebar/right-sidebar.styles'

export type CompanyGroup = {
    id: string,
    name: string,
    status: string,
    accountCount: number
}

const Home = () => {
    const [groups] = useState(data);
    const [editGroupId, setEditGroupId] = useState(null);
    const [searchValue, setSearchValue] = useState("");



    // Mouse over to populate table with buttons
    function MouseOverRender(index: any) {
        setEditGroupId(index);
    }

    return (
        <StyledRightSidebar>
            <div className="styledRightSidebar">
                <input type="text" 
                    className="input-field" 
                    placeholder="Search..."
                    onChange={event => {setSearchValue(event.target.value)}}
                >
                </input>
            </div>
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
                        {groups.filter((val) => {
                            if (searchValue === "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchValue.toLowerCase()) 
                                ||  val.accountCount.toString().toLowerCase().includes(searchValue)) {
                                return val;
                            } 
                        }).map((value, index) => 
                            <Fragment key={index}>
                                { editGroupId === index 
                                    ? <tr key={index}>
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
        </StyledRightSidebar>
    );
}





export default Home;