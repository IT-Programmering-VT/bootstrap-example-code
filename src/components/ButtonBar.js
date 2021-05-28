import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ButtonBar = () => {
  return (
    <ButtonToolbar className="custom-btn-toolbar">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/users">
        <Button>Users</Button>
      </Link>
      <Link to="/login">
        <Button>Log in</Button>
      </Link>
    </ButtonToolbar>
  );
};

export default ButtonBar;
