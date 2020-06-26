import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useAuth0 } from "./react-auth0-spa";

export default function LabelBottomNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className="menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <MenuItem onClick={handleClose} value="home">
            Home
          </MenuItem>
        </Link>
        <Link to="/web">
          <MenuItem onClick={handleClose} value="web">
            Web
          </MenuItem>
        </Link>
        <Link to="/art">
          <MenuItem onClick={handleClose} value="art">
            Art
          </MenuItem>
        </Link>
        <Link to="/music">
          <MenuItem onClick={handleClose} value="music">
            Music
          </MenuItem>
        </Link>
        <Link to="/resume">
          <MenuItem onClick={handleClose} value="resume">
            Resume
          </MenuItem>
        </Link>
        {isAuthenticated && (
          <Link to="/cs-admin">
            <MenuItem onClick={handleClose} value="admin">
              Admin Panel
            </MenuItem>
          </Link>
        )}
        {isAuthenticated && (
          <MenuItem
            onClick={() => {
              logout();
            }}
            value="logout"
          >
            Logout
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
