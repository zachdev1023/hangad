import { Form, Button } from "react-bootstrap";

import { useState, useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-5">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="d-flex justify-content-center"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
