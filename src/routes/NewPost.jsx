import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost(props) {

    return (
        <Modal>
              <Form method="post" className={classes.form} >
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}  />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <textarea type="text" name="author" id="name" required />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action(data){
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/');
};