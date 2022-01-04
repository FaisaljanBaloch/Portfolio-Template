import { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import "./App.css";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesConfig from './config/particlesjs-config.json';
import { useTranslation } from "react-i18next";
import {
  AboutSection,
  ChangeLanguageButtons,
  ContactForm,
  ContactFormSubmitButton,
  ContactSection,
  CustomProgressBar,
  EnglishButton,
  Footer,
  FooterLastUpdated,
  FooterText,
  FrenchButton,
  GitHubLogo,
  HomeSection, 
  HomeText,
  LeftAboutSectionPart,
  LinkedinLogo,
  NameText,
  PlacesIWorkedContainer,
  PlacesIWorkedSection,
  Portfolio,
  Project,
  ProjectDescription,
  ProjectImage,
  Projects,
  ProjectsSection,
  ProjectTitle,
  ProjectVideo,
  RightAboutSectionPart,
  SectionText,
  SectionTitle,
  Socials,
  Skill,
  SkillName,
  SplittedAboutSection,
  ThisProjectText,
  WorkPlaceButton,
  WorkPlaceButtons,
  WorkPlaceHeader,
  WorkPlaceLogo,
  WorkPlaceTaskDescription
} from './style.js';
import Particles from 'react-tsparticles';

function App() {

  const yourName = 'Christopher Robidas';
  const yourEmail = 'christopher.robidas@outlook.com';

  const [activeWorkplace, setActiveWorkplace] = useState('genetec');

  const changeWorkplace = (workplace) => {
    setActiveWorkplace(workplace);
  };

  const componentRef = useRef();

  const getDimensions = () => ({
    width: componentRef.current.offsetWidth
  });

  const useContainerDimensions = componentRef => {
    const [dimensions, setDimensions] = useState({ width: 0 });
  
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (componentRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [componentRef]);
  
    return dimensions;
  };

  const { width } = useContainerDimensions(componentRef);
  const {t, i18n} = useTranslation('common');

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <Portfolio>
      <ChangeLanguageButtons>
        <FrenchButton active={i18n.language === 'fr'} onClick={() => i18n.changeLanguage('fr')}>
          FR
        </FrenchButton>
        <EnglishButton active={i18n.language === 'en'} onClick={() => i18n.changeLanguage('en')}>
          EN
        </EnglishButton>
      </ChangeLanguageButtons>
      <HomeSection>
        <Particles params={ParticlesConfig}/>
        <HomeText>
          {t('home.hello-world')}
          <br/>
          {t('home.im')} <NameText>{yourName}</NameText>,
          <br/>
          {t('home.developer')}
        </HomeText>
      </HomeSection>
      <AboutSection>
        <SplittedAboutSection data-aos="fade-up">
          <LeftAboutSectionPart>
            <SectionTitle>
              {t('about.whoami')}
            </SectionTitle>
            <SectionText>
              {t('about.my-name-is')} <b>{yourName}</b> {t('about.my-description')}
              <br />
              <br />
              {t('about.my-interests')}
            </SectionText>
          </LeftAboutSectionPart>
          <RightAboutSectionPart>
            <Skill>
              <SkillName>
                C#
              </SkillName>
              <CustomProgressBar now={90} label="90%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                .NET (4.7.2/4.8)
              </SkillName>
              <CustomProgressBar now={90} label="90%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                HTML/CSS
              </SkillName>
              <CustomProgressBar now={90} label="90%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                JavaScript
              </SkillName>
              <CustomProgressBar now={80} label="80%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                React
              </SkillName>
              <CustomProgressBar now={80} label="80%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                Unity
              </SkillName>
              <CustomProgressBar now={80} label="80%" variant="info"/>
            </Skill>
            <Skill>
              <SkillName>
                Unreal Engine
              </SkillName>
              <CustomProgressBar now={60} label="60%" variant="info"/>
            </Skill>
          </RightAboutSectionPart>
        </SplittedAboutSection>
      </AboutSection>
      <PlacesIWorkedSection>
        <SectionTitle data-aos="fade-up">
          {t('places-worked.places-ive-worked')}
        </SectionTitle>
        <PlacesIWorkedContainer data-aos="fade-up">
          <WorkPlaceButtons>
            <WorkPlaceButton active={activeWorkplace === 'genetec'} onClick={() => changeWorkplace('genetec')}>
              {t('places-worked.genetec.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'novom'} onClick={() => changeWorkplace('novom')}>
              {t('places-worked.novom.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'cvc'} onClick={() => changeWorkplace('cvc')}>
              {t('places-worked.cvc.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'nba'} onClick={() => changeWorkplace('nba')}>
              {t('places-worked.nba.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'corde'} onClick={() => changeWorkplace('corde')}>
              {t('places-worked.corde.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'challenger'} onClick={() => changeWorkplace('challenger')}>
              {t('places-worked.challenger.name')}
            </WorkPlaceButton>
          </WorkPlaceButtons>
          <WorkPlaceLogo src={activeWorkplace + "-logo.png"} alt="workplace logo"/>
          <WorkPlaceHeader>
            {t('places-worked.' + activeWorkplace + '.header')}
          </WorkPlaceHeader>
          <WorkPlaceTaskDescription>
            <ul>
              <li>
                {t('places-worked.' + activeWorkplace + '.task1')}
              </li>
              <li>
                {t('places-worked.' + activeWorkplace + '.task2')}
              </li>
              <li>
                {t('places-worked.' + activeWorkplace + '.task3')}
              </li>
            </ul>
          </WorkPlaceTaskDescription>
        </PlacesIWorkedContainer>
      </PlacesIWorkedSection>
      <ProjectsSection>
        <SectionTitle data-aos="fade-up">
          {t('projects.my-projects')}
        </SectionTitle>
        <Projects data-aos="fade-up">
          <Project>
            <ProjectTitle>
              Purrfect Escape
            </ProjectTitle>
            <ProjectDescription>
              {t('projects.purrfect-escape-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/Mt-ugo6KlJM" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectTitle>
              World of Rune Fantasy Online
            </ProjectTitle>
            <ProjectDescription>
              {t('projects.worfo-description')}
            </ProjectDescription>
            <ProjectVideo height={(width * 9) / 16} src="https://www.youtube.com/embed/OhAAXRkXCNk" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectTitle>
              Level Design: Chalet
            </ProjectTitle>
            <ProjectDescription>
              {t('projects.chalet-description')}
            </ProjectDescription>
            <ProjectVideo height={(width * 9) / 16} src="https://www.youtube.com/embed/71wmsMhOk_8" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectTitle>
              Centre d'Entraide La Boussole
            </ProjectTitle>
            <ProjectDescription>
              {t('projects.centre-description')}
              <br/>
              <a href="https://www.centrelaboussole.ca/">https://www.centrelaboussole.ca/</a>
            </ProjectDescription>
            <ProjectImage src="Centre_La_Boussole.png" alt="Centre la Boussole"/>
          </Project>
        </Projects>
        <ThisProjectText data-aos="fade-up">
          {t('projects.this-project')}
        </ThisProjectText>
      </ProjectsSection>
      <ContactSection>
        <ContactForm action={`mailto:${yourEmail}`} method="get" enctype="text/plain" data-aos="fade-up">
          <ContactFormSubmitButton type="submit">
            {t('contact.contact-me')}
          </ContactFormSubmitButton>
        </ContactForm>
      </ContactSection>
      <Footer>
        <Socials>
          <a href="https://www.linkedin.com/in/christopher-robidas-a661241a2/">
            <LinkedinLogo src="linkedin-logo.png" alt="Linkedin logo"/>
          </a>
          <a href="https://github.com/Master-YEET">
            <GitHubLogo src="github-logo.png" alt="GitHub logo"/>
          </a>
        </Socials>
        <FooterText>
          {yourName} <FooterLastUpdated>©2022</FooterLastUpdated>
        </FooterText>
      </Footer>
    </Portfolio>
  );
}

export default App;