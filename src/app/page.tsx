'use client'
import './globals.css';
import Navbar from "./navbar/page";
import Wall from "./community/page";
import Footer from "./footer/page";


import { useState } from 'react';
import LoadingScreen from './loading/page';

export default function Home() {
  const [loading, setLoading] = useState(true);



  return (
  <>

  {loading && <LoadingScreen onComplete={()=>setLoading(false)} />}
  {!loading && (
    <><Navbar /><main>
          <Wall />
          <Footer />
        </main></>
  )}
  
  </>
  );
}
