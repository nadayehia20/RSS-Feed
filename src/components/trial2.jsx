import React, { Component, useState, useEffect } from "react";
//import { useEffect, useState } from "react";

import CardDesign from "./feed2";
//import * as data2 from "../utils/api2.json";

const PAGE_NUMBER = 1;

const CardG = () => {
  const [state, setstate] = useState([]); //to store the array returned from backend
  const [page, setpage] = useState(PAGE_NUMBER); //to indicate the current page number

  useEffect(() => {
    //function takes(call-back fn , variable lw t3'yr hnfz el callback fn)
    fetch(`http://localhost:3000/Data?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }, //fetch by return promise
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0][page]);
        console.log(state);
        // console.log([...state, json[0][page]]);
        console.log([...state, ...json[0][page]]);
        setstate([...state, ...json[0][page]]);
      });
  }, [page]);

  console.log({ page });
  console.log(state);
  const scrollToEnd = () => {
    if (page + 1 <= 3) {
      setpage(page + 1);
      console.log({ page });
    }
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  //part of skeleton loading

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

// class CardG extends React.Component {
//   state = {
//     allData: data2.Data,
//   };

//   render() {

//     return (
//       <div className="grid">
//         {this.state.allData.map((item) => (
//           <CardDesign
//             source={item.source}
//             title={item.title}
//             description={item.description}
//             fullLink={item.fullLink}
//             creator={item.creator}
//             date={item.date}
//             timeToRead={item.timeToRead}
//             image={item.image}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default CardG;
