import React, { useState, Fragment, useEffect} from 'react';
import {Styles} from './home.styles'
import { Table } from 'react-bootstrap';
/* import jsonData from '../../assets/data2.json'; */
import { StyledRightSidebar } from '../../components/right-sidebar/right-sidebar.styles'
import {api} from '../../services/company-group.service'
import EditableRow from './TableRows/editable-row';
import ReadOnlyRow from './TableRows/read-only-row';

export type CompanyGroup = {
    id: string,
    name: string,
    status: string,
    accountCount: number,
    index: number
}

const Home = () => {
    const [groups, setGroups] = useState<CompanyGroup[]>();
    const [editGroupId, setEditGroupId] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPage - postsPerPage;
    const currentPosts = groups?.slice(indexOfFirstPost, indexOfLastPage);

    const pageNumbers = [];
    if (groups?.length !== undefined) {
        for(let i = 1; i <= Math.ceil(groups?.length / postsPerPage); i++) {
            pageNumbers.push(i);
        }
    }

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        // Consumer
        api<CompanyGroup[]>('http://localhost:3001/api/v1/group')
            .then((result) => {
                setGroups(result);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
        })
    }, []);

    // Mouse over to populate table with buttons
    const MouseOverRender = (index: any) => {
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
                        {currentPosts?.filter((val) => {
                            if (searchValue === "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchValue.toLowerCase()) 
                                ||  val.accountCount.toString().toLowerCase().includes(searchValue)) {
                                return val;
                            } 
                        }).map((value, index) => 
                            <Fragment key={index}>
                                { editGroupId === index 
                                    ? <EditableRow 
                                        id={value.id}
                                        name={value.name}
                                        status={value.status}
                                        accountCount={value.accountCount}
                                        index={index}
                                    />
                                    : <tr key={index} onMouseOver={() => MouseOverRender(index)}>
                                        <ReadOnlyRow 
                                            id={value.id}
                                            name={value.name}
                                            status={value.status}
                                            accountCount={value.accountCount}
                                            index={index}
                                        />
                                    </tr> 
                                }
                            </Fragment>
                        )} 
                    </tbody>
                </Table>

            </Styles>                
            <div className="pagination">
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map((value, index) => (
                            <li key={index} className="page-item">
                                <a onClick={() => paginate(value)}  className="page-link">
                                    {value}    
                                </a> 
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </StyledRightSidebar>
    );
}





export default Home;