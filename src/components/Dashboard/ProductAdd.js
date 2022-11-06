import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ProductAdd = () => {

    const productSubmit = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const addData = {
            title,
            description,
            price,
            img,
        };

        fetch('https://furniture-furnished-server.onrender.com/furniture', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(addData),
        })
        .then(res => res.json())
        .then(data =>{
            toast('Product post successfully', data);
            event.target.reset();
        });


    }

    return (
        <div className='container'>
            <div className='row'>
                <Form onSubmit={productSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="add here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="add here" as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name='price' placeholder="add here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image add</Form.Label>
                        <Form.Control type="text" name='img' placeholder="add here" />
                    </Form.Group>
             
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ProductAdd;