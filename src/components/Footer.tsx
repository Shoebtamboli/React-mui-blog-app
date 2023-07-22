import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/">
        STAMBOLI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Follow my journey
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Get notified about updates and be the first to get early access to the
          new, safer, and smarter way to archive your files.
        </Typography>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            placeholder="test@test.com"
            fullWidth
            id="outlined-start-adornment"
            type="text"
            sx={{ m: 4, width: "50ch" }}
            variant="standard"
            helperText="By subscribing to our newsletter you accept to receive recurring emails about our product and company"
          />

          <Button type="submit" variant="contained">
            Subscribe
          </Button>
        </Stack>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          display: "flex",
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
