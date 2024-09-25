import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(props){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
        };

    return (
        <div>
            {props.isPosting && (
            <Modal onClose={props.onStopPosting}>
                <NewPost 
                    onCancel={props.onStopPosting}
                    onAddPost={addPostHandler}
                    />
            </Modal>
            )}
            {posts.length > 0 && (
            <ul className={classes.posts}>
                <>
                 {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </>
            </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </div>
    );
}

export default PostsList;