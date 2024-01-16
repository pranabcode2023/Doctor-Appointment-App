// const serverURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:8080"
//     : "https://doctor-appointment-app-server.vercel.app";

// export { serverURL };

//NOTE -  env config vercel url
const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCALHOST_SERVER_URL
    : process.env.REACT_APP_VERCEL_SERVER_URL;

export { serverURL };
