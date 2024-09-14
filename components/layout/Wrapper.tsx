export default function Wrapper({contents}: any) {
  return (
    <div className="main-wrapper">
      <div className="main">{contents}</div>
      <style jsx>{`
        .main-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main {
          width: 85vw;
          min-width: 1028px;
          min-height: 768px;
          height: 90vh;
          border: solid 5px hsla(0, 95%, 35%, 1);
        }
      `}</style>
    </div>
  );
}