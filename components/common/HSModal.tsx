export default function HSModal({title, content, active, setActive}: {title?: string, content: JSX.Element, active: boolean, setActive: (active: boolean) => void}) {
  return (
    <div style={{position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, display: active ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'}}>
      <div 
      style={{position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1}} 
      onClick={() => setActive(false)}/>
      <div style={{background: '#FFF', zIndex: 2, borderRadius: 5}}>
        {title ? <h5 style={{padding: '10px 0', textAlign: 'center', color: '#000'}}>{title}</h5> : <></>}
        {content}
      </div>
    </div>
  )
}