import React from "react";

import Head from "../../Components/tools/Head";
import style from "../../styles/Nav.module.css";
import MainNav from "../../Components/Menu/MainNav";
import Top from "../../Components/Menu/Top";
import { Typography } from "@mui/material";

export default function instructors() {
  return (
    <>
      <Head title='Submenu Dois' />
      <main className={style.displayFlex}>
        <section className={style.displayFlex}>
          <MainNav page='submenuTwo' subMenu='menuFour' />
        </section>
        <section className={style.displayFlexColumn}>
          <Top>
            <Typography variant='h3' component='div' gutterBottom>
              Submenu Dois
            </Typography>
          </Top>
        </section>
      </main>
    </>
  );
}
