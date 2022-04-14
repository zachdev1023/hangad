import { Form, Button } from "react-bootstrap";

import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = formData;

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
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder="Name"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder="Email"
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            type="password"
            placeholder="Confirm Password"
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

export default Register;
