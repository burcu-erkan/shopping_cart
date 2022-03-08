import React from "react";
import { CartItemType } from "./App";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 8px;
  :hover {
    background-color: lightgray;
  }

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Container>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Container>
  );
};
export default Item;
