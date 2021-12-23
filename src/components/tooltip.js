import React, { useState } from "react";
import Portal from "./portal";
import "./tooltip.css";
function Tooltip({ children, text, bold, italic, left, top, ...props }) {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState("0px");
  const style = {
    position: "fixed",
    top: top || "100px",
    left: left || "100px",
    boxSizing: "border-box",
    display: "flex",
    maxHeight: 50,
    maxWidth: 200,
    opacity: show ? "1" : "0",
    overflow: "auto",
    fontSize: "14px",
    fontWeight: bold ? "bold" : 400,
    fontStyle: italic ? "italic" : "normal",
    letterSpacing: "0.02em",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    // pointerEvents: "none",
    padding: "7px 10px",
    borderRadius: 4,
    zIndex: 99999,
    transition: "opacity 2s",
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
    setWidth("auto");
  };
  const handleMouseOut = () => {};
  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      })}

      <Portal>
        <div style={style}>
          <span className="pane">{text}</span>
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
    </>
  );
}
export default Tooltip;
