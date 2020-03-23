import React, { useState, useEffect } from "react";
import axios from "axios";
import store from "store";
import { DashCard } from "./card";
import { Starwars } from "../../../index";

interface StarwarsArr extends Array<Starwars> {}

const Dashboard = () => {
  const [users, setUsers] = useState<StarwarsArr>();

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setCredForExtension = () => {
    const email = store.get("okta-token-storage").idToken.claims.email;
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    setCredForExtension();
    axios
      .get("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people")
      .then(res => {
        setUsers(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        width: "94%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingTop: "50px"
      }}
    >
      {users &&
        users.map(user => (
          <DashCard key={user.name} Name={user.name} Year={user.birth_year} />
        ))}
    </div>
  );
};

export default Dashboard;
