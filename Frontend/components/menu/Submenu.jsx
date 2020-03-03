import React, { Component } from "react";
import Link from "next/link";

class Submenu extends Component {
  render() {
    if (this.props.item === "All Deals")
      return (
        <div className="subnav">
          <ul>
            <li>
              <Link href="/Category/NewDeals">
                <a
                  onClick={() => {
                    this.props.onSubMenuClick("NewDeals");
                  }}
                >
                  <span>
                    Новые предложения <i className="icon-history" />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Category/BestDiscount">
                <a>
                  <span
                    onClick={() => {
                      this.props.onSubMenuClick("Discount");
                    }}
                  >
                    Лучшие предложения <i className="icon-tags" />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Category/BestPrice">
                <a>
                  <span
                    onClick={() => {
                      this.props.onSubMenuClick("Price");
                    }}
                  >
                    Лучшие цены <i className="icon-tenge" />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Category/Featured">
                <a>
                  <span
                    onClick={() => {
                      this.props.onSubMenuClick("Featured");
                    }}
                  >
                    Популярные предложения <i className="icon-fire" />
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      );
    if (this.props.item === "Beauty & Spas")
      return (
        <div className="subnav">
          <ul>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("Hair Style");
                }}
              >
                Уход за волосами
              </a>
            </li>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("Nails");
                }}
              >
                Уход за ногтями
              </a>
            </li>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("Face and Skin");
                }}
              >
                лицо и кожа
              </a>
            </li>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("MakeUp");
                }}
              >
                Ресницы и брови
              </a>
            </li>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("Hair Removal");
                }}
              >
                Депиляция и эпиляция
              </a>
            </li>
            <li>
              <a
                href="#n"
                onClick={() => {
                  this.props.onSubMenuClick("Spa and Massage");
                }}
              >
                спа и массаж
              </a>
            </li>
          </ul>
        </div>
      );

    if (this.props.item === "Health & Fitness")
      return (
        <div className="subnav">
          <ul>
            <li>
              <a href="/">спорт и тренажерный</a>
            </li>
            <li>
              <a href="/">Йога и медитация</a>
            </li>
            <li>
              <a href="/"> Танцы и Единоборства</a>
            </li>
            <li>
              <a href="/">стоматология и зрение</a>
            </li>
            <li>
              <a href="/">диагностика и лечение</a>
            </li>
          </ul>
        </div>
      );
    else return null;
  }
}

export default Submenu;
