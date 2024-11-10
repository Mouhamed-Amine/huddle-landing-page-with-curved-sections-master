'use client'
import './globals.css';
import Navbar from "./navbar/page";
import Wall from "./community/page";
import Footer from "./footer/page";

export default function Home() {
  return (
  <>
   <Navbar/>;
   <main>
   <Wall />
   <Footer />
   </main>
  </>
  );
}
