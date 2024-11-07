import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./DropDown.css";
import { Link } from "react-router-dom";

function NavBar() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const ITEM_HEIGHT = 48;
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

  const handleSendMessage = () => {
    handleCloseContactMenu(); // Close the dropdown after selection
  };

  const handleOpenLinks = () => {
    window.open("https://linktr.ee/ur_productss", "_blank"); // Open the links in a new tab
    handleCloseContactMenu(); // Close the dropdown after selection
  };

  return (
    <>
      <ul dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <li>
          <Link className="nav-link scrollto active" to="/">
            {t("header.Home")}
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/AllSolution/">
            {t("header.Oursolution")}
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/Services/">
            {t("header.Services")}
          </Link>
        </li>

        <li>
          <Link className="nav-link scrollto" to="/products/">
            {t("header.product")}
          </Link>
        </li>

        <li>
          <Link className="nav-link scrollto" to="/ViewAllProject/">
            {t("header.OurProject")}
          </Link>
        </li>

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

        
        <li>
          <Link className="nav-link scrollto" to="/Clints/">
            {t("header.OurClinents")}
          </Link>
        </li>

        <li className="custom-dropdown">
          <a
            className="custom-nav-link custom-scrollto"
            aria-controls={openContactMenu ? "contact-menu" : undefined}
            aria-haspopup="true"
            onClick={handleContactClick} // Opens the contact dropdown on click
            style={{ cursor: "pointer" }}
          >
            {t("header.Contact")}
          </a>
          <Menu
            id="contact-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={contactAnchorEl}
            open={openContactMenu}
            onClose={handleCloseContactMenu}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleSendMessage}>
              <a className="nav-link scrollto" href="#contact">
                {t("header.SendaMassage")}
              </a>
            </MenuItem>
            <MenuItem onClick={handleOpenLinks}>{t("header.OurLink")}</MenuItem>
          </Menu>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
