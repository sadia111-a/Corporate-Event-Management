import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Helmet>
        <title>Event | ErrorPage</title>
      </Helmet>
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          We couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
