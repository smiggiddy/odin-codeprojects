import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <p>
        You can go back to the home page by clicking&nbsp;
        <Link to="/">here</Link>
        &nbsp;though!
      </p>
    </div>
  );
}

export default ErrorPage;
