import React from "react";
import NextHead from "next/head";

import Nav from "../components/nav";
import Head from "../components/head";

const Fonts: React.FC = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,700italic|Merriweather:300,300italic,700,700italic&display=swap"
    rel="stylesheet"
    type="text/css"
  />
);

const GoogleAnalyticsScript: React.FC = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-44964499-2', 'auto');
        ga('send', 'pageview');
      `
    }}
  />
);

const textColor = {
  light: "#444",
  dark: "#CCC"
};
const headingColor = {
  light: "#333",
  dark: "#DDD"
};
const linkColor = {
  light: "#3a7bb3",
  dark: "#479ce5"
};

interface Props {
  title: string;
}
const MainLayout: React.FC<Props> = props => (
  <>
    <NextHead>
      <Fonts />
      <GoogleAnalyticsScript />
    </NextHead>
    <Head title={props.title} />

    <Nav />
    {props.children}
    <style jsx global>
      {`
        body {
          color: ${textColor.light};
          font-family: "Merriweather", serif;
          font-weight: 300;
          font-size: 16px;
          letter-spacing: 0.02em;
          line-height: 1.618em;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Source Sans Pro", sans-serif;
          color: ${headingColor.light};
          margin-bottom: 0.25em;
        }

        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 1.625em;
        }

        h3 {
          font-size: 1.375em;
        }

        h4 {
          font-size: 1.125em;
        }

        blockquote {
          margin-left: 0em;
          border-left: 0.25em solid;
          padding-left: 2em;
          font-style: italic;
          font-size: 1em;
        }

        a {
          font-weight: bold;
          text-decoration: none;
          color: ${linkColor.light};
        }

        a:visited {
          color: ${linkColor.light};
        }

        a:hover {
          color: ${linkColor.light};
        }

        img {
          max-width: 100% !important;
          height: auto;
          display: block;
        }

        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.25);
        }

        section {
          max-width: 700px;
          margin: 0 auto;
        }

        .title {
          font-size: 2.5em;
        }

        .post {
          margin: 0 auto;
          padding: 10px;
        }

        .post p {
          margin-top: 0;
          margin-bottom: 2em;
        }

        .post p:last-of-type {
          margin-bottom: 0.5em;
        }

        .post img {
          margin: 0 auto;
        }

        #title {
          text-align: center;
          text-transform: uppercase;
        }

        #title h1 {
          margin-bottom: 0;
          font-size: 6em;
          line-height: 1em;
        }

        #title h2 {
          margin-top: -0.5em;
          font-size: 1.8em;
          line-height: 1.25em;
        }

        #introduction {
          text-align: center;
          font-weight: light;
          max-width: 600px;
          margin: 2em auto;
        }

        #posts ul {
          list-style-type: none;
          padding: 0;
        }

        /* Large breakpoint - Desktop */
        @media only screen and (min-width: 769px) {
          .title {
            line-height: 1.05em;
          }
          h1 {
            line-height: 1.05em;
          }
          h2 {
            line-height: 1.25em;
          }
          h3 {
            line-height: 1.25em;
          }
          h4 {
            line-height: 1.22em;
          }
          blockquote {
            line-height: 1.4em;
          }
        }

        /* Medium breakpoint - Tablet */
        @media only screen and (min-width: 481px) and (max-width: 768px) {
          .title {
            line-height: 1.125em;
          }
          h1 {
            line-height: 1.125em;
          }
          h2 {
            line-height: 1.25em;
          }
          h3 {
            line-height: 1.25em;
          }
          h4 {
            line-height: 1.2222em;
          }
          blockquote {
            line-height: 1.4em;
          }
        }

        /* Small breakpoint - Phone */
        @media only screen and (max-width: 480px) {
          .title {
            line-height: 1.25em;
          }
          h1 {
            line-height: 1.25em;
          }
          h2 {
            line-height: 1.1538em;
          }
          h3 {
            line-height: 1.1363em;
          }
          h4 {
            line-height: 1.1111em;
          }
          blockquote {
            line-height: 1.4em;
          }
        }

        /* Dark theme */
        @media (prefers-color-scheme: dark) {
          body {
            color: ${textColor.dark};
            background-color: #292929;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${headingColor.dark};
          }

          a,
          a:visited,
          a:hover {
            color: ${linkColor.dark};
          }
        }
      `}
    </style>
  </>
);

export default MainLayout;
