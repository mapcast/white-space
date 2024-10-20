import { useState } from "react"

export default function HSLink({text, onClick, fontSize}: {text: string, onClick: () => void, fontSize?: number}) {
  return (
    <span onClick={onClick}>
      {text}
      <style jsx>{`
        span {
          color: #0D92F4;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: ${fontSize ? fontSize : 14}px;
        }
        span:hover {
          color: #77CDFF;
        }
      `}</style>
    </span>
  )
}