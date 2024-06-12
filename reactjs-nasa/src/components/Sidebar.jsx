import React from "react";

const Sidebar = (props) => {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
      <div className="sidebarContents">
        <h2>The Britual Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>dwadijawdwaijdaijsdadwadawdiajowdaiwjd</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
