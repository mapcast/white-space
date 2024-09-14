'use client'

import { useState } from "react";

export default function Home() {
  //https://codepen.io/tmrDevelops/pen/NPXodB
  return (
    <div className="main-grid">
      <div className="main-grid-head">
        <h1>Lorem Ipsum</h1>
        <span>Lorem Ipsum</span>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '80%', height: '100%', padding: '20px 0'}}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p style={{marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '330px', height: '330px', border: '1px groove black', borderRadius: '20px'}}>

        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '80%', height: '100%', padding: '20px 0'}}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p style={{marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <style jsx>{`
        .main-grid {
          widht: 100%; 
          height: 100%;
          display: grid;
          grid-template-rows: 2fr 5fr; 
          grid-template-columns: 3fr 2fr 3fr;
        }
        .main-grid-head {
          grid-column: span 3;
          text-align: center;
          padding-top: 80px;
        }
      `}</style>
    </div>
  );
}