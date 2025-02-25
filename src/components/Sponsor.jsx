import React from "react";
import "../styles/sponsor.css";
import zohoLogo from "../assets/images/zoho-logo-512.png";
import nikeLogo from "../assets/images/nike.png";
import dark from "../assets/images/dark.png";
import cp from "../assets/images/cp.png";
import AmbalStore from "../assets/images/AmbalStore.png";
import sponsors from "../assets/images/sponsors.png";
import placeholder from "../assets/images/placeholder.jpg";



export default function Sponsor() {
  const logos = [
    // { src: zohoLogo, alt: "Zoho" },
    // { src: dark, alt: "Dark" },
    // { src: nikeLogo, alt: "Nike" },
    // { src: AmbalStore, alt: "AmbalStore" },
    { src: cp, alt: "CP" },
    { src: sponsors , alt: "sponsor logo place holder" },
    { src: placeholder , alt: "sponsor logo place holder" },
  ];

  return (

    <div className="sponsor-container">
    <h1 className="sponsor-heading">Our Sponsors</h1>
    <div className="marquee-container">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className={logo.src} />
        ))}
        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo.src} alt={logo.alt}  className={logo.src}/>
        ))}
                {logos.map((logo, index) => (
          <img key={`duplicate-${index}-2`} src={logo.src} alt={logo.alt}  className={logo.src}/>
        ))}
         {logos.map((logo, index) => (
          <img key={`duplicate-${index}-3`} src={logo.src} alt={logo.alt}  className={logo.src}/>
        ))}
                 {logos.map((logo, index) => (
          <img key={`duplicate-${index}-4`} src={logo.src} alt={logo.alt}  className={logo.src}/>
        ))}
      </div>
    </div>
    {/* <h2 className="sponsor-ending">Collaborate with brands and agencies to create impactful results</h2> */}
  </div>
   
  );
}
