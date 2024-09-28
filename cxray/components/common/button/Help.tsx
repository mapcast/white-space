import questionIcon from '@/public/assets/icons/cxray/question.png';

export default function Help({text}: {text: string}) {
  return (
    <div title={text}>
      <img src={questionIcon.src} style={{width: '17px'}}/>
      <style jsx>{`
        div {
          cursor: help;
        }
      `}</style>
    </div>
  )
}