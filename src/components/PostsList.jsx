import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

function PostsList(){
    return (
        <div>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Ryan" body="React.js is awesome!"/>
                <Post author="Michael" body="Next.js is awesome!"/>
            </ul>
        </div>
    );
}

export default PostsList;