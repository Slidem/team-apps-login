import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    error: false
  };

  componentDidMount() {
    const queryString = this.props.location.search;
    const error = queryString && queryString.indexOf("error") >= 0;
    this.setState({ error });
  }

  renderError() {
    return (
      <div className="form-group text-center">
        <small id="passwordHelp" className="text-danger">
          <i class="fa fa-minus-circle" aria-hidden="true" /> Username or
          password invalid.
        </small>
      </div>
    );
  }

  refreshErrorMessage = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" method="post" action="login">
                  {this.state.error && this.renderError()}
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUsername"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={this.refreshErrorMessage}
                      required
                      autofocus
                    />
                    <label for="inputUsername">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.refreshErrorMessage}
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
