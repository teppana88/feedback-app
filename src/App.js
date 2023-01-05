function App() {
  const title = "Blog post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "comment 1" },
    { id: 2, text: "comment 2" },
    { id: 3, text: "comment 3" },
    { id: 4, text: "comment 4" },
  ];
  return (
    <div className='container'>
      <h1>Hello My App</h1>
      <h3>
        {title} (comments: {comments.length})
      </h3>
      <p>{body}</p>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
