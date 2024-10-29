import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
