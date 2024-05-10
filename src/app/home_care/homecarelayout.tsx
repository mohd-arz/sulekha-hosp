import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/sidebar";
import Header from "../Components/header";
import Homesidebar from "./homesidebar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

interface HomecareLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: HomecareLayoutProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Header />

      <Homesidebar />
      <div>{children}</div>

      <Sidebar />
      <Footer />
    </div>
  );
}
