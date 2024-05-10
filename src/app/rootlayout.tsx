import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer"; 
import Sidebar from "./Components/sidebar";
import Header from "./Components/header";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <div className={inter.className}>
      <Navbar />
    {/* <Header/> */}
      <div>{children}</div>
      <Sidebar />
      <Footer />
    </div>
  );
}