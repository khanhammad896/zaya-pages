import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { Grid, Box, Input } from "@mui/material";
import Heading from "../assets/Heading.PNG";
import { AiOutlineSearch } from "react-icons/ai";
import img0 from "../assets/blog_image0.PNG";
import BlogCard from "../components/BlogCard";
const Blogs = ({ fontSizes, isMobileView }) => {
  const { font70px, font23px, font25px, font28px } = fontSizes;
  const [tabIndex, setTabIndex] = React.useState(0);
  const blogDetails = [
    {
      id: 0,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
    {
      id: 1,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
    {
      id: 2,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
    {
      id: 3,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
    {
      id: 4,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
    {
      id: 5,
      date: "11.11.21",
      read_time: "3 MIN READ",
      title: "This is the title of the post with max 2 lines.",
      author: "By Sara Seigel",
    },
  ];
  console.log("Is Mobile view >> ", isMobileView);
  return (
    <>
      <BlogsWrapper
        font70px={font70px}
        font23px={font23px}
        font25px={font25px}
        font28px={font28px}
      >
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
        <Grid container justifyContent="center">
          <Grid item lg={8} md={9} sm={10} xs={11}>
            <Grid container className="full-cards">
              <Grid item lg={4} md={5} sm={12} xs={12}>
                <div className="img0-wrapper">
                  <img src={img0} alt="women" />
                </div>
              </Grid>
              <Grid
                item
                lg={8}
                md={7}
                sm={12}
                xs={12}
                style={{ padding: "50px 50px 50px 10%" }}
              >
                <Grid container direction="column">
                  <div className="blog-info">
                    <span>11.21.21 </span>
                    <span style={{ marginLeft: 30 }}>3 MIN READ</span>
                  </div>
                  <div className="blog-title">
                    <span>This is the title of the post with max 2 lines.</span>
                  </div>
                  {!isMobileView && (
                    <div className="blog-body">
                      <span>
                        We connect you to the right care and expertise through
                        our wide-ranging network of maternal health specialists.
                        This is the max length.
                      </span>
                    </div>
                  )}
                  <div className="blog-author">
                    <span>BY SARA SEIGEL</span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ marginBlock: 50 }} justifyContent="center">
          <Grid item lg={8} md={9} sm={10} xs={11}>
            <Grid container>
              {blogDetails.map((blog) => (
                <BlogCard key={blog.id} id={blog.id} />
              ))}
            </Grid>
          </Grid>
        </Grid>
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
  .blog-title {
    margin: 40px 0 20px 0;
    max-width: max-content;
  }
  .blog-title span {
    color: #20292a;
    font-size: ${(props) => props.font70px};
    font-family: BigCaslonMedium;
  }
  .blog-body {
    max-width: 100%;
  }
  .blog-body span {
    font-size: ${(props) => props.font28px};
    font-family: AvenirBook;
    color: #7b7269;
    line-height: 2;
  }

  .blog-author {
    margin-top: 30px;
  }
  .blog-author span {
    color: #20292a;
    font-size: ${(props) => props.font23px};
    font-family: AvenirHeavy;
  }

  @media screen and (max-width: 899px) {
    .img0-wrapper img {
      border-radius: 36px;
    }
  }
`;
