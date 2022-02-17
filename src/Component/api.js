import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


function Api() {

    const [store , setStore] = useState([]);

    const storeapi = async() =>{
        const sa = await fetch('http://localhost:5000/api');
        setStore(await sa.json());
        console.log(store);
    }

    useEffect(() => {
        storeapi();
    },[]);
    
  return (
    <>
      <h1 style={{textAlign : "center"}}>STORE</h1>

    {/* card from bootstrap */}

         <Row xs={1} md={5} className="g-4">
          {store.map((curval, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={curval.img} />
                <Card.Body>
                  <Card.Title>{curval.title}</Card.Title>
                    <Card.Text>{curval.desc}</Card.Text>
                    <Card.Text>Rs.{curval.price}</Card.Text>
                </Card.Body>
              </Card>


              {/* <MDBCard>
      <MDBCardImage src={curval.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{curval.title}</MDBCardTitle>
        <MDBCardText>
        {curval.desc}
        </MDBCardText>
        <MDBBtn href='#'>Buy</MDBBtn>
      </MDBCardBody>
    </MDBCard> */}

            </Col>
          ))}
        </Row> 

          

          

    </>
  )
}

export default Api



