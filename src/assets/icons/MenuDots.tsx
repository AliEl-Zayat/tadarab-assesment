import React from "react";

const MenuDots = () => {
  const dotStyles = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#0E0B1D",
  };

  return (
    <div
      className="flex"
      style={{
        flexDirection: "column",
        gap: "4px",
        justifyContent: "center",
      }}
    >
      <div style={dotStyles} />
      <div style={dotStyles} />
      <div style={dotStyles} />
    </div>
  );
};

export default React.memo(MenuDots);
