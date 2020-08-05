import React from "react";
import styled from "styled-components";

const CartItem = (item) => {
  console.log(item);
  const { id, title, price, quantity } = item.item;
  return (
    <Item>
      <Topdiv>
        <ItemName>{title}</ItemName>
        <Quit>X</Quit>
      </Topdiv>
      <Bottomdiv>
        Quantity:
        <ItemNum placeholder={quantity}></ItemNum>
      </Bottomdiv>
    </Item>
  );
};

const Item = styled.li`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
`;

const Topdiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ItemName = styled.span``;

const Quit = styled.button`
  background: none;
  color: white;
  border: none;
`;

const Bottomdiv = styled.div`
  background: #2c152e;
  padding: 10px;
`;

const ItemNum = styled.input`
  color: white;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 20px;
  height: 20px;
  background: none;
  &::placeholder {
    color: white;
  }
`;

export default CartItem;
