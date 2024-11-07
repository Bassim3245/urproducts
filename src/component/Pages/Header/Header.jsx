import React, { useEffect, useState } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Sidbar from "./DatailsHader/Sidbar";
import NavBar from "./DatailsHader/NavBar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const [mobNVBAr, setMoBNVBAR] = useState(
    window.innerWidth >= 991 ? true : false
  );
  useEffect(() => {
    AOS.init();
  }, []);

  const HandleButton = () => {
    setMoBNVBAR(false);
  };

  const HandleClose = () => {
    setMoBNVBAR(true);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (window.innerWidth < 991) {
      setMoBNVBAR(true);
    }
  }, []);

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDirectionArabic = () => {
    i18n.changeLanguage("ar");
    localStorage.setItem("language", "ar");
    handleClose();
  };

  const handleDirectionEnglish = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
    handleClose();
  };

  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
         

          <Link to="/">
            <img
              src="/image/system_logo_color.jpg"
              alt="No Image"
              width={"55px"}
              height={"50px"}
              style={{borderRadius:"50%"}}
            />
          </Link>

        </h1>
        <nav id="navbar" className="navbar  mobile-nav-toggle">
          {mobNVBAr ? (
            <NavBar />
          ) : (
            <div className="me-5">
              <Sidbar />
            </div>
          )}
          <div className="hedinIconBotton">
            {mobNVBAr ? (
              <IconButton
                aria-label="side"
                color="primary"
                onClick={HandleButton}
              >
                <i style={{ color: "white" }}>
                  <DehazeIcon />
                </i>
              </IconButton>
            ) : (
              <IconButton
                aria-label="side"
                color="primary"
                onClick={HandleClose}
              >
                <i style={{ color: "white" }}>
                  <CloseIcon />
                </i>
              </IconButton>
            )}
          </div>
        </nav>

        <Link to="/">
            <img
              src="/image/IMG_7796 (1).png"
              alt="No Image"
              width={"80px"}
              height={"50px"}
            />
          </Link>
        <div className="hidenTranslate" style={{right:"40px", top:"15px", position:"absolute"}}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "white" }}
          >
            <img
              src="/image/language.png"
              alt="No Image"
              width={"50px"}
              height={"50px"}
            />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleDirectionArabic}>العربية</MenuItem>
            <MenuItem onClick={handleDirectionEnglish}>English</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
