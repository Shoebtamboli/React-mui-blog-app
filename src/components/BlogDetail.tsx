import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { blogData } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Blogs() {
  const { id } = useParams();

  const post = blogData.filter((blog) => blog.id.toString() === id)[0];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
        <Grid>
          <Typography component="h2" variant="h3" gutterBottom>
            {post?.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {post?.date}
          </Typography>
          <Typography variant="h6" paragraph>
            {post?.description}
          </Typography>
        </Grid>
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
      <Container component="main" sx={{ mt: 6, mb: 2 }} maxWidth="md">
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
        <Divider />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
          sx={{ mt: 4, mb: 4 }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Latest Blogs
          </Typography>
          {blogData.map((post, index) => (
            <Link
              key={index}
              to={`/${post.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
            </Link>
          ))}
        </Stack>
        <Divider />
      </Container>
    </Box>
  );
}
