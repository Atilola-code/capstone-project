import {  Playfair_Display, Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "./components/NavBar";
import { SidebarProviders } from "./providers";
import LandingPage from "./components/LandingPage";
import FaqSection from "./FAQs/page";
import About from "./about/page";
import MainNav from "./components/MainNav";


const pop = Poppins({
  weight: ["500"],
  subsets: ["latin"],
})
const play= Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
  
})
// export const metadata = {
//   title: "capstone-project",
//   description: "Beauty ecommerce website",
//   keyword: "tailwindcss, html, javascript, univelcity"
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pop.className} ${play.className} min-h-screen`}>
          <SidebarProviders>
        <MainNav />
        {/* <LandingPage/> */}
        {/* <About/> */}
        {/* <FaqSection/> */}
        {children}
          </SidebarProviders>
      </body>
    </html>
  )
}
