const names = ['Ryan', 'Vicki'];

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <div>
            <h1>Post</h1>
            <p>{chosenName}</p>
            <p>React.js is awesome!</p>
        </div>
  );
}

export default Post;