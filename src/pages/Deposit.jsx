import React, { useState } from "react";
import { depositPackage } from "../services";
import { ConfirmationDialog, DepositPackage } from "../components";

function DepositPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [packageActive, setPackageActive] = useState("");

  const handleOpenPackageConfirmation = (pkg) => {
    setIsOpenModal(true);
    setPackageActive(pkg);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="deposit-page">
      <div className="page-title">
        <center>
          <h2>KÝ QUỸ TÀI CHÍNH</h2>
        </center>
      </div>
      <div className="page-banner"></div>
      <div className="deposit-container">
        {depositPackage.map((pkg) => (
          <DepositPackage
            {...pkg}
            onClickPackage={handleOpenPackageConfirmation}
          />
        ))}
      </div>
      {isOpenModal && (
        <ConfirmationDialog
          onCloseHandler={closeModalHandler}
          content={
            <div className="package-content">
              <div className="package-title">Khoá {packageActive.name}</div>
              <div className="package-limit">
                Số tiền tối thiểu {packageActive.limit.toFixed(1)}
              </div>
              <div className="package-money-input">
                <input
                  type="number"
                  className="form-input"
                  placeholder="Vui lòng nhập số tiền nạp"
                />
              </div>
              <button type="button">Xác Nhận Chuyển Khoản</button>
            </div>
          }
        />
      )}
    </div>
  );
}

export default DepositPage;
