import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import About from "./about/AboutMe";
import Education from "./Education_info/Education";
import Greeting from "./landing_page/landing";
import { useLocalStorage } from "./local/useLocalStorage";
import "./Main.scss";
import StartupProject from "./My_Project/Project";
import ScrollToTopButton from "./Quick_Top/Quick";
import Skills from "./skills/Skills";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);


  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <>
            <Header />
            <Greeting />
            <div className="Education">
            <Skills />
            </div>
            <Education />
            <StartupProject />
            <About />
            <Footer />
            <ScrollToTopButton />
          </>
      </StyleProvider>
    </div>
  );
};

export default Main;