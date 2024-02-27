import React from "react";
import HomePageIcon from "../assets/homepage.svg";
import ChartIcon from "../assets/chart-icon.png";
import CustomerIcon from "../assets/headset-icon.png";
import MoneyIcon from "../assets/money-icon.png";
import WalletIcon from "../assets/wallet-icon.png";
import RoutesConstant from "../routes/routes";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className="menu-container">
      <Link className="menu-item" to={RoutesConstant.HOME}>
        <div className="item-icon">
          <img src={HomePageIcon} alt="home-page" />
        </div>
        <div className="item-title">Trang chủ</div>
      </Link>
      <Link className="menu-item" to={RoutesConstant.MARKET}>
        <div className="item-icon">
          <img src={ChartIcon} alt="home-page" />
        </div>
        <div className="item-title">Thị trường</div>
      </Link>
      <Link className="menu-item" to={RoutesConstant.CUSTOMER}>
        <div className="item-icon">
          <img src={CustomerIcon} alt="home-page" />
        </div>
        <div className="item-title">CSKH</div>
      </Link>
      <Link className="menu-item" to={RoutesConstant.DEPOSIT}>
        <div className="item-icon">
          <img src={MoneyIcon} alt="home-page" />
        </div>
        <div className="item-title">Ký quỹ</div>
      </Link>
      <Link className="menu-item" to={RoutesConstant.ACCOUNT}>
        <div className="item-icon">
          <img src={WalletIcon} alt="home-page" />
        </div>
        <div className="item-title">Ví</div>
      </Link>
    </div>
  );
}

export default MenuBar;
