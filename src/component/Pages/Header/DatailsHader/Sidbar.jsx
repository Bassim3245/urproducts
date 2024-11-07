import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./DropDown.css";
import { Link } from "react-router-dom";

function Sidbar() {
  const { t, i18n } = useTranslation();

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

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the button that was clicked
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the dropdown
  };

  const handleSendMessage = () => {
    handleClose(); // Close the dropdown after selection
  };

  const handleOpenLinks = () => {
    window.open("https://linktr.ee/ur_productss", "_blank"); // Open the links in a new tab
    handleClose(); // Close the dropdown after selection
  };

  const [eventAnchorEl, setEventAnchorEl] = useState(null); // State for events dropdown
  const [contactAnchorEl, setContactAnchorEl] = useState(null); // State for contact dropdown
  const openEventMenu = Boolean(eventAnchorEl);
  const openContactMenu = Boolean(contactAnchorEl);

  const handleEventClick = (event) => {
    setEventAnchorEl(event.currentTarget);
  };

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleCloseEventMenu = () => {
    setEventAnchorEl(null);
  };

  const handleCloseContactMenu = () => {
    setContactAnchorEl(null);
  };

 

  
  return (
    <div className=" position-relative ">
      <div className="position-absolute z-0 styleNvbar ">
        <ul
          className="d-flex justify-content-center flex-column  "
          style={{ backgroundColor: "white" }}
        >
          <li className="p-3">
            <a href="/">{t("header.Home")}</a>
          </li>

          <li className="p-3">
            <Link to="/AllSolution/">{t("header.Oursolution")}</Link>
          </li>
        
          <li className="p-3">
            <Link to="/Services/">{t("header.Services")}</Link>
          </li>

          <li className="p-3 Dropdown">
            <Link to="/products/">{t("header.product")}</Link>
          </li>
        
         
          <li className="p-3">
            <Link to="/ViewAllProject/">{t("header.OurProject")}</Link>
          </li>


          {/* -------------------------------------------------------- */}
          
          <li>
          <a
            className="custom-nav-link custom-scrollto"
            aria-controls={openEventMenu ? "event-menu" : undefined}
            aria-haspopup="true"
            onClick={handleEventClick} // Opens the events dropdown on click
            style={{ cursor: "pointer" }}
          >
            {t("header.OurEvent")}
          </a>
          <Menu
            id="event-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={eventAnchorEl}
            open={openEventMenu}
            onClose={handleCloseEventMenu}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <Link to="/visits/" className="nav-link scrollto">
              <MenuItem>{t("Event.visits")}</MenuItem>
            </Link>
            <Link to="/Exhibits/" className="nav-link scrollto">

            <MenuItem>
                {t("Event.exhibits")}
            </MenuItem>
            </Link>

            <Link to="/Training/" className="nav-link scrollto">
            <MenuItem>
             
                {t("Event.WorkShop")}
            </MenuItem>
            </Link>

          </Menu>
        </li>


          {/* -------------------------------------------------------- */}



          
          <li className="p-3 Dropdown">
            <Link to="/Clints/">{t("header.OurClinents")}</Link>
          </li>

          

          {/* -------------------------------------------------------------------------- */}

          <li className="custom-dropdown">
            {/* Button to trigger the dropdown menu */}
            <a
              className="custom-nav-link custom-scrollto"
              aria-controls={open ? "long-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick} // Opens the dropdown on click
              style={{ cursor: "pointer" }}
            >
              {t("header.Contact")}
            </a>
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
              {/* Language selection menu items */}
              <MenuItem onClick={handleSendMessage}>
                {" "}
                <a className="nav-link scrollto" href="#contact">
                  {t("header.SendaMassage")}
                </a>
              </MenuItem>
              <MenuItem onClick={handleOpenLinks}>
                {t("header.OurLink")}
              </MenuItem>
            </Menu>
          </li>

          {/* -------------------------------------------------------------------- */}
          <li className="p-3" style={{ cursor: "pointer" }}>
            <a onClick={handleDirectionArabic}>العربية</a>
          </li>
          <li className="p-3" style={{ cursor: "pointer" }}>
            <a onClick={handleDirectionEnglish}>English</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidbar;
