import React, { useEffect, useRef } from "react";

function ConfirmationDialog(props) {
  const { content, onCloseHandler } = props;
  const wrapperRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body");
    const backdrop = document.createElement("div");
    backdrop.className = "backdrop";
    body.appendChild(backdrop);

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      body.removeChild(backdrop);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mouseup", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      onCloseHandler();
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      onCloseHandler();
    }
  };

  return (
    <div ref={wrapperRef} className="modal-dialog">
      <div className="modal-content">{content}</div>
      <div className="modal-close">
        <button type="button" onClick={onCloseHandler}>
          X
        </button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
