import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {Grid} from "@mui/material";
import MainBar from "./pages/main-bar/main-bar";
import Header from "./pages/header/header";
import Countdown from "./pages/countdown/countdown";

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{minHeight: {xs: "128px", sm: "68px"}}}></Box>
        <Box sx={{my: 2, position: "relative"}}>
          <Box display="flex" justifyContent="center">
            <img
              style={{top: -20, position: "fixed", zIndex: -1}}
              alt="logo"
              src="/images/logo_autumn.png"
            />
          </Box>
          <Grid
            sx={{marginBottom: 5}}
            direction="row"
            justifyContent="center"
            container
          >
            <Grid xs={12} md={10} lg={6} item>
              <Countdown style={{flex: 1}} />
            </Grid>
          </Grid>
          <MainBar />
        </Box>
      </Container>
    </>
  );
}
