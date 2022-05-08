import React from "react";

import Head from "../Components/tools/Head";
import style from "../styles/Nav.module.css";
import MainNav from "../Components/Menu/MainNav";
import Top from "../Components/Menu/Top";
import { Typography } from "@mui/material";

export default function sale() {
  return (
    <>
      <Head title='Página 3' />
      <main className={style.displayFlex}>
        <section className={style.displayFlex}>
          <MainNav page='menuThree' />
        </section>
        <section className={style.displayFlexColumn}>
          <Top>
            <Typography variant='h3' component='div' gutterBottom>
              Página Três
            </Typography>
          </Top>
        </section>
      </main>
    </>
  );
}
