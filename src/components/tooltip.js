import React, { useState } from "react";
import Portal from "./portal";
function Tooltip({ children, text, bold, italic, left, top, ...props }) {
  const [show, setShow] = useState(false);
  const style = {
    position: "fixed",
    top: top || "100px",
    left: left || "100px",
    boxSizing: "border-box",
    display: "flex",
    maxHeight: 50,
    maxWidth: 200,
    overflow: "auto",
    fontSize: "14px",
    fontWeight: bold ? "bold" : 400,
    fontStyle: italic ? "italic" : "normal",
    letterSpacing: "0.02em",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    pointerEvents: "none",
    padding: "7px 10px",
    borderRadius: 4,
    zIndex: 99999,
  };
  const crossStyle = {
    color: "white",
    fontWeight: 400,
    fontStyle: "normal",
    cursor: "pointer",
    pointerEvents: "auto",
  };
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      })}
      {show && (
        <Portal>
          <div style={style}>
            <span>{text}</span>
            <div
              style={crossStyle}
              onClick={() => {
                setShow(false);
              }}
            >
              &#x274C;
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
export default Tooltip;
