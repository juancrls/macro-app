import React from "react";
import "./Skeleton.scss";

export default function Skeleton({ repeat = 8 }) {
  const divs = [];

  for (let i = 0; i < repeat; i++) {
    divs.push(
      <div className="fake-list-item" key={i}>
        <div className="fake-list-placeholder"></div>
      </div>
    );
  }

  return (
    <>
      <section className="fake-data-container">{divs}</section>
    </>
  );
}