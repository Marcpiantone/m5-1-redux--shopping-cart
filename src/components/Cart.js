import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Top>
        <YourCart>Your Cart</YourCart>
        <ItemCounter>1 Item</ItemCounter>
      </Top>
      <CartItem />
      <Bottom>
        <Total>Total : </Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 500px;
  background: #401f43;
  color: white;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  padding: 15px;
`;

const Top = styled.div``;

const YourCart = styled.div`
  font-size: 2em;
`;

const ItemCounter = styled.span``;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.div``;

const PurchaseButton = styled.button`
  width: 150px;
  border-radius: 20px;
  font-size: 1.2em;
  color: white;
  padding: 10px;
  background: #ff406e;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

export default Cart;
