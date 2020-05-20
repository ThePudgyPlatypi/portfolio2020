import React from "react";
import Featured from "../components/_featureList";
import content from "../resources/siteContent";
import IconList from "../components/_iconList";
import { Grid, Typography, Container, Box } from "@material-ui/core";

const Home = ({ match }) => {
  const desc = content[0].pages.find((desc) => desc.name === "home");

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h1" color="initial">
                  Chris Stehm
                </Typography>
                <Box>
                  {desc.content.about.map((paragraph, key) => (
                    <Typography key={key} variant="body1" color="initial">{paragraph}</Typography>
                  ))}
                </Box>
                <Box>
                  <IconList links={content[3].links} />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="cell small-12 medium-6">
              <Featured match={match} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
