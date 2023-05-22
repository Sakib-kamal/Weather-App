import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import './App.css';

function Apidata() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const responseToJson = await response.json();

        setData(responseToJson);
    }
    useEffect(() => {
        handleSubmit();
    }, [])

    const handleClick = (id) => {
        navigate(`/user/${id}`)

    }
    const handleChange = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleChange} > back </button>

            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Content</th>
                        <th>Body</th>
                    </tr>
                    {data.map((item) => {
                        return (
                             <tr onClick={() => handleClick(item.id)}>
                                <td >{item.id} </td>
                                <td >{item.title}</td>
                                <td >{item.body}</td>
                            </tr>
                           
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Apidata