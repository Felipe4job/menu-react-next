import React, { useEffect, useState } from "react";

import style from "../../styles/Nav.module.css";
import {
  Divider,
  Fade,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faCalendarAlt,
  faChartLine,
  faClipboard,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "../tools/Link";
import { useRouter } from "next/router";

export default function MainNav({ page, subMenu }) {
  const router = useRouter();

  const [open, setOpen] = useState(true);

  const [openSubMenu, setOpenSubMenu] = useState({
    menuFour: false,
  });

  const [activeMenu, setActiveMenu] = useState({
    menuOne: false,
    menuTwo: false,
    menuThree: false,
    menuFour: false,
    sair: false,
    // Start Submenu
    submenuOne: false,
    submenuTwo: false,
    submenuThree: false,
    submenuFour: false,
  });

  useEffect(() => {
    setActiveMenu({ [page]: true });
    subMenu ? setOpenSubMenu({ [subMenu]: true }) : undefined;
    const screenWidth = window.screen.width;
    screenWidth < 768 ? setOpen(false) : undefined;
  }, []);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
    setOpenSubMenu({ menuFour: false, financeiro: false });
  };

  function handleClickMenu(event) {
    for (let menu in activeMenu) {
      let active = activeMenu[menu];
      if (!(event.currentTarget.id === "menuFour")) {
        if (active === true && menu !== "menuFour") {
          setActiveMenu({ ...activeMenu, [menu]: false });
        }
      }
    }

    switch (event.currentTarget.id) {
      case "menuOne":
        router.push({ pathname: "/" });
        break;
      case "menuTwo":
        router.push({ pathname: "/pagetwo" });
        break;
      case "menuThree":
        router.push({ pathname: "/pagethree" });
        break;
      case "menuFour":
        setOpenSubMenu({
          ...openSubMenu,
          menuFour: !openSubMenu.menuFour,
        });
        break;
      case "sair":
        setActiveMenu({ [event.currentTarget.id]: true });
        break;

      // start submenu 'menuFour'
      case "submenuOne":
        router.push({ pathname: "/submenufour/submenuone" });
        break;
      case "submenuTwo":
        router.push({ pathname: "/submenufour/submenutwo" });
        break;
      case "submenuThree":
        router.push({ pathname: "/submenufour/submenuthree" });
        break;
      case "submenuFour":
        router.push({ pathname: "/submenufour/submenufour" });
        break;
    }
  }

  return (
    <nav className={open ? style.navAE : style.navAEClose}>
      <header className={open ? style.navHeaderOpen : style.navHeaderClose}>
        {open ? (
          <FontAwesomeIcon
            onClick={handleMenuClose}
            icon={faArrowLeft}
            className={style.navIcon}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleMenuOpen}
            icon={faBars}
            className={style.navIconBars}
          />
        )}
      </header>
      <Divider style={{ borderColor: "white" }} />

      {/* Start Main Menu */}

      <MenuList>
        <MenuItem
          id='menuOne'
          className={activeMenu.menuOne ? style.active : undefined}
          onClick={handleClickMenu}
        >
          <ListItemIcon>
            <Link href={"#"}>
              <FontAwesomeIcon icon={faCalendarAlt} className={style.navIcon} />
            </Link>
          </ListItemIcon>
          <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
            <ListItemText className={style.navText}>menu Um</ListItemText>
          </Fade>
        </MenuItem>
        <MenuItem
          id='menuTwo'
          className={activeMenu.menuTwo ? style.active : undefined}
          onClick={handleClickMenu}
        >
          <ListItemIcon>
            <Link href={"#"}>
              <FontAwesomeIcon icon={faChartLine} className={style.navIcon} />
            </Link>
          </ListItemIcon>
          <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
            <ListItemText className={style.navText}>Menu Dois</ListItemText>
          </Fade>
        </MenuItem>
        <MenuItem
          id='menuThree'
          className={activeMenu.menuThree ? style.active : undefined}
          onClick={handleClickMenu}
        >
          <ListItemIcon>
            <Link href={"#"}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={style.navIcon}
              />
            </Link>
          </ListItemIcon>
          <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
            <ListItemText className={style.navText}>Menu Três</ListItemText>
          </Fade>
        </MenuItem>
        <MenuItem
          id='menuFour'
          className={activeMenu.menuFour ? style.active : undefined}
          onClick={handleClickMenu}
        >
          <ListItemIcon>
            <Link href={"#"}>
              <FontAwesomeIcon icon={faClipboard} className={style.navIcon} />
            </Link>
          </ListItemIcon>
          <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
            <ListItemText className={style.navText}>Menu Quatro</ListItemText>
          </Fade>
        </MenuItem>

        {/* Start menuFour's SubMenu */}

        <MenuList
          className={style.navSubMenu}
          style={!openSubMenu.menuFour ? { display: "none" } : undefined}
        >
          <MenuItem
            id='submenuOne'
            className={activeMenu.submenuOne ? style.activeSubMenu : undefined}
            onClick={handleClickMenu}
          >
            <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
              <ListItemText className={style.navText}>Submenu Um</ListItemText>
            </Fade>
          </MenuItem>
          <MenuItem
            id='submenuTwo'
            className={activeMenu.submenuTwo ? style.activeSubMenu : undefined}
            onClick={handleClickMenu}
          >
            <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
              <ListItemText className={style.navText}>
                Submenu Dois
              </ListItemText>
            </Fade>
          </MenuItem>
          <MenuItem
            id='submenuThree'
            className={
              activeMenu.submenuThree ? style.activeSubMenu : undefined
            }
            onClick={handleClickMenu}
          >
            <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
              <ListItemText className={style.navText}>
                Submenu Três
              </ListItemText>
            </Fade>
          </MenuItem>
          <MenuItem
            id='submenuFour'
            className={activeMenu.submenuFour ? style.activeSubMenu : undefined}
            onClick={handleClickMenu}
          >
            <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
              <ListItemText className={style.navText}>
                Submenu Quatro
              </ListItemText>
            </Fade>
          </MenuItem>
        </MenuList>

        {/* End menuFour's SubMenu */}

        <MenuItem
          id='sair'
          className={activeMenu.sair ? style.active : undefined}
          onClick={handleClickMenu}
        >
          <ListItemIcon>
            <Link href={"#"}>
              <FontAwesomeIcon icon={faSignOutAlt} className={style.navIcon} />
            </Link>
          </ListItemIcon>
          <Fade in={open} timeout={{ enter: 0, exit: 500 }}>
            <ListItemText className={style.navText}>Sair</ListItemText>
          </Fade>
        </MenuItem>
      </MenuList>
    </nav>
  );
}
