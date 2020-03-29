import React, { useState, useEffect } from "react";
import store from "store";
import authWithAxios from "../../utils/authWithAxios";
import { DashCard } from "./card";
// import { Starwars } from "../../../index";

// interface StarwarsArr extends Array<Starwars> {}

const Dashboard = () => {
  // const [users, setUsers] = useState<StarwarsArr>();
  const [jobs, setJobs] = useState([]);

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setCredForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    setCredForExtension();
    authWithAxios()
      .get("/users/jobs")
      .then(res => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>{`Welcome ${
        store.get("okta-token-storage").idToken.claims.name
      }`}</h1>
      <div
        style={{
          width: "94%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingTop: "50px",
          paddingBottom: "100px"
        }}
      >
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <DashCard key={index} name={job.jobTitle} url={job.url} />
          ))
        ) : (
          <div>You currently have no jobs saved to your account.</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
