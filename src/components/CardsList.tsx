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
  column-gap: 30px;
  row-gap: 50px;
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
