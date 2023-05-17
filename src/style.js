import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const AboutSection = styled.section`
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    padding: 50px 0px;
`;

export const ChangeLanguageButtons = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 5px #000000;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1;
`;

export const ContactButton = styled.button`
    background: transparent;
    border: 2px solid #91FE3C;
    color: #91FE3C;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    padding: 10px 20px;
    transition: all 0.5s linear;
    width: 200px;

    &:hover {
        background: #91FE3C;
        color: #0D0D0D;
        cursor: pointer;
    }
`;

export const ContactSection = styled.section`
    align-items: center;
    background-color: #1D1D1D;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0px;
`;

export const CustomProgressBar = styled(ProgressBar)`
    border-radius: 0px;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    width: 400px;

    @media (max-width: 670px) {
        width: 100%;
    }
`;

export const EnglishButton = styled.button`
    background-color: #E31B6D;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 15px;

    ${({ active }) => active && `
        background: #720D37;
    `}
`;

export const Footer = styled.footer`
    align-items: center;
    background-color: #0D0D0D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;
`;

export const FooterLastUpdated = styled.div`
    color: #91FE3C;
    display: inline;
`;

export const FooterText = styled.div`
    color: #999999;
    flex: 0 0 auto;
`;

export const FrenchButton = styled.button`
    background-color: #E31B6D;
    border: none;
    border-radius: 10px 0px 0px 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 15px;

    ${({ active }) => active && `
        background: #720D37;
    `}
`;

export const GitHubLogo = styled.img`
    background-color: #FFFFFF;
    height: 50px;
    padding: 5px;
    transition: all 0.5s linear;
    width: 50px;

    &:hover {
        background: #91FE3C;
        cursor: pointer;
    }
`;

export const HomeSection = styled.section`
    align-items: center;
    background-color: #1D1D1D;
    display: flex;
    height: 100vh;
    justify-content: center;
`;

export const HomeText = styled.div`
    background-color: #00000060;
    border-radius: 50px;
    color: #FFFFFF;
    flex: 0 0 auto;
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
    padding: 5px;
    width: 1000px;
    z-index: 1;

    @media (max-width: 1000px) {
        font-size: 6.7vw;
        width: 95%;
    }
`;

export const LeftAboutSectionPart = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
`;

export const LinkedinLogo = styled.img`
    background-color: #FFFFFF;
    height: 50px;
    margin-right: 10px;
    padding: 5px;
    transition: all 0.5s linear;
    width: 50px;

    &:hover {
        background: #91FE3C;
        cursor: pointer;
    }
`;

export const NameText = styled.div`
    color: #91FE3C;
    display: inline;
`;

export const PlacesIWorkedContainer = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    max-width: 1200px;
`;

export const PlacesIWorkedSection = styled.section`
    align-items: center;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;
`;

export const Portfolio = styled.div`
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 200px;
`;

export const ProfilePictureContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Project = styled.div`
    background-color: #FFFFFF;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    width: 100%;
    max-width: 625px;
`;

export const ProjectDescription = styled.p`
    color: #626262;
    font-size: 20px;
`;

export const ProjectDownloadButton = styled.button`
    background-color: #E31B6D;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 15px;

    &:hover {
        background: #720D37;
    }
`;

export const ProjectHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Projects = styled.div`
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjectsSection = styled.section`
    align-items: center;
    background-color: #E6E6E6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;
`;

export const ProjectTitle = styled.h2`
    color: #626262;
`;

export const ProjectVideo = styled.iframe`
    align-self: flex-end;
    width: 100%;
`;

export const ResumeButton = styled.button`
    background: transparent;
    border: 2px solid #91FE3C;
    color: #91FE3C;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    padding: 10px 20px;
    transition: all 0.5s linear;
    width: 200px;

    &:hover {
        background: #91FE3C;
        color: #0D0D0D;
        cursor: pointer;
    }
`;

export const RightAboutSectionPart = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 600px;
`;

export const SectionText = styled.p`
    color: #626262;
    font-size: 20px;
    padding: 0px 30px;
`;

export const SectionTitle = styled.h1`
    color: #E31B6D;
    font-size: 50px;
    font-weight: bold;
    margin: 20px;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0px;
`;

export const SkillName = styled.div`
    align-items: center;
    background-color: #01A1A7;
    color: white;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    min-width: 180px;
`;

export const Socials = styled.div`
    margin-bottom: 30px;
`;

export const SplittedAbout = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const ThisProjectText = styled.p`
    color: #626262;
    font-size: 20px;
    font-weight: bold;
    margin 20px;
`;

export const WorkPlaceButton = styled.button`
    background: #1D1D1D;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    height: 110px;
    padding: 10px 20px;
    transition: all 0.5s linear;
    min-width: 200px;

    &:hover {
        background: #0D0D0D;
        cursor: pointer;
    }

    ${({ active }) => active && `
        background: #0D0D0D;
    `}
`;

export const WorkPlaceButtons = styled.div`
    align-items: center;
    background: #1D1D1D;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 670px) {
        justify-content: left;
    }
`;

export const WorkPlaceHeader = styled.div`
    color: #626262;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    width: 100%;
`;

export const WorkPlaceLogo = styled.img`
    max-height: 120px;
    padding: 20px 10px;
    max-width: 100%;
`;

export const WorkPlaceTaskDescription = styled.div`
    color: #626262;
    font-size: 20px;
    padding: 10px 30px;
    width: 100%;
`;
