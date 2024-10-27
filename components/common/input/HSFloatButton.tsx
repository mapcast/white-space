
export default function HSFloatButton({background, top, bottom, left, right, onClick}: 
  {background?: string, top?: number, bottom?: number, left?: number, right?:number, onClick: () => void}) {
  return (
    <button className="hs-float-button" onClick={onClick}>
      <div className="hs-float-button-shadow">

      </div>
      <style jsx>{`
        .hs-float-button {
          background: ${background ? background : '#FFF'};
          position: fixed;
          top: ${top ? `${top}px` : 'auto'};
          bottom: ${bottom ? `${bottom}px` : 'auto'};
          left: ${left ? `${left}px` : 'auto'};
          right: ${right ? `${right}px` : 'auto'};
          cursor: pointer;
          border: none;
          transition: all 0.5s ease;
          outline: none;
          border-radius: 30px;
          height: 60px;
          min-width: 60px;
          border: 1px groove rgba(0,0,0,0.1);
          display: flex;
          justify-contents: center;
          align-items: center;
          padding: 0;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
        }
        hs-float-button:hover {
          border: 1px groove rgba(0,0,0,0.2);
        }
        .hs-float-button-shadow {
          border-radius: 30px;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .hs-float-button-shadow:hover {
          border-radius: 30px;
          width: 100%;
          height: 60px;
          transition: all 0.5s ease;
          background: rgba(0,0,0,0.1);
        }
      `}</style>
    </button>
  )
}