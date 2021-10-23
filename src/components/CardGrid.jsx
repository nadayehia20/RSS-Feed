import React, { Component, useState, useEffect } from "react";

import CardDesign from "./CardDesign";

const PAGE_NUMBER = 1;

const CardG = () => {
  const [state, setstate] = useState([]);
  const [page, setpage] = useState(PAGE_NUMBER);

  useEffect(() => {
    fetch(`http://localhost:3000/Data?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setstate([...state, ...json[0][page]]);
      });
  }, [page]);

  const scrollToEnd = () => {
    if (page + 1 <= 3) {
      setpage(page + 1);
    }
  };

  window.onscroll = function (ev) {
    let w = window.innerHeight + window.pageYOffset;
    if (w >= document.body.offsetHeight - 5) {
      scrollToEnd();
    }
  };

  return (
    <div className="grid">
      {state.map((item, i) => (
        <CardDesign
          key={i}
          source={item.source}
          title={item.title}
          description={item.description}
          fullLink={item.fullLink}
          creator={item.creator}
          date={item.date}
          timeToRead={item.timeToRead}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CardG;
