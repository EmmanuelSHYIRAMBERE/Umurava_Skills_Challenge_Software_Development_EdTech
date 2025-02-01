import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  let errorMessage;

  if (isRouteErrorResponse(error)) {
    // If it's a Route Error Response
    errorMessage = error.statusText || error.data;
  } else if (error instanceof Error) {
    // If it's a standard Error object
    errorMessage = error.message;
  } else if (typeof error === "string") {
    // If it's a simple string error
    errorMessage = error;
  } else {
    // Fallback for any other unknown type
    errorMessage = "An unknown error occurred";
  }

  return (
    <div className="error-page min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-800 mb-4">Something went wrong.</p>
        <p className="text-gray-600">{errorMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
