import React, { useState, useEffect } from "react";
import Featured from "../components/_featureList";
import content from "../resources/siteContent";
import IconList from "../components/_iconList";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FetchDataReturn from "../helpers/fetchDataReturn";
import IntroInfo from "../components/_introInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "75px",
  },
}));

const Home = ({ match }) => {
  const classes = useStyles();
  const name = match.params.name;
  const [homeData, setHomeData] = useState({ featured: [], info: [] });

  useEffect(() => {
    const getAll = async () => {
      const f = await FetchDataReturn("/api/featured-pieces");
      const i = await FetchDataReturn("/api/info");
      setHomeData({ featured: f, info: i });
    };

    getAll();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container className={classes.root} spacing={3}>
          <IntroInfo info={homeData.info} />

          <Grid item xs={12} md={6}>
            <div className="cell small-12 medium-6">
              <Featured match={match} featured={homeData.featured} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
