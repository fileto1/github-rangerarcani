import * as React from "react";
import {
  Box,
  Link,
  Typography,
  styled,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)({
  background: "#1599579c",
  background: `-webkit-linear-gradient(to right, #155799, #159957)`,
  background: `linear-gradient(to right, #15579999, #15995791)`,

  // padding: 0,
  margin: 0,
  position: "fixed",
  zIndex: "1100",
  display: "flex",
  justifyContent: "center",
  top: 0,
  paddingTop: 5,
  paddingBottom: 5,
  marginBottom: 5,
  width: "100%",
});

const StyledToolBar = styled(Toolbar)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <StyledToolBar sx={{flexFlow: "wrap"}}>
        <Box
          sx={{
            flex: 1,
            alignItems: "center",
            // display: {xs: "none", sm: "flex"},
            display: "flex",
            order: {xs: 2, sm: 1},
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ml: 2}}
            startIcon={<DownloadIcon />}
          >
            <Box sx={{display: {xs: "none", sm: "flex"}}}>Download Game</Box>
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            width: "100%",
            order: {xs: 1, sm: 2},
          }}
        >
          <img
            sx={{width: {xs: "inherit", sm: "100%"}}}
            src="/images/ra-banner.gif"
            alt=""
          ></img>
        </Box>
        <Box
          sx={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            display: "flex",
            // display: {xs: "none", sm: "flex"},
            width: {xs: "50%", sm: "auto"},
            order: {xs: 3},
          }}
        >
          <Link
            href="https://discord.gg/EbCvfY68"
            target="blank"
            style={{marginRight: 20, display: "flex", alignItems: "center"}}
          >
            <img width="150" alt="logo" src="/images/discord.png" />
          </Link>
          <Link
            style={{marginRight: 20}}
            color="lightblue"
            href="https://www.facebook.com/RangersArcani"
            target="blank"
            underline="none"
          >
            <FacebookIcon style={{fontSize: 30}} />
          </Link>
          <Link
            style={{marginRight: 20}}
            color="#d80505"
            href="https://www.youtube.com/channel/UChJqyvorMj6YTShP10AHTJA"
            target="blank"
            underline="none"
          >
            <YouTubeIcon style={{fontSize: 30}} />
          </Link>
        </Box>
      </StyledToolBar>
    </StyledAppBar>
  );
}
