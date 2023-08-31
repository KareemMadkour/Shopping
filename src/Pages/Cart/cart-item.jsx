import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
import { Container, Row, Col } from "react-bootstrap";
export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateItemCartCountManually } =
    useContext(ShopContext);
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div className="cartItem">
            <img src={image} />
            <div className="description">
              <p>
                <b>{name}</b>
              </p>
              <p>${price}</p>
              <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateItemCartCountManually(Number(e.target.value), id)
                  }
                />
                <button onClick={() => addToCart(id)}>+</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
