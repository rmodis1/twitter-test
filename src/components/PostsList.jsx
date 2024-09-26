import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList(props){
    // fetch('http://localhost:8080/posts');
    const [posts, setPosts] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const responseData = await response.json();
            setPosts(responseData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
            {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                <>
                 {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </>
            </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>Loading...</h2>
                </div>
            )}
        </div>
    );
}

export default PostsList;