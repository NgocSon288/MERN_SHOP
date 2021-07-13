import React, { useEffect, useContext, useState } from "react";
import { Collapse, Button, ListGroup, ListGroupItem, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { CategoryContext } from "../../../contexts/client/CategoryContext";
import * as CATEGORY_TYPE from "../../../reducers/client/categoryType.js";

import { BrandContext } from "../../../contexts/client/BrandContext";
import * as BRAND_TYPE from "../../../reducers/client/brandType.js";

import { ProductContext } from "../../../contexts/client/ProductContext";

import "./FilterMenu.css";

export default function FilterMenu({ filter, products }) {
  let { categories, dispatch } = useContext(CategoryContext);
  let { brands, dispatch: dispatchBrand } = useContext(BrandContext);

  useEffect(() => {}, [categories, brands]);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setIsOpen5(!isOpen5);

  const apply = async () => {
    var brand = [];
    document
      .getElementById("show-list-1")
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((element) => {
        brand.push(element.value);
      });

    var rating = [];
    document
      .getElementById("show-list-2")
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((element) => {
        rating.push(parseInt(element.value));
      });

    var sale = "";
    if (
      document
        .getElementById("show-list-4")
        .querySelector('input[type="checkbox"]:checked')
    ) {
      sale = document
        .getElementById("show-list-4")
        .querySelector('input[type="checkbox"]:checked').value;
    }

    var minPrice = document.getElementById("minPrice").value;
    var maxPrice = document.getElementById("maxPrice").value;

    var filterProductList = [];

    var isFilter = 0;
    //Brand filter
    if (brand.length > 0) {
      for (var i = 0; i < brand.length; i++) {
        var item = products.filter((e) => e.brand.name == brand[i]);
        filterProductList = filterProductList.concat(item);
      }
      isFilter = 1;
    }

    //Rating Filter
    if (rating.length > 0) {
      if (isFilter == 0) {
        for (var i = 0; i < rating.length; i++) {
          var item = products.filter((e) => Math.floor(e.rating) == rating[i]);
          filterProductList = filterProductList.concat(item);
        }
      } else {
        var item = [];
        for (var i = 0; i < rating.length; i++) {
          item = item.concat(
            filterProductList.filter((e) => Math.floor(e.rating) == rating[i])
          );
        }
        filterProductList = item;
      }
      isFilter = 1;
    }

    //Price filter
    if (minPrice != "" || maxPrice != "") {
      if (isFilter == 0) {
        var list = products;
      } else {
        var list = filterProductList;
      }
      if (minPrice != "") {
        list = list.filter((e) => e.price >= minPrice);
      }
      if (maxPrice != "") {
        list = list.filter((e) => e.price <= maxPrice);
      }
      filterProductList = list;
      isFilter = 1;
    }

    //Saleoff filter
    if (sale != "") {
      if (isFilter == 0) {
        var list = products;
      } else {
        var list = filterProductList;
      }
      list = list.filter(
        (e) => ((e.promotion - e.price) / e.promotion) * 100 >= sale
      );
      filterProductList = list;
      isFilter = 1;
    }

    if (filterProductList.length == 0 && isFilter == 0) {
      filterProductList = products;
    }

    filter(filterProductList);
  };

  return (
    // <div>
    //   <Button color="primary" onClick={toggle}>
    //     Nhãn hiệu
    //   </Button>
    //   <Collapse isOpen={isOpen}>
    //     <ListGroup>
    //       {categories.map((item) => (
    //         <ListGroupItem>{item.name}</ListGroupItem>
    //       ))}
    //     </ListGroup>
    //   </Collapse>
    // </div>
    <div class="loc-content">
      <div class="wrapper-item">
        <div class="item">
          <button id="item-button-1" data-text="show-list-1" onClick={toggle1}>
            Nhãn hiệu
          </button>
          <Collapse isOpen={isOpen1}>
            <ul id="show-list-1">
              {brands.map((item) => (
                <li>
                  <input type="checkbox" id={item.name} value={item.name} />
                  <label for={item.name}>{item.name}</label>{" "}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
        <div class="item">
          <button id="item-button-2" data-text="show-list-2" onClick={toggle2}>
            Đánh giá
          </button>
          <Collapse isOpen={isOpen2}>
            <ul id="show-list-2" class="star-san-pham">
              <li>
                <input type="checkbox" class="checked" id="star-1" value="5" />
                <label for="star-1">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>5.0</span>
                </label>
              </li>
              <li>
                <input type="checkbox" class="checked" id="star-2" value="4" />
                <label for="star-2">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>4.0</span>
                </label>
              </li>
              <li>
                <input type="checkbox" class="checked" id="star-3" value="3" />
                <label for="star-3">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>3.0</span>
                </label>
              </li>
              <li>
                <input type="checkbox" class="checked" id="star-4" value="2" />
                <label for="star-4">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>2.0</span>
                </label>
              </li>
              <li>
                <input type="checkbox" class="checked" id="star-5" value="1" />
                <label for="star-5">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>1.0</span>
                </label>
              </li>
            </ul>
          </Collapse>
        </div>
        <div class="item">
          <button id="item-button-3" data-text="show-list-3" onClick={toggle3}>
            Giá
          </button>
          <Collapse isOpen={isOpen3}>
            <div class="wrapper-gia" id="show-list-3">
              <div class="item-list item-gia">
                <input type="text" placeholder="Tối thiểu" id="minPrice" /> -
                <input type="text" placeholder="Tối đa" id="maxPrice" />
              </div>
            </div>
          </Collapse>
        </div>
        <div class="item">
          <button id="item-button-4" data-text="show-list-4" onClick={toggle4}>
            Giảm giá
          </button>
          <Collapse isOpen={isOpen4}>
            <ul id="show-list-4">
              <li>
                <input type="checkbox" id="giam-gia-1" value="5" />
                <label for="giam-gia-1">5% trở lên</label>
              </li>
              <li>
                <input type="checkbox" id="giam-gia-2" value="10" />
                <label for="giam-gia-2">10% trở lên</label>
              </li>
              <li>
                <input type="checkbox" id="giam-gia-3" value="20" />
                <label for="giam-gia-3">20% trở lên</label>
              </li>
              <li>
                <input type="checkbox" id="giam-gia-4" value="30" />
                <label for="giam-gia-4">30% trở lên</label>
              </li>
              <li>
                <input type="checkbox" id="giam-gia-5" value="50" />
                <label for="giam-gia-5">50% trở lên</label>
              </li>
              <li>
                <input type="checkbox" id="giam-gia-6" value="60" />
                <label for="giam-gia-6">60% trở lên</label>
              </li>
            </ul>
          </Collapse>
        </div>
        <div class="item">
          <button id="item-button-5" data-text="show-list-5" onClick={toggle5}>
            Đơn vị vận chuyển
          </button>
          <Collapse isOpen={isOpen5}>
            <ul id="show-list-5">
              <li>
                <input type="checkbox" id="giao-hang-1" />
                <label for="giao-hang-1">Giao Hàng Tiết Kiệm</label>
              </li>
              <li>
                <input type="checkbox" id="giao-hang-2" />
                <label for="giao-hang-2">Giao Hàng nhanh</label>
              </li>
              <li>
                <input type="checkbox" id="giao-hang-3" />
                <label for="giao-hang-3">Viettel Post</label>
              </li>
              <li>
                <input type="checkbox" id="giao-hang-4" />
                <label for="giao-hang-4">NowShip</label>
              </li>
              <li>
                <input type="checkbox" id="giao-hang-5" />
                <label for="giao-hang-5">Ninja Van</label>
              </li>
            </ul>
          </Collapse>
        </div>
        <div
          class="item text-center submit"
          style={{ backgroundColor: "rgba(0, 123, 255, 0.39)" }}
        >
          <button class="submit-ap-dung" onClick={apply}>
            Áp dụng
          </button>
        </div>
      </div>
    </div>
  );
}
