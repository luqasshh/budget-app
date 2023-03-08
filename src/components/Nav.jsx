// assets
import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go home">
        <img src={logomark} alt="logomark" height={30} />
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all data?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <TrashIcon width={20} />
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
