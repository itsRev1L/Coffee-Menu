import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Cart from "../Componnents/CartPage/Cart";

function CartPage({ cartItems, removeFromCart }) {
  return (
    <Container style={{ padding: 20 }}>
      {cartItems.length === 0 ? (
        <p className="d-flex justify-content-center align-items-center mt-5 empty-cart text-black">
          .سبد خرید شما خالی است
        </p>
      ) : (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
    </Container>
  );
}

export default CartPage;
