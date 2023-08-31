import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Container, Row, Col } from "react-bootstrap";
import "./shopCSS.css";
export const Shop = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div className="shop">
            <div className="shopTitle">
              <h1>Welcome to the shop</h1>
            </div>
            <div className="products">
              {PRODUCTS.map((product) => (
                <Product data={product} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
