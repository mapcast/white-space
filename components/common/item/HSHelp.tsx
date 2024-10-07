
export default function HSHelp({text}: {text: string}) {
  return (
    <div title={text} style={{borderRadius: '50%', width: 16, height: 16}}>
      <span style={{color: '#FFF'}}>?</span>
      <style jsx>{`
        div {
          cursor: help;
        }
      `}</style>
    </div>
  )
}