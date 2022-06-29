import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const Profile = () => {
    const {profileId} = useParams();
    const [user] = useAuthState(auth);

    const handleProfile = (event) =>{
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const fullName = event.target.fullName.value;
        const skills = event.target.skills.value;
        const description = event.target.description.value;
        const profileUpdate = {name, email, fullName, description, skills};
        console.log(profileUpdate);

        // post data

        fetch(`http://localhost:5000/profile?profile=${profileId}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'applicaton/json',
            },
            body: JSON.stringify(profileUpdate),
        })
        .then(res =>res.json())
        .then(data =>{
            toast("Profile data successfully");
        });
    }

    return (
        <div className="container">
        <div className="row">
            <h1>My Profile : {profileId}</h1>
           <div className="col-md-6 offset-md-3">
           <Form onSubmit={handleProfile}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" value={user?.displayName || ''} placeholder="user name" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name='fullName' placeholder="full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" value={user?.email || ''} placeholder="enter email" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About yourSelf</Form.Label>
                    <Form.Control as="textarea" name='description' placeholder='write abour you' rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control as="textarea" name='skills' placeholder='write skills here' rows={3} />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
           </div>
        </div>
        </div>
    );
};

export default Profile;