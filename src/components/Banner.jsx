import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
const Banner = ({ fontSizes }) => {
  const { font25px } = fontSizes;
  return (
    <>
      <BannerWrapper font25px={font25px}>
        <Grid container style={{ justifyContent: "center" }}>
          <span>This is where Zaya has amazing announcements!</span>
        </Grid>
      </BannerWrapper>
    </>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  width: 100%;
  background: #f04444;

  span {
    padding-block: 10px;
    color: #1d27a2;
    font-family: AvenirBook;
    font-size: ${(props) => props.font25px};
    text-align: center;
  }
`;
