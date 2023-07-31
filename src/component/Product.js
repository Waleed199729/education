import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = () => {

    const [products, getProduct] = useState([]);

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProduct(result))               //getProduct is out state gievn above
    }, []);

    const cards = products.map((product) =>
        <div className='col-md-3' style={{ marginBottom: '10px' }} >
            <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        USD$:{product.price}
                    </Card.Text>
                </Card.Body>

                <Card.Footer className='text-center' style={{ background: 'white' }}>
                    <Button variant="primary"> Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )


    return (
        <>
            <div>
                <center><h1>Products Dashboard</h1></center>

                <div className='row'>
                    {cards}
                </div>


            </div>
        </>
    )
}

export default Product