import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const d = new Date();
const lastTime = d.toLocaleTimeString('en-US')
const myDay = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

const BlogAdd = () => {
    const productSubmit = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const published = event.target.published.value;
        const img = event.target.img.value;
        const lastTime = event.target.lastTime.value;

        const addData = {
            title,
            description,
            published,
            img,
            lastTime,
        };

        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(addData),
        })
        .then(res => res.json())
        .then(data =>{
            toast('Blog post successfully', data);
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
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" name='published' value={myDay} placeholder="add here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>My Time</Form.Label>
                        <Form.Control type="text" name="lastTime" value={lastTime} placeholder="add here" />
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

export default BlogAdd;