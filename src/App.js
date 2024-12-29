import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import styled, { ThemeProvider } from 'styled-components';
import Projects from "./components/Projects";
import { darkTheme} from './utils/Themes.js'
import Contact from './components/Contact';

const Body = styled.div`
  background-color: ${({ theme }) => theme?.bg || '#000000'};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <Navbar />
        <Hero />
        <Wrapper>
          <Skills />
          <Experience/>
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
            {/* <Education /> */}
            <Contact />
          </Wrapper>
      </Body>
    </ThemeProvider>
  );
}

export default App;
