'use  client';

export default function HSModal({title, content, active, setActive}: {title?: string, content: JSX.Element, active: boolean, setActive: (active: boolean) => void}) {
  return (
    <div className={`modal ${active ? 'active' : 'deactive'}`}>
      <div 
      style={{position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1}} 
      onClick={() => setActive(false)}/>
      <div style={{background: '#FFF', zIndex: 2, borderRadius: 5}}>
        {title ? <h5 style={{padding: '10px 0', textAlign: 'center', color: '#000'}}>{title}</h5> : <></>}
        {content}
      </div>
      <style jsx>{`
        .modal {
          position: fixed; 
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          justify-content: center; 
          align-items: center; 
          transition: all 0.3s;
        }
        .active {
          display: flex;
        }
        .deactive {
          display: none;
        }
      `}</style>
    </div>
  )
}