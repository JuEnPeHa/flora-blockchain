import React from "react";
import ReactDOM from "react-dom";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  // eslint-disable-next-line react/prop-types
  const {isLoggedIn} = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function LoginButton(props) {
  return (
    // eslint-disable-next-line react/prop-types,react/button-has-type
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    // eslint-disable-next-line react/prop-types,react/button-has-type
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    // @ts-ignore
    const {isLoggedIn} = this.state;
    let button;
    // eslint-disable-next-line prefer-const
    button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.querySelector('#root')
);
