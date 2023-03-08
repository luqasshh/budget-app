// assets
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logomark} alt="logomark" height={30} />
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout">
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
