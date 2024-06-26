import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { HouseDoorFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(query));
  };

  return (
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img src="logo.png" alt="Spotify Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="/">
                  <HouseDoorFill />
                  Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="/">
                  <BookFill /> Your Library
                </a>
              </li>
              <li>
                <form className="input-group mt-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={query}
                    onChange={onChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                      GO
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-btn d-flex flex-column align-items-center ms-2">
          <button className="btn" id="signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn" id="login-btn" type="button">
            Login
          </button>
          <a href="/">Cookie Policy</a>
          <a href="/"> Privacy</a>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
