import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { Grid, Box, Input } from "@mui/material";
import Heading from "../assets/Heading.PNG";
import { AiOutlineSearch } from "react-icons/ai";
import img0 from "../assets/blog_image0.PNG";
const Blogs = ({ fontSizes }) => {
  const { font70px, font23px, font25px } = fontSizes;
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <>
      <BlogsWrapper font70px={font70px} font23px={font23px} font25px={font25px}>
        <Banner fontSizes={fontSizes} />
        <Navbar fontSizes={fontSizes} />
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item className="header-container">
            <img src={Heading} alt="The Blog" />
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "center" }}
          columnSpacing={{ sm: 6, md: 10, lg: 15 }}
        >
          <Grid item>
            <span
              className={
                tabIndex === 0 ? "tab-text-active" : "tab-text-disabled"
              }
              onClick={() => setTabIndex(0)}
            >
              For Women
            </span>
          </Grid>
          <Grid item>
            <span
              className={
                tabIndex === 1 ? "tab-text-active" : "tab-text-disabled"
              }
              onClick={() => setTabIndex(1)}
            >
              For Practitoners
            </span>
          </Grid>
        </Grid>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item lg={4} md={6} sm={8} xs={7} style={{ marginBlock: 50 }}>
            <Input fullWidth />
          </Grid>
          <Grid item style={{ position: "relative" }}>
            <div className="badge">
              <AiOutlineSearch />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ paddingInline: 300 }}>
          <Grid container className="full-cards">
            <Grid item lg={4} md={5} sm={7} xs={12}>
              <div className="img0-wrapper">
                <img src={img0} alt="women" />
              </div>
            </Grid>
            <Grid
              item
              style={{ flexGrow: 1, paddingInlineStart: 130, paddingBlock: 50 }}
            >
              <Grid container direction="column">
                <div className="blog-info">
                  <span>11.21.21 </span>
                  <span style={{ marginLeft: 30 }}>3 MIN READ</span>
                </div>
                <div className="blog-text">
                  <span>This is the title of the post with max 2 lines.</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ marginBlock: 50 }}></Grid>
      </BlogsWrapper>
    </>
  );
};

export default Blogs;

const BlogsWrapper = styled.section`
  width: 100%;
  // height: 100vh;
  background: #faf8f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-container {
    margin-block: 50px;
  }

  .tab-text-active,
  .tab-text-disabled {
    font-size: ${(props) => props.font70px};
    font-family: BigCaslonMedium;
    color: #20292a;
    cursor: pointer;
    text-align: center;
    transition: opacity 0.3s ease-out;
  }
  .tab-text-disabled {
    opacity: 0.39;
  }

  .gap {
    margin-inline-start: 100px;
  }
  .MuiInput-root:before {
    border-bottom: none;
  }
  .MuiInput-underline {
    border-bottom: 1px solid #ada08f;
  }

  .badge {
    width: 60px;
    height: 60px;
    background: #f04444;
    border-radius: 50%;
    position: absolute;
    bottom: 35px;
    left: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .badge svg {
    color: #ffffff;
    font-size: 1.7em;
  }

  .full-cards {
    background: #fff;
    border-radius: 36px;
    box-shadow: 0px 30px 40px #0000000f;
  }

  .img0-wrapper {
    width: 100%;
    height: 100%;
  }
  .img0-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 36px 0px 0px 36px;
  }
  .blog-info {
    display: inline-block;
  }
  .blog-info span {
    font-size: ${(props) => props.font23px};
    color: #afafaf;
    letter-spacing: 2.3px;
    font-family: AvenirHeavy;
  }
  .blog-text {
    margin-block: 60px;
  }
  .blog-text span {
    color: #20292a;
    font-size: ${(props) => props.font70px};
    font-family: BigCaslonMedium;
  }
`;
