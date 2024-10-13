
export default function HSHelp({text}: {text: string}) {
  return (
    <div title={text} className="" style={{borderRadius: '50%', width: 17, height: 17}}>
      <span style={{color: '#000'}}>?</span>
      <style jsx>{`
        div {
          cursor: help;
        }
      `}</style>
    </div>
  )
}