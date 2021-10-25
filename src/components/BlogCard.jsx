import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
const BlogCard = ({ id }) => {
  return (
    <>
      <Grid
        item
        md={4}
        xs={12}
        sm={6}
        style={{ marginInline: id % 3 === 1 ? 20 : 0 }}
      >
        <BlogCardWrapper isGap={id % 3 === 1}></BlogCardWrapper>
      </Grid>
    </>
  );
};

export default BlogCard;

const BlogCardWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #fff;
  border-radius: 36px;
  box-shadow: 0px 30px 40px #0000000f;
`;
