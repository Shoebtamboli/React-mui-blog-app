import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Avatar
            src={"https://i.pravatar.cc/300"}
            sx={{
              height: "40%",
              width: "40%"
            }}
          />
          <Typography sx={{ fontWeight: "bold" }} variant="h4" align="center">
            SHOEB TAMBOLI
          </Typography>
          <Typography
            sx={{ fontStyle: "italic" }}
            variant="h6"
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Writer at The Daily Times spending all of my free time writing
            stories
          </Typography>
        </Stack>
        <Divider />
      </Container>
    </Box>
  );
}
