import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Item>
      <Topdiv>
        <ItemName>1st ITEM</ItemName>
        <Quit>X</Quit>
      </Topdiv>
      <Bottomdiv>
        Quantity:
        <ItemNum></ItemNum>
      </Bottomdiv>
    </Item>
  );
};

const Item = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
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
  border-top: none;
  border-right: none;
  border-left: none;
  width: 20px;
  height: 20px;
`;

export default CartItem;
