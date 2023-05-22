import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Array from './Array.json'
import { Card } from 'react-bootstrap'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
function Cards() {
    
    const [click, setClick] = useState(false)
    const [array , setArray] = useState([]);

    const handleClick = (id) => {
        const index = array.indexOf(id);
        index > -1 ? array.splice(index, 1) : array.push(id);
        setClick(!click)
        console.log(array)
    }
   let id = array.join(" ,");

    return (
        <Container>
            <div>
                <h1 style={{ textAlign: 'center' }}> Welcome into Card  </h1>
                <br />
                <h3>selected id is : {id}</h3>
                <br />
                <Row xs={1} md={4} className="g-4">
                    {Array.map((item) => {
                        return (
                            <Col>
                         <div className="card-style" >
                               <Card style={{ width: '18rem' }} onClick={() => handleClick(item.id)}>
                               <Card.Img variant="top" src={item.url} />
                               <Card.Body>
                    <Card.Title >{array.indexOf(item.id) > -1 ? <MdFavorite /> : <MdFavoriteBorder />}
                                </Card.Title>
                                 <Card.Text>                                         
                                {item.title}
                                   </Card.Text>
                      </Card.Body> </Card> </div> </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    )
}

export default Cards