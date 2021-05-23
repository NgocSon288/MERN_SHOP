import React, { useEffect, useContext } from "react";
import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import { ProductContext } from "../../../contexts/client/ProductContext";

export default function ProductCatalogue() {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {}, [products]);

  return (
    <Row xs="1" sm="2" md="4">
      {products &&
        products.map((item) => (
          <Card>
            <CardImg
              top
              width="100%"
              src={
                `http://localhost:3000/images/product/${
                  item.image.split("|")[0]
                }` ||
                "https://tse3.mm.bing.net/th?id=OIP.03Nx1O7saqRog5kMdOZSuwHaHa&pid=Api&P=0&w=300&h=300"
              }
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {item.category && item.category.name && (
                  <td>{item.category.name}</td>
                )}
                {!item.category && <td>Không xác định</td>}
              </CardSubtitle>
              <CardText>{item.price}</CardText>
              <Button>Add to Cart</Button>
            </CardBody>
          </Card>
        ))}
    </Row>
  );
}
