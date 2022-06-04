import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";

class Registration extends Component {
  render() {
    return (
      <div>
        <Card className="card-body cardbody-color p-sm-5">
          <Card.Header>
            <h1>Registrasi Akun</h1>
          </Card.Header>
          <Card.Title>Daftarkan akun anda disini.</Card.Title>
          <Form className="card-body">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Registration;
