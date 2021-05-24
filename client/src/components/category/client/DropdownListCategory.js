import React, { useEffect, useContext, useState } from "react";
import { Collapse, Button, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import { CategoryContext } from "./../../../contexts/client/CategoryContext";
import * as CATEGORY_TYPE from "./../../../reducers/client/categoryType.js";

export default function ListCategory() {
  let { categories, dispatch } = useContext(CategoryContext);

  useEffect(() => {}, [categories]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Nhãn hiệu
      </Button>
      <Collapse isOpen={isOpen}>
        <ListGroup>
          {categories.map((item) => (
            <ListGroupItem>{item.name}</ListGroupItem>
          ))}
        </ListGroup>
      </Collapse>
    </div>
  );
}
