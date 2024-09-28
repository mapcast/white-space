export default function GradationBox({content}: {content: JSX.Element}) {
  return (
    <div className="gradient-box">
        {content}
        <style jsx>{`
          .gradient-box {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background: linear-gradient(to bottom, #354466 0%, #051436 35%, #020217 70%);
          }
        `}</style>
      </div>
        
  )
}