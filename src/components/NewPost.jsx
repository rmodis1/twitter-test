import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
    const [ enteredText, setEnteredText ] = useState('');

    function changeBodyHandler(event) {
        setEnteredText(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                {enteredText}
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required />
            </p>
        </form>
    );
}

export default NewPost;