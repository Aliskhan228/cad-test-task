import React from "react";
import { Card } from "../types/types";
import CardItem from "./Card";
import styled from "styled-components";

interface Props {
  cards: Card[];
}

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  column-gap: 100px;
  row-gap: 50px;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
  }
`;

const CardsList: React.FC<Props> = ({ cards }) => {
  return (
    <CardContainer>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </CardContainer>
  );
};
export default CardsList;
