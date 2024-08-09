import React from "react";

export default function QuickInfo(props) {
  function handleRender() {
    props.setRender((pre) => !pre);
  }

  return (
    <div className="quick-info">
      <div className="text-info">
        <h1 className="title">
          Find New Recipes Daily – Your Next Favorite Dish Is Just a Click Away!
        </h1>
        <p className="text-p1">
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
          corporis soluta tempore doloremque? Sit minus accusantium laboriosam
          facilis dolorem.
        </p>
        <button className="btn-start" onClick={handleRender}>
          Get Started
        </button>
      </div>
      <div>
        <img
          className="img-landing"
          src="https://logos-world.net/wp-content/uploads/2023/11/Chefs-Kiss-Emoji.png"
          alt="ignore-img"
        />
      </div>
    </div>
  );
}
