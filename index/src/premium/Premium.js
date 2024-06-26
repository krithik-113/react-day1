import React from "react";

import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Premium = ({ plan, price, benefits }) => {
  
  
  return (
    <div>
      <header>
        <p>{plan}</p>
        <h3>${price}/month</h3>
        <hr />
      </header>
      <section>
        {benefits.map((val, index) => {
          if (price === 0 && plan === "FREE" && index < 4) {
            return (
              <p key={index}>
                <TiTick />
                {val}
              </p>
            );
          } else if (price === 9 && plan === 'PLUS' && index <7 ) {
          return (
            <p key={index}>
              <TiTick />
              {val}
            </p>
          );
          } else if (price === 49 && plan === 'PRO' && index < 8) {
             return (
               <p key={index}>
                 <TiTick />
                 {val}
               </p>
             );
          } else {
             return (
               <p className="RxCross2" key={index}>
                 <RxCross2 />
                 {val}
               </p>
             );
          }
        })}
      </section>
      <footer>
        <button>BUTTON</button>
      </footer>
    </div>
  );
};

export default Premium;
