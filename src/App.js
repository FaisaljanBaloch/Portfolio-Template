import { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";
import {
  AboutSection,
  ChangeLanguageButtons,
  ContactButton,
  EnglishButton,
  Footer,
  FooterLastUpdated,
  FooterText,
  FrenchButton,
  GitHubLogo,
  Header,
  HomeSection, 
  HomeText,
  LeftAboutSectionPart,
  LinkedinLogo,
  NameText,
  PlacesIWorkedContainer,
  PlacesIWorkedSection,
  Portfolio,
  ProfilePicture,
  ProfilePictureContainer,
  Project,
  ProjectDescription,
  ProjectDownloadButton,
  ProjectHeader,
  Projects,
  ProjectsSection,
  ProjectTitle,
  ProjectVideo,
  ResumeButton,
  RightAboutSectionPart,
  SectionText,
  SectionTitle,
  Socials,
  SplittedAbout,
  WorkPlaceButton,
  WorkPlaceButtons,
  WorkPlaceHeader,
  WorkPlaceLogo,
  WorkPlaceTaskDescription
} from './style.js';

function App() {

  const yourName = 'Christopher Robidas';
  const yourEmail = 'christopher.robidas@outlook.com';

  const [activeWorkplace, setActiveWorkplace] = useState('gameloft');

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

  const getWorkplaceTaskDescriptions = () => {
    let taskDescriptions = [];
    let i = 1;
    let translation = 'places-worked.' + activeWorkplace + '.task' + i;

    while(t(translation) !== translation) {
      taskDescriptions.push(<li key={'taskDescription' + i}>{t(translation)}</li>)
      i++;
      translation = 'places-worked.' + activeWorkplace + '.task' + i;
    }

    return taskDescriptions;
  };

  const { width } = useContainerDimensions(componentRef);
  const {t, i18n} = useTranslation('common');

  useEffect(() => {
    Aos.init({ duration: 2000 });
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <Portfolio>
      <Header>
        <ContactButton onClick={() => window.location = "mailto:" + yourEmail}>
            {t('contact.contact-me')}
        </ContactButton>
        <ResumeButton type="submit" onClick={() => window.open(i18n.language === 'fr' ? 'Christopher_Robidas_CV_2023.pdf' : 'Christopher_Robidas_Resume_2023.pdf')}>
            {t('contact.see-resume')}
        </ResumeButton>
        <ChangeLanguageButtons>
          <FrenchButton active={i18n.language === 'fr'} onClick={() => i18n.changeLanguage('fr')}>
            FR
          </FrenchButton>
          <EnglishButton active={i18n.language === 'en'} onClick={() => i18n.changeLanguage('en')}>
            EN
          </EnglishButton>
        </ChangeLanguageButtons>
      </Header>
      <HomeSection>
        <HomeText>
          {t('home.hello-world')}
          <br/>
          {t('home.im')} <NameText>{yourName}</NameText>,
          <br/>
          {t('home.developer')}
        </HomeText>
      </HomeSection>
      <AboutSection>
        <ProfilePictureContainer>
          <ProfilePicture src='profile_square.png' alt='profile picture'/>
        </ProfilePictureContainer>
        <SplittedAbout data-aos="fade-up">
          <LeftAboutSectionPart>
            <SectionTitle>
              {t('about.whoami')}
            </SectionTitle>
            <SectionText>
              {t('about.my-name-is')} <b>{yourName}</b>{t('about.my-description')}
            </SectionText>
          </LeftAboutSectionPart>
          <RightAboutSectionPart>
            <SectionTitle>
              {t('about.skills')}
            </SectionTitle>
            <SectionText>
              <b>{t('about.languages')}</b> C#, C++, Python, SQL, Bash
              <br/>
              <b>{t('about.technologies')}</b> .NET, AWS, Docker, Kubernetes, Git, GitLab CI/CD
              <br/>
              <b>{t('about.softwares')}</b> Unity, Unreal Engine, MySQL, Couchbase, Jira, Confluence, Wwise, Blender
            </SectionText>
          </RightAboutSectionPart>
        </SplittedAbout>
      </AboutSection>
      <PlacesIWorkedSection>
        <SectionTitle data-aos="fade-up">
          {t('places-worked.places-ive-worked')}
        </SectionTitle>
        <PlacesIWorkedContainer data-aos="fade-up">
          <WorkPlaceButtons>
            <WorkPlaceButton active={activeWorkplace === 'gameloft'} onClick={() => changeWorkplace('gameloft')}>
              {t('places-worked.gameloft.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'genetec'} onClick={() => changeWorkplace('genetec')}>
              {t('places-worked.genetec.name')}
            </WorkPlaceButton>
            <WorkPlaceButton active={activeWorkplace === 'nba'} onClick={() => changeWorkplace('nba')}>
              {t('places-worked.nba.name')}
            </WorkPlaceButton>
          </WorkPlaceButtons>
          <WorkPlaceLogo src={activeWorkplace + "-logo.png"} alt="workplace logo"/>
          <WorkPlaceHeader>
            {t('places-worked.' + activeWorkplace + '.header')}
          </WorkPlaceHeader>
          <WorkPlaceTaskDescription>
            <ul>
              {getWorkplaceTaskDescriptions()}
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
            <ProjectHeader>
              <ProjectTitle id="stepping-stones">
                Stepping Stones
              </ProjectTitle>
              <ProjectDownloadButton type="submit" onClick={() => window.location.href='https://www.dropbox.com/s/qlxhgx4sy02451t/Stepping_Stones.zip?dl=1'}>
                {t('projects.download')}
              </ProjectDownloadButton>
            </ProjectHeader>
            <ProjectDescription>
              {t('projects.stepping-stones-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/V6GiGXZBk74" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectHeader>
              <ProjectTitle id="sauve-chouris">
                Sauve-Chouris
              </ProjectTitle>
              <ProjectDownloadButton type="submit" onClick={() => window.location.href='https://www.dropbox.com/s/fdym94xuhral5ss/Sauve-Chouris.zip?dl=1'}>
                {t('projects.download')}
              </ProjectDownloadButton>
            </ProjectHeader>
            <ProjectDescription>
              {t('projects.sauve-chouris-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/UGlAQYLwofU" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectHeader>
              <ProjectTitle id="elemensions">
                Elemensions
              </ProjectTitle>
              <ProjectDownloadButton type="submit" onClick={() => window.location.href='https://www.dropbox.com/s/gkzuxq7k7l6dmsf/ElemEnsions.zip?dl=1'}>
                {t('projects.download')}
              </ProjectDownloadButton>
            </ProjectHeader>
            <ProjectDescription>
              {t('projects.elemensions-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/Ay9BNReulN8" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectHeader>
              <ProjectTitle id="back-to-the-party">
                Back to the Party
              </ProjectTitle>
              <ProjectDownloadButton type="submit" onClick={() => window.location.href='https://www.dropbox.com/s/tx317otov46lz7y/BackToTheParty.zip?dl=1'}>
                {t('projects.download')}
              </ProjectDownloadButton>
            </ProjectHeader>
            <ProjectDescription>
              {t('projects.back-to-the-party-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/ZI-1IKNtqzc" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectHeader>
              <ProjectTitle id="purrfect-escape">
                Purrfect Escape
              </ProjectTitle>
              <ProjectDownloadButton type="submit" onClick={() => window.location.href='https://www.dropbox.com/s/f3b8uvh5tu665v5/PurrfectEscape.zip?dl=1'}>
                {t('projects.download')}
              </ProjectDownloadButton>
            </ProjectHeader>
            <ProjectDescription>
              {t('projects.purrfect-escape-description')}
            </ProjectDescription>
            <ProjectVideo ref={componentRef} height={(width * 9) / 16} src="https://www.youtube.com/embed/Mt-ugo6KlJM" allow="fullscreen;"/>
          </Project>
          <Project>
            <ProjectTitle id="worfo">
              World of Rune Fantasy Online
            </ProjectTitle>
            <ProjectDescription>
              {t('projects.worfo-description')}
            </ProjectDescription>
            <ProjectVideo height={(width * 9) / 16} src="https://www.youtube.com/embed/OhAAXRkXCNk" allow="fullscreen;"/>
          </Project>
        </Projects>
      </ProjectsSection>
      <Footer>
        <Socials>
          <a href="https://www.linkedin.com/in/christopher-robidas-a661241a2/">
            <LinkedinLogo src="linkedin-logo.png" alt="Linkedin logo"/>
          </a>
          <a href="https://github.com/chrisrobidas">
            <GitHubLogo src="github-logo.png" alt="GitHub logo"/>
          </a>
        </Socials>
        <FooterText>
          {yourName} <FooterLastUpdated>©2023</FooterLastUpdated>
        </FooterText>
      </Footer>
    </Portfolio>
  );
}

export default App;
