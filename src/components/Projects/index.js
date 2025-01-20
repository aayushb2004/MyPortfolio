import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import ProjectDetails from '../ProjectDetails/index'; // Ensure this is imported
import { projects } from '../../data/constants';

const Projects = () => {
    const [toggle, setToggle] = useState('all');
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to Product Management. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    {['all', 'product management', 'machine learning'].map((category) => (
                        <React.Fragment key={category}>
                            <ToggleButton 
                                active={toggle === category}
                                onClick={() => setToggle(category)}
                            >
                                {category.toUpperCase()}
                            </ToggleButton>
                            <Divider />
                        </React.Fragment>
                    ))}
                </ToggleButtonGroup>

                {/* Render Projects */}
                <CardContainer>
                    {projects
                        .filter((item) => toggle === 'all' || item.category === toggle)
                        .map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                setOpenModal={setOpenModal} 
                            />
                        ))}
                </CardContainer>

                {/* Render Modal Conditionally */}
                {openModal.state && (
                    <ProjectDetails 
                        openModal={openModal} 
                        setOpenModal={setOpenModal} 
                    />
                )}
            </Wrapper>
        </Container>
    );
};

export default Projects;
