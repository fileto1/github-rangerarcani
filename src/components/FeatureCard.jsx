import React from "react";
import {Typography, Card, CardContent, Box, styled} from "@mui/material";

const CardStyled = styled(Card)({
  background: "transparent",
  borderBottom: "1px solid #6a6a6a",
  borderRadius: 0,
  marginBottom: 28,
  color: "white",
});

const Image1Styled = styled("img")(({theme, imageWidth}) => {
  return {
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      width: `${imageWidth}px`,
    },
  };
});

const FeatureCard = ({
  title,
  sectionText1,
  sectionText2,
  sectionText3,
  image,
  image2,
  imageWidth,
  inverse,
  marginLeftInitial,
  firstFlexValue,
}) => {
  const orderInverse = inverse ? 2 : 1;
  const flexFirst = firstFlexValue ? firstFlexValue : 2;

  return (
    <CardStyled style={{width: "100%"}}>
      <CardContent>
        <Box
          sx={{flexWrap: {xs: "wrap", sm: "no-wrap"}}}
          display="flex"
          direction="column"
        >
          <Box
            sx={{
              flex: flexFirst,
              mr: 2,
              order: orderInverse,
              ml: marginLeftInitial,
            }}
          >
            <Typography gutterBottom variant="h4">
              {title}
            </Typography>

            <Typography sx={{mb: 2}} variant="subtitle1">
              {sectionText1}
            </Typography>
            {sectionText2 && (
              <Typography sx={{mb: 2}} variant="subtitle1">
                {sectionText2}
              </Typography>
            )}
            {sectionText3 && (
              <Typography sx={{mb: 2}} variant="subtitle1">
                {sectionText3}
              </Typography>
            )}
            {image2 && <img src={image2} alt="image2"></img>}
          </Box>
          {image ? (
            inverse ? (
              <Box
                sx={{
                  flex: 3,
                  order: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 3,
                }}
              >
                <img src={image} width={imageWidth} alt="image"></img>
              </Box>
            ) : (
              <Box sx={{flex: 3, order: 2}}>
                <Image1Styled
                  src={image}
                  imageWidth={imageWidth}
                  alt="image"
                ></Image1Styled>
                {/* <img src={image} width={image1Width} alt="image"></img> */}
              </Box>
            )
          ) : (
            ""
          )}
        </Box>
      </CardContent>
      {/* <Box
        display="flex"
        justifyContent="center"
        sx={{width: "60%", borderBottom: "1px solid red", textAlign: "center"}}
      ></Box> */}
    </CardStyled>
  );
};

export default FeatureCard;
