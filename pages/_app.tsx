import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import "@fontsource/karla/200.css";
import "@fontsource/karla/300.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/800.css";

import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { useStore } from "stores";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { primaryColor } = useStore();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Global
        styles={{
          body: {
            color: "#213547",
          },
        }}
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
            fontFamily: "Karla",
            headings: {
              fontFamily: "Karla",
            },
            primaryColor,
            primaryShade: 5,
            colors: {
              slate: [
                "#e8f3ff",
                "#d0d8e4",
                "#b3bdcd",
                "#96a3b5",
                "#7a899f",
                "#606f85",
                "#4a5769",
                "#333e4c",
                "#1d2530",
                "#070c18",
              ],
            },
            other: {
              fontPoppins: "Poppins, sans",
              white: "#fff",
              black: "#000",
            },
          }}
          styles={{
            Title: (theme) => ({
              root: {
                letterSpacing: "-0.04em",
                color: theme.colorScheme === "dark" ? "#fff" : "#333",
              },
            }),

            Button: {
              root: {
                fontWeight: 500,
                fontSize: 15,
              },
            },
          }}
          defaultProps={{
            Button: {
              size: "md",
              radius: "xl",
            },
            Container: {
              size: "xl",
            },
          }}
        >
          <NextNProgress />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
