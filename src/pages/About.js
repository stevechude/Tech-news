import React from "react";
import { Typography, CssBaseline, Container, Link } from "@mui/material";
import useStyles from "../components/styles";

const About = () => {
  const { classes } = useStyles();

  return (
    <>
      <CssBaseline />
      <Typography
        variant="h2"
        style={{ textAlign: "center", margin: "30px 0" }}
      >
        About Steve Chude
      </Typography>
      <Container className={classes.aboutContainer} maxWidth="md">
        <Typography style={{ fontSize: "20px", margin: "30px 0" }}>
          I am a proactive, smart, driven software engineer and leader with 3
          years of development experience. I have developed software solutions
          for business use cases from conceptualization to deployment. I am a
          proficient React.Js, Next.Js, NodeJs, JavaScript and TypeScript
          developer. Softwares i have built includes Health Tech solution,
          Crypto solution, logistics web app, etc. I have great communication
          skills, problem solving, decision making and am a team player.
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Projects
        </Typography>
        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>CRYPTOBASE WEBSITE:</span>
          <br /> A responsive crypto website fetched from coingecko’s api as
          third-party, built with react js and styled with tailwind css, with an
          addition of a firebase backend with full user authentications and
          route protections. Technologies Used - React js, tailwind CSS,
          Firebase, Coingecko API.
          <br /> <span style={{ fontWeight: "bold" }}>Link:</span>{" "}
          <Link href="https://cryptobase-website.netlify.app/">
            https://cryptobase-website.netlify.app/
          </Link>
        </Typography>

        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>
            BOTTLEKING WEBSITE (Test Design):
          </span>
          <br /> A responsive website design deployed for testing on netlify.
          Technologies Used - React js, CSS, Node js(backend){" "}
          <span style={{ fontWeight: "bold" }}>
            <br />
            Link:
          </span>{" "}
          <Link href="https://bottleking.netlify.app/">
            https://bottleking.netlify.app/
          </Link>
        </Typography>

        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>Dispatch Buddy:</span>
          <br /> A logistics app for a pharmaceutical company, where users can
          place an order for drugs and have it delivered at their desired
          locations. Riders can also register and get vetted to become a
          delivery agent. Technologies Used - React.js, MongoDB, CSS, NodeJS,
          JavaScript, Swagger.{" "}
          <span style={{ fontWeight: "bold" }}>
            <br />
            Link:
          </span>{" "}
          <Link href="https://dispatch-buddy.netlify.app/">
            https://dispatch-buddy.netlify.app/
          </Link>
        </Typography>

        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>GPT3-Website:</span>
          <br /> A single page website built from a figma design, it showcases
          my frontend skills, styling and design abilities. Deployed on netlify
          with the link below. Technologies Used - React.js, CSS, Javascript.
          <span style={{ fontWeight: "bold" }}>
            <br />
            Link:{" "}
          </span>
          <Link href="https://steve-webgpt3.netlify.app/">
            https://steve-webgpt3.netlify.app/
          </Link>
        </Typography>

        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>
            Machine Inventory App (Personal Project):
          </span>
          <br /> This is a personal project built with react and Material UI. It
          is called a Machine Inventory App, it is basically used to create and
          store heavy machinery with attributes of each eg: crane, bulldozer,
          chainsaw, etc for stock keeping and inventory. It has features like,
          editing the attributes/details of an already existing machine, auto
          searching through a long list of machines, and saving them onto the
          browser’s local storage API. Technologies Used - React.js, Material
          UI, Local storage as API.
          <span style={{ fontWeight: "bold" }}>
            <br />
            Link:
          </span>{" "}
          <Link href="https://machines-inventory.netlify.app/">
            https://machines-inventory.netlify.app/
          </Link>
        </Typography>

        <Typography style={{ fontSize: "18px", margin: "30px 0" }}>
          <span style={{ fontWeight: "bold" }}>Media Management API:</span>
          <br /> A REST Api built with NestJs framework and a MySQL database and
          Prisma ORM and Docker. It has a full authentication protocol with jwt
          with access granted to authorized user’s to create as many media
          portfolio’s image/music and save them to the db. Technologies Used -
          NestJs, MySQL, Prisma ORM, Docker.
          <span style={{ fontWeight: "bold" }}>GitHub Link -</span>{" "}
          <Link href="https://github.com/stevechude/manage-media-api">
            https://github.com/stevechude/manage-media-api
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default About;
