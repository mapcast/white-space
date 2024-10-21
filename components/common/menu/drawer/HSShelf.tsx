'use client'
import { useState } from "react";
import SimpleArrow from "../../item/SimpleArrow";

export default function HSShelf({text}: {text: string}) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`shelves ${opened ? 'opened' : 'closed'}`}>
      <div className={`main-shelf`} onClick={() => setOpened(!opened)}>
        <div className="vertical-align">
          <span style={{paddingLeft: 30, fontSize: 18}}>{text}</span>
        </div>
        <div className="element-to-center">
          <button><SimpleArrow rotate={opened ? 270 : 90}/></button>
        </div>
      </div>
      <div className="sub-shelf element-to-center">
        YaY
      </div>
      <div className="sub-shelf element-to-center">
        Boss
      </div>
      <div className="sub-shelf element-to-center">
        Lofi
      </div>
      <div className="sub-shelf element-to-center">
        Maximiliano
      </div>
      <style jsx>{`
        .shelves {
          overflow-y: hidden;
          max-height: 60px;
          transition: all 0.3s;
        }
        .main-shelf {
          width: 100%;
          height: 59px;
          display: grid;
          grid-template-columns: 1fr 50px;
          border-bottom: 1px solid #000;
          cursor: pointer;
        }
        .sub-shelf {
          height: 40px;
          border-bottom: 1px groove #000;
          cursor: pointer;
        }
        .opened {
          max-height: 500px;
        }
      `}</style>
    </div>
  )

}