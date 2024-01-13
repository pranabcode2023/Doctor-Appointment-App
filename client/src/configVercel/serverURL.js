// const serverURL =
//   process.env.NODE_ENV === "development"
//     /? "http://localhost:8080"
//     : "https://doctor-appointment-app-server.vercel.app";

// export { serverURL };

const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCALHOST_SERVER
    : process.env.REACT_APP_VERCEL_SERVER;

export { serverURL };
