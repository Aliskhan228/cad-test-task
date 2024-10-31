import styled from "styled-components";
import Container from "../components/Container";
import CardsList from "../components/CardsList";
import { cards } from "../data/cardsData";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomeWrapper = styled.section`
  width: 100%;
`;

const Main = styled.main`
  background-color: aliceblue;
  padding: 30px 0 100px;
`;

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1440px) {
    gap: 30px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  width: 50%;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    text-align: center;
    width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 16 / 9;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 75%;
  }

  @media (max-width: 480px) {
    padding-top: 100%;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 50px 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 50px 0;
`;

const SectionWrapper = styled.section`
  background-color: aliceblue;
  padding: 30px 0;
`;

const BenefitsSection = styled.section`
  background-image: url("https://smarative.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519614218660-ea0a24a43b4c%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wxMTc3M3wwfDF8c2VhcmNofDExfHxvdmVybGF5JTIwbGF5ZXJ8ZW58MHx8fHwxNjg3OTk5MjY4fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D2000&w=3840&q=75");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0;
`;

const helmetContext = {};

const Home: React.FC = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <HomeWrapper>
        <Helmet>
          <title>Добро пожаловать в CAD Exchanger</title>
          <meta
            name='description'
            content='Узнайте о CAD Exchanger и наших услугах. Мы предлагаем качественные решения для ваших нужд.'
          />
          <meta
            name='keywords'
            content='CAD Exchanger, услуги, решения, качественные услуги, инновации, образование'
          />
        </Helmet>
        <div>
          <Main>
            <Container>
              <MainWrapper>
                <ContentWrapper>
                  <Title align='left'>
                    Education of <br /> the future today
                  </Title>
                  <Description>
                    We provide innovative solutions for schools and
                    universities, helping students develop skills that will be
                    in demand in the future.
                  </Description>
                </ContentWrapper>
                <VideoWrapper>
                  <LiteYouTubeEmbed
                    id='dQw4w9WgXcQ'
                    title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
                  />
                </VideoWrapper>
              </MainWrapper>
            </Container>
          </Main>

          <BenefitsSection>
            <Container>
              <div>
                <SectionTitle>Our key benefits</SectionTitle>
                <CardsList cards={cards} />
                <ButtonWrapper>
                  <Link to='/contact'>
                    <Button color='default' variant='solid' size='large'>
                      Contact us
                    </Button>
                  </Link>
                </ButtonWrapper>
              </div>
            </Container>
          </BenefitsSection>

          <SectionWrapper>
            <Container>
              <div>
                <SectionTitle>Contact us for cooperation</SectionTitle>
                <ButtonWrapper>
                  <Link to='/contact'>
                    <Button color='default' variant='solid' size='large'>
                      Contact us
                    </Button>
                  </Link>
                </ButtonWrapper>
              </div>
            </Container>
          </SectionWrapper>
        </div>
      </HomeWrapper>
    </HelmetProvider>
  );
};
export default Home;
