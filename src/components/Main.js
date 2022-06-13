import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import data from "../data";

export default function Main() {
  const cardElements = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="main-container">
      <Hero />
      <section className="cards-container">{cardElements}</section>
    </div>
  );
}
