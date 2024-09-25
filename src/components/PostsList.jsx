import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(){
    const [ modalIsVisible, setModalIsVisible ] = useState(true);
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event){
        setEnteredText(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} />
            </Modal>
        );
    };

    return (
        <div>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredText} />
                <Post author="Michael" body="Next.js is awesome!" />
            </ul>
        </div>
    );
}

export default PostsList;