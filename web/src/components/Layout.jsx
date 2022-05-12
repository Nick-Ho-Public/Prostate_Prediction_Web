import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";

export default function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
