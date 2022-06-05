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
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" className="mr-6" type="submit">
              Submit
            </Button>
            {/* <div class="line-separator"></div> <div class="or-label">or</div> */}
            <a
              variant="dark"
              class="shadow btn btn-google btn-outline ms-6 btn-dark"
              href="#"
            >
              <span>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
              </span>
              <span className="ms-2">Masuk dengan Google.</span>
            </a>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Registration;
