import React from "react";

import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import style from "../../styles/Nav.module.css";
import Link from "../tools/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Top(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className={style.top}>
        <div className={style.topTitle}>
          <h3>Nome do Cliente</h3>
        </div>
        <div className={style.topProfile}>
          <Tooltip title='Notificações'>
            <IconButton
              onClick={handleClick}
              size='small'
              sx={{ ml: 2 }}
              aria-controls={open ? "notification-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={open ? "true" : undefined}
            >
              <FontAwesomeIcon icon={faBell} style={{ color: "black" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='Seu Perfil'>
            <IconButton
              onClick={handleClick}
              size='small'
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
          </Tooltip>
        </div>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar /> Nome do perfil
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Link href={"#"}>
                <FontAwesomeIcon
                  className={style.navIconProfile}
                  icon={faGear}
                />
              </Link>
            </ListItemIcon>
            Configurações
          </MenuItem>
        </Menu>
      </nav>
      <div className={style.mainContent}>{props.children}</div>
    </>
  );
}
