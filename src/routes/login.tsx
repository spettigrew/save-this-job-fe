import React, { useState } from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import Styled from "styled-components";

const Container = Styled.div`
    margin: 50px auto;
    width: 400px;
`;

interface MyUser {
  username: String;
  password: String;
}

function Login() {
  const [user, setUser] = useState<MyUser>({
    username: "",
    password: ""
  });

  const handleChanges = (e: any): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChanges}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChanges}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Login;
