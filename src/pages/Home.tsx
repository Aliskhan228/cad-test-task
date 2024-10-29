import styled from "styled-components";
import Container from "../components/Container";
import CardsList from "../components/CardsList";
import { cards } from "../data/cardsData";
import { Button } from "antd";

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
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  width: 50%;
  margin-bottom: 20px;
`;

const Description = styled.p`
  width: 50%;
  font-size: 1.2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 50px 0;
  font-size: 2rem;
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
              <div>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=FjYp3OSPnqWTqpU_'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </div>
            </MainWrapper>
          </Container>
        </Main>

        <section>
          <Container>
            <div>
              <SectionTitle>Наши ключевые преимущества</SectionTitle>
              <CardsList cards={cards} />
              <ButtonWrapper>
                <Button color='default' variant='solid' size='large'>
                  Contact us
                </Button>
              </ButtonWrapper>
            </div>
          </Container>
        </section>

        <SectionWrapper>
          <Container>
            <div>
              <SectionTitle>Свяжитесь с нами для сотрудничества</SectionTitle>
              <ButtonWrapper>
                <Button color='default' variant='solid' size='large'>
                  Contact us
                </Button>
              </ButtonWrapper>
            </div>
          </Container>
        </SectionWrapper>
      </div>
    </HomeWrapper>
  );
}
export default Home;
