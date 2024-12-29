import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {ButtonContainer, HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
// import HeroImg from './public/IMG-20230701-WA0017.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
// import { ButtonContainer } from '../Navbar/NavbarStyledComponent';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ButtonContainer>
                        <ResumeButton href={Bio.sde} target='display'>Check Resume: SDE</ResumeButton>
                        <ResumeButton href={Bio.product} target='display'>Check Resume: Product</ResumeButton>
                        </ButtonContainer>
                       
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src="/IMG-20230701-WA0017.jpg" alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection