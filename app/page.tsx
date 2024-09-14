'use client'
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";



export default function Home() {
  const router = useRouter();
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(animationRef.current != null) {
      animationRef.current.addEventListener('animationend', () => router.push("/home"));
    }
  });

  return (
    <main style={{width: '100%', height: '100%'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <div ref={animationRef} className="white-space-board">
          <h1 style={{fontSize: '22px'}}>Welcome to white space.</h1>
        </div>
      </div>
      <style jsx>{`
        .white-space-board {
          animation: fadein 8s;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%; 
          height: 80%; 
          border: 1px solid black;
          opacity: 0;
        }
        @keyframes fadein {
          0%: {
            opacity: 0;
          }
          30%: {
            opacity: 1;
          }
          70%: {
            opacity: 1;
          }
          100%: {
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
