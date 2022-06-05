import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/utils";
import Buttonnya from "../Forms/Button";

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-6 ">
            <h3>Laman Login</h3>
            <Form className="mt-4 mb-4" onSubmit={this.handleSubmit}>
              <Form.Group class="form-outline mb-4">
                <Form.Label class="form-label" for="form2Example1">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  id="form2Example1"
                  class="form-control"
                />
              </Form.Group>

              <Form.Group class="form-outline mb-4">
                <Form.Label class="form-label" for="form2Example1">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="form2Example2"
                  class="form-control"
                />
              </Form.Group>

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <Form.Check
                    class="form-check"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  >
                    <Form.Label class="form-check-label" for="form2Example31">
                      {" "}
                      Remember me{" "}
                    </Form.Label>
                  </Form.Check>
                </div>

                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <div class="text-center">
                <p>
                  Belum terdaftar?
                  <Link to="/registration">
                    <span className="text-primary">Register</span>
                  </Link>
                </p>
                <p>or </p>
                <Buttonnya onClick={signInWithGoogle}>
                  Masuk Dengan Googel
                </Buttonnya>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignIn;
