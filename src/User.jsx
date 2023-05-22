import React, { useState, useEffect } from 'react'
import { useParams ,useNavigate} from "react-router-dom";
import { Form } from 'react-bootstrap';

function User() {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    const params = useParams()

    const handleSubmit = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const responseToJson = await response.json();

        setPosts(responseToJson);
    }
    useEffect(() => {
        handleSubmit();
    }, [])

    const handleClick = () =>{
        navigate(-1);
            }
    return (
<div>
<br/> 

 <Form>
    <br/>
      <br/>
       <Form.Group className="mb-3">
       <Form.Label> ID </Form.Label>
       <Form.Control placeholder={posts.id} disabled />
     </Form.Group>
     <br/>
      <br/>
     <Form.Group className="mb-3">
       <Form.Label> Title </Form.Label>
       <Form.Control placeholder={posts.title} disabled />
     </Form.Group>
     <br/>
      <br/>
     <Form.Group className="mb-3">
       <Form.Label> Body </Form.Label>
       <Form.Control placeholder={posts.body} disabled />
     </Form.Group>
     <br/>
      <br/>

     
     </Form> 
     <button onClick={handleClick} > back to main page </button>

     <br/>
      <br/>
     </div>
    )
}

export default User