export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h1 className="post-title">{post.title}</h1>
            <h3 className="post-author">By: {post.author.name}</h3>
            <p className="post-body">{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
