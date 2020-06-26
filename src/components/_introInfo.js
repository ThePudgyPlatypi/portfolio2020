import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@material-ui/core";

const IntroInfo = ({ info }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(info);
  }, [info]);

  function introParagraph() {
    return { __html: data[0] ? data[0].intro : "" };
  }

  return data[0] ? (
    <Grid item xs={12} md={6}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" color="initial">
            {data[0] ? data[0].name : null}
          </Typography>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              id="intro"
              dangerouslySetInnerHTML={introParagraph()}
            ></Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default IntroInfo;
