import styled from 'styled-components';

export const AboutSection = styled.section`
    background-color: #FFFFFF;
    height: 100vh;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const ContactFormInput = styled.input`
    border: none;
    font-size: 20px;
    margin: 20px;
    padding: 20px;

    &:focus {
        outline: none;
    }
`;

export const ContactFormSubmitButton = styled.button`
    background: transparent;
    border: 2px solid #91FE3C;
    color: #91FE3C;
    font-size: 20px;
    margin: 20px 20px 20px auto;
    padding: 10px 20px;
    transition: all 0.5s linear;
    width: 200px;

    &:hover {
        background: #91FE3C;
        color: #0D0D0D;
        cursor: pointer;
    }
`;

export const ContactFormTextArea = styled.textarea`
    border: none;
    font-size: 20px;
    height: 200px;
    margin: 20px;
    padding: 20px;

    &:focus {
        outline: none;
    }
`;

export const ContactSection = styled.section`
    background-color: #1D1D1D;
    height: 100vh;
`;

export const Footer = styled.footer`
    align-items: center;
    background-color: #0D0D0D;
    display: flex;
    justify-content: center;
    padding: 50px 0px;
`;

export const FooterLastUpdated = styled.p`
    color: #91FE3C;
    display: inline;
`;

export const FooterText = styled.p`
    color: #999999;
    flex: 0 0 auto;
`;

export const HomeSection = styled.section`
    align-items: center;
    background-color: #1D1D1D;
    display: flex;
    height: 100vh;
    justify-content: center;
`;

export const HomeText = styled.p`
    color: #FFFFFF;
    flex: 0 0 auto;
    font-size: 60px;
    font-weight: bold;
`;

export const NameText = styled.p`
    color: #91FE3C;
    display: inline;
`;

export const Portfolio = styled.div`
`;

export const ProjectsSection = styled.section`
    background-color: #AAAAAA;
    height: 100vh;
`;

export const SectionTitle = styled.h1`
    color: #E31B6D;
    font-size: 50px;
    font-weight: bold;
    margin: 0px;
    padding: 20px;
`;
