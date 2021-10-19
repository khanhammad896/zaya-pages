import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import logo from "../assets/Logo.PNG";
import MainButton from "../components/MainButton";
import { Button, Menu, MenuItem } from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Navbar = ({ fontSizes }) => {
  const { font25px } = fontSizes;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [width, setWidth] = React.useState(
    window !== undefined && window.innerWidth
  );
  React.useEffect(() => {
    function handleResize() {
      setWidth(window !== undefined && window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [width]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavbarWrapper font25px={font25px}>
        <Grid container>
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid
            item
            style={{ display: "flex", flexGrow: 1, alignItems: "center" }}
          >
            {width > 800 ? (
              <Grid
                container
                style={{ justifyContent: "flex-end", alignItems: "center" }}
                columnSpacing={{ xs: 3, sm: 5, md: 7, lg: 10 }}
              >
                <Grid item>
                  <span className="menu-items">How it Works</span>
                </Grid>
                <Grid item>
                  <Grid container columnSpacing={2}>
                    <Grid item style={{ cursor: "pointer" }}>
                      <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        style={{
                          padding: 0,
                          textTransform: "none",
                          fontSize: 16,
                          letterSpacing: 0,
                        }}
                      >
                        <span className="menu-items">For Practitioners</span>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          For Maternal Care
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          For Practitioners
                        </MenuItem>
                      </Menu>
                    </Grid>
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MdArrowForwardIos />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <div className="button-container">
                    <MainButton
                      borderColor="#0A148D"
                      textColor="#FFFFFF"
                      background="#0A148D"
                      text="Find Care"
                    />
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                style={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <FaBars />
              </Grid>
            )}
          </Grid>
        </Grid>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  width: 90%;
  padding-block: 20px;

  .menu-items {
    color: #102534;
    font-family: AvenirMedium;
    font-size: ${(props) => props.font25px};
    cursor: pointer;
  }

  svg {
    font-size: 1.1em;
    transform: rotate(90deg);
  }

  .button-container {
    width: 150px;
    height: 50px;
  }

  @media screen and (max-width: 800px) {
    svg {
      transform: rotate(0deg);
      font-size: 1.5rem;
      color: #0a148d;
      cursor: pointer;
    }
  }
`;
