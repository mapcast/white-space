'use client'
import { useState } from "react";
import SimpleArrow from "../../item/SimpleArrow";
type SubShelfItem = {
  text: string,
  onClick: () => void
}
type ShelfItem = {
  text: string,
  sub: SubShelfItem[]
}

export default function HSShelf({text, shelf}: {text: string, shelf: ShelfItem}) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`shelves ${opened ? 'opened' : 'closed'}`}>
      <div className={`main-shelf`} onClick={() => setOpened(!opened)}>
        <div className="vertical-align">
          <span style={{paddingLeft: 30, fontSize: 18}}>{shelf.text}</span>
        </div>
        <div className="element-to-center">
          <button><SimpleArrow rotate={opened ? 270 : 90}/></button>
        </div>
      </div>
      {shelf.sub.map((sub: SubShelfItem, index: number) =>
      <div className="sub-shelf element-to-center" key={index} onClick={() => sub.onClick()}>
        {sub.text}
      </div>)}
      <style jsx>{`
        .shelves {
          overflow-y: hidden;
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
        .closed {
          max-height: 60px;
        }
      `}</style>
    </div>
  )

}