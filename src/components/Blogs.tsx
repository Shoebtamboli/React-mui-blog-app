import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { blogData } from "../data";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="md">
        <Grid container spacing={4}>
          {blogData.map((post, index) => (
            <Grid item xs={12} key={index}>
              <Link to={`/${post.id}`} style={{ textDecoration: "none" }}>
                <CardActionArea>
                  <Card sx={{ display: "flex", height: "50%" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 260, display: { xs: "none", sm: "block" } }}
                      image={post.imageUrl}
                      alt="image text"
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
