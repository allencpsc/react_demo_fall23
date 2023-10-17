import { useRouteError } from "react-router-dom";

function ErrorNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.
        <br></br>
        This is just a dummy page to follow along with the lecture, please press back to return to the home page :)
      </p>
      <p>
        <i>{ error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}

export default ErrorNotFound
