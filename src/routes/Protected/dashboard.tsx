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
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  const removeJob = async jobId => {
    const response = await authWithAxios().delete(
      `http://localhost:8080/users/removeJob/${jobId}`
    );
    if (response.status === 200) {
      const filter = jobs.filter(job => job.id !== jobId);
      setJobs(filter);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    setTokenForExtension();
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
      <h1>{`Welcome back, ${
        store.get("okta-token-storage").idToken.claims.name
      }`}</h1>
      <div
        style={{
          width: "auto",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: "50px",
          paddingBottom: "100px"
        }}
      >
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <DashCard key={index} job={job} removeJob={removeJob} />
          ))
        ) : (
          <div>You currently have no jobs saved to your account.</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
