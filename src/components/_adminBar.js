import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

const AdminBar = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Avatar alt="user-image" src={user.picture} />
          <strong>{user.name}</strong>
        </Grid>
        <Grid item xs={6}>
          <h2>Admin Center</h2>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminBar;
