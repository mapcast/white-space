import {useEffect} from 'react';
export default function SimpleToast({text, active, close}: {text: string, active: boolean, close: () => void}) {
  useEffect(() => {
    if(active) {
      setTimeout(() => {
        close();
      }, 2000);
    }
  }, [active]);
  return (
    <>
      <div className={`simple-toast element-to-center ${active ? 'active' : ''}`}>
        {text}
      </div>
      <style jsx>{`
        .simple-toast {
          position: fixed;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #000;
          color: #EEE;
          font-weight: 800;
          font-size: 14px;
          padding: 0 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 9999;
          opacity: 0;
          transition: all 0.5s ease-out;
          height: 65px;
          box-shadow: 0 0 25px 0 rgba(0,0,0,0.1);
        }
        
        .simple-toast.active {
          opacity: 0.9;
        }

        p {
          font-size: 16px;
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}