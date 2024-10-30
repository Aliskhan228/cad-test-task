import styled from "styled-components";
import Container from "../components/Container";
import CardsList from "../components/CardsList";
import { cards } from "../data/cardsData";
import { Button } from "antd";
import { Link } from "react-router-dom";

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

const Title = styled.h1`
  font-size: 3rem;
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Description = styled.p`
  width: 50%;
  font-size: 1.2rem;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    text-align: center;
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

function Home() {
  return (
    <HomeWrapper>
      <div>
        <Main>
          <Container>
            <MainWrapper>
              <ContentWrapper>
                <Title>Образование будущего уже сегодня</Title>
                <Description>
                  Мы предлагаем инновационные решения для школ и университетов,
                  помогая учащимся развивать навыки, которые будут востребованы
                  в будущем.
                </Description>
              </ContentWrapper>
              <VideoWrapper>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=FjYp3OSPnqWTqpU_'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
            </MainWrapper>
          </Container>
        </Main>

        <section>
          <Container>
            <div>
              <SectionTitle>Наши ключевые преимущества</SectionTitle>
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
        </section>

        <SectionWrapper>
          <Container>
            <div>
              <SectionTitle>Свяжитесь с нами для сотрудничества</SectionTitle>
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
  );
}
export default Home;
