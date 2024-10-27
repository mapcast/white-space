'use client';

export default function HSToggler({items}: {items: Clickable[]}) {
  return (
    <div className="hs-toggler">
      {items.map((item: Clickable, index: number) =>
      <button className="hs-toggle-button" key={index} onClick={item.onClick}>
        {item.display}
      </button>)}
      <style jsx>{`
        .hs-toggler {
          background: #FFF;
          display: flex;
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 5px;
          min-height: 25px;
          justify-content: space-between;
        }
        .hs-toggle-button:first-child {
          border-left: none;
        }
        .hs-toggle-button {
          width: 100%;
          height: 100%;
          padding: 5px 0;
          text-align: center;
          cursor: pointer;
          border: none;
          transition: all 0.5s ease;
          outline: none;
          border-left: 1px solid rgba(0,0,0,0.2);
        }
        .hs-toggle-button:hover {
          background: rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
    
  )
}