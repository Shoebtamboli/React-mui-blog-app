import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Appbar />
          <Header />

          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:id" element={<BlogDetail />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
