"use client";

import AboutMe from "./about/page";
import LandingPage from "./components/LandingPage";
import FaqSection from "./FAQs/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingPage/>
      <AboutMe/>
      <FaqSection/>
     
    </div>
  )
}
