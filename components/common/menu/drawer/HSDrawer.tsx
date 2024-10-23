'use client';

import { useState } from "react";
import HSShelf from "./HSShelf";

export default function HSDrawer({right}: {right?: boolean}) {
  const [active, setActive] = useState(false);
  return (
    <nav className={active ? 'active' : 'deactive'}>
      <button onClick={() => setActive(!active)}>{active ? 'fold' : 'open'}</button>

      <HSShelf text="Hello"
      shelf={{text: "Just Shelf", sub: [{text: 'Sub Shelf', onClick: () => alert("sub!")},{text: 'Sub Shelf 2', onClick: () => alert("sub 2!")}]}}/>
      <style jsx>{`
        nav {
          position: fixed; 
          left: ${right ? 'auto' : 0};
          right: ${right ? 0 : 'auto'};
          top: 0;
          height: 100vh;
          width: 330px;
          background: #FFF;
          z-index: 99999;
          padding: 10px;
          border-right: 1px solid black;
        }
        .active {
          animation-name: open-nav;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        .deactive {
          animation-name: close-nav;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        
        @keyframes open-nav{
          0%{
            transform: translateX(-350px);
          }
          100%{
            transform: translateX(0px);
          }
        }
        @keyframes close-nav{
          0%{
            transform: translateX(0px);
          }
          100%{
            transform: translateX(-350px);
          }
        }
        button {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          left: 350px;
        }
      `}</style>
    </nav>
  )
}