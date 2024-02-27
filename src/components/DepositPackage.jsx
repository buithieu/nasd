import React from "react";

function DepositPackage(props) {
  const { name, limit, percent, time, onClickPackage } = props;

  const handleClickPackage = () => {
    onClickPackage({ ...props });
  };
  return (
    <div className="deposit-package">
      <div className="deposit-title">{name}</div>
      <div className="deposit-details">
        <div className="deposit-unit">
          <div className="deposit-value">{limit.toFixed(1)}</div>
          <div className="deposit-description">Hạn mức giao dịch</div>
        </div>
        <div className="deposit-unit">
          <div className="deposit-value">{percent}%</div>
          <div className="deposit-description">Tỉ lệ hoàn vốn mỗi ngày</div>
          <div className="deposit-lock-button">
            <button
              type="button"
              className="deposit-lock"
              onClick={handleClickPackage}
            >
              Khoá
            </button>
          </div>
        </div>
        <div className="deposit-unit">
          <div className="deposit-value">{time}</div>
          <div className="deposit-description">Thời gian khoá</div>
        </div>
      </div>
    </div>
  );
}

export default DepositPackage;
