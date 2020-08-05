import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import { getStoreItemArray, getSubtotal, getCartQuantity } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const subtotal = useSelector(getSubtotal);
  const cartQuantity = useSelector(getCartQuantity);

  const subtotalFormatted = subtotal / 100;

  console.log(storeItems);

  return (
    <Wrapper>
      <Top>
        <YourCart>Your Cart</YourCart>
        {storeItems.length > 0 && (
          <ItemCounter>{cartQuantity} items</ItemCounter>
        )}
      </Top>
      <CartContent>
        {storeItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </CartContent>

      <Bottom>
        <Total>Total : ${subtotalFormatted}</Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 400px;
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

const ItemCounter = styled.span`
  color: #c9c8c8;
`;

const CartContent = styled.ul`
  list-style-type: none;
  align-items: center;
  padding: 0;
  overflow: auto;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.div`
  font-size: 1.2em;
`;

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
