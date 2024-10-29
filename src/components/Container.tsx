import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
	max-width: 1770px;
	padding: 0 15px;
	margin: 0 auto;
`;

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
export default Container;
