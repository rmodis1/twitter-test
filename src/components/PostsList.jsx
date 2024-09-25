import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(props){
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredText(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={props.onStopPosting}>
    //             <NewPost 
    //                 onBodyChange={bodyChangeHandler} 
    //                 onAuthorChange={authorChangeHandler} />
    //         </Modal>
    //     );
    // };

    return (
        <div>
            {props.isPosting && (
            <Modal onClose={props.onStopPosting}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} />
            </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredText} />
                <Post author="Michael" body="Next.js is awesome!" />
            </ul>
        </div>
    );
}

export default PostsList;