import React from "react";
import Avatar from "../assets/avatar1.png";

function AccountPage() {
  return (
    <div className="account-page">
      <div className="account-info">
        <div className="account-avatar">
          <img width="70" height="70" src={Avatar} alt="avatar" />
          <div>Name</div>
        </div>
        <div className="account-amount">
          <div>Số dư tài khoản</div>
          <div>0</div>
        </div>
      </div>
      <div className="account-deposit">
        <div>NẠP TIỀN</div>
        <div>RÚT TIỀN</div>
      </div>
      <div className="account-function">
        <div>Lịch sử nạp tiền</div>
        <div>Lịch sử giao dịch</div>
        <div>Đổi mật khẩu đăng nhập</div>
        <div>Đổi mật khẩu rút tiền</div>
        <div>Phương thức thanh toán</div>
        <div>Đăng xuất</div>
      </div>
    </div>
  );
}

export default AccountPage;
