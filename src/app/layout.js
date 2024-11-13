import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import {Roboto, Mea_Culpa} from 'next/font/google'
import Footer from "@/components/Footer";

  
const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],    
  display: 'swap',        
});

const meaCulpa = Mea_Culpa({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-heroimage`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
