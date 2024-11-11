import Image from "next/image";
import logo from "@/app/pics/pic.jpeg";
import React from "react";
import image from "@/app/pics/image.png";
import resume from "@/app/pics/resume.png";
import website from "@/app/pics/website.png";
import custom from "@/app/pics/custom.png";
import server from "@/app/pics/server.png";
import weather from "@/app/pics/w.png";
import html from "@/app/pics/html.png";
import css from "@/app/pics/pngwing.com (2).png";
import js from "@/app/pics/js.png";
import next from "@/app/pics/next.png";
import react from "@/app/pics/react.png";
import serverss from "@/app/pics/server.png";


// import TypingEffect from "react-typing-effect";
export default function Home() {
  return (
    <div>
      <main id="main">
        <div id="h1">
          <h1>
            Hello, this is <span>sheheryar khan</span>
          </h1>
          <h2>a Full Stack Dev</h2>
          <h2>Mern Stack dev</h2>
          <h2>FrontEnd Dev</h2>
          <h2>Backend Dev</h2>
          <h2>UI/UX designer</h2>
        </div>
        <div>
          <Image
            id="pic"
            src={logo}
            alt="logo"
            width={300}
            height={300}
          ></Image>
        </div>
      </main>
      <hr />
      <section id="about">
        <div>
          <h1>About Me</h1>
          <p id="abt">
            i am a Full Stack Developer with a passion for creating an innovatie
            and user-frindly web apps.i have been enrolled in syalani welfare
            trust pragram named <strong> "SMIT"</strong> for at last 6 months
            now and am also enrolled ithe Governer sindh's IT initiative program
            too.
          </p>
          <a
            href="mailto:your.email@example.com?subject=Hire%20Me%20Inquiry&body=Hello%20Sheheryar%20khan,%0A%0AI%20would%20like%20to%20hire%20you%20for%20a%20project."
            className="hire-me-button"
          >
            Hire Me
          </a>
          <a className="resume" href="https://resume-blond-eta.vercel.app/">
            My resume
          </a>
        </div>
        <hr />
      </section>
      <h2 id="h2">Check out my projects</h2>
      <section id="projects">
      
        <div className="images">
          <Image width={250} src={image} alt="image"></Image>
          <a href="https://resume-builder-eta-six.vercel.app/">
            Resume builder
          </a>
        </div>
        <hr />
        <div className="images">
          <Image width={250} src={resume} alt="image"></Image>
          <a href="https://resume-blond-eta.vercel.app/">My resume</a>
        </div>
        <hr />
        <div className="images">
          <Image width={250} src={website} alt="image"></Image>
          <a href="https://webtailwind-ruddy.vercel.app/">Next App</a>
        </div>
        <hr />
        <div className="images">
          <Image width={250} src={custom} alt="image"></Image>
          <a href="https://website-pi-sandy.vercel.app/">Next custom</a>
        </div>
        {/* <hr /> */}
        <div className="images">
          <Image width={250} src={server} alt="image"></Image>
          <a href="https://github.com/sheheryarkh/mongoose">Crud on express</a>
        </div>
        <hr />
        <div className="images">
          <Image width={250} src={weather} alt="image"></Image>
          <a href="https://weather-app-topaz-nu-86.vercel.app/">Weather App</a>
        </div>
        {/* <hr /> */}
      </section>
   <section id="skills">
    <h2>My skills are in</h2>
    <div className="skills">
    <Image width={145} src={html} alt=""></Image>
    <Image width={110} src={css} alt=""></Image>
    <Image width={110} src={js} alt=""></Image>
    <Image width={110} src={react} alt=""></Image>
    <Image width={110} src={serverss} alt=""></Image>
    <Image width={110} src={next} alt=""></Image>
    </div>
   </section>
   <section id="edu">
   <h2>Education</h2>
   <h3><li>Hsc</li></h3>
   <h3><li>Fsc</li></h3>
   <h3><li>graduate</li></h3>
   <h3><li>M.A English</li></h3>
   </section>
   
 
   
    </div>
  );
}
