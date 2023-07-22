import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="sm">
        <Typography align="center" variant="h6">
          Hi, I’m Shoeb. Welcome to my safe place where I write about everything
          I find inspiring and you might find too.
        </Typography>
      </Container>
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar
            src={"https://i.pravatar.cc/300"}
            sx={{
              height: "80%",
              width: "80%"
            }}
            variant="rounded"
          />
        </Stack>
      </Container>
      <Container component="main" sx={{ mt: 6, mb: 2 }} maxWidth="sm">
        <Typography
          sx={{ fontStyle: "italic", mb: 6 }}
          variant="h4"
          color="text.secondary"
          gutterBottom
        >
          "DREAMS DON'T WORK UNLESS YOU DO!" -- Anonymous
        </Typography>

        <Typography variant="h6" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
          eu tincidunt porta condimentum mauris interdum facilisis. Maecenas
          augue netus faucibus lorem. Nulla sed non, elementum mi netus libero.
          Tempor quam sed nunc fames bibendum id facilisis ipsum commodo. Neque,
          augue feugiat eu condimentum ut lorem. Faucibus mi tellus, iaculis
          facilisis sagittis. Viverra hendrerit magna pellentesque at convallis
          purus amet, pellentesque et. Potenti tempor volutpat massa tortor
          mauris tincidunt tellus diam pharetra. Viverra praesent lacinia dictum
          tortor erat risus nulla gravida sed. Platea varius venenatis habitasse
          est maecenas sapien eu, volutpat. Cursus diam auctor neque ut. Tempor,
          in tortor odio in mollis sollicitudin.
        </Typography>
        <Typography variant="h6" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
          eu tincidunt porta condimentum mauris interdum facilisis. Maecenas
          augue netus faucibus lorem. Nulla sed non, elementum mi netus libero.
          Tempor quam sed nunc fames bibendum id facilisis ipsum commodo. Neque,
          augue feugiat eu condimentum ut lorem. Faucibus mi tellus, iaculis
          facilisis sagittis. Viverra hendrerit magna pellentesque at convallis
          purus amet, pellentesque et. Potenti tempor volutpat massa tortor
          mauris tincidunt tellus diam pharetra. Viverra praesent lacinia dictum
          tortor erat risus nulla gravida sed. Platea varius venenatis habitasse
          est maecenas sapien eu, volutpat. Cursus diam auctor neque ut. Tempor,
          in tortor odio in mollis sollicitudin.
        </Typography>
      </Container>
    </Box>
  );
}
