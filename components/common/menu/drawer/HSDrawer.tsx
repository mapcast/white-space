'use client';
import { useState } from "react";
import HSShelf from "./HSShelf";
import atom from '@/public/icons/atom.png';
import DoubleArrow from "../../item/DoubleArrow";
import nextt from '@/public/icons/direction/nextt.png';
import { useRouter } from "next/navigation";


export default function HSDrawer({background, right}: {background?: string, right?: boolean}) {
  const [active, setActive] = useState(false);
  const [opened, setOpened] = useState<HSShelfItem|null>(null);
  const router = useRouter();
  const datas: HSShelfItem[] = [
    {text: "Pages", sub: [
      {text: 'board page', onClick: () => router.push('/board')},
      {text: 'component page', onClick: () => router.push('/components')},
      {text: 'home', onClick: () => router.push('/home')}]},
    {icon: atom.src, text: "Just Shelf", sub: [{text: 'Sub Shelf', onClick: () => alert("sub!")},{text: 'Sub Shelf 2', onClick: () => alert("sub 2!")},]},
    {text: "Good Shelf", sub: [{text: 'Sub Shelf3', onClick: () => alert("sub!")},{text: 'Sub Shelf 4', onClick: () => alert("sub 2!")},]},
    {icon: atom.src, text: "Suoer Shelf", sub: [{text: 'Sub Shelf3', onClick: () => alert("sub!")},{text: 'Sub Shelf 4', onClick: () => alert("sub 2!")},]},
    {icon: atom.src, text: "PP Shelf", sub: [{text: 'Sub Shelf3', onClick: () => alert("sub!")},{text: 'Sub Shelf 4', onClick: () => alert("sub 2!")},]}
  ]
  

  return (
    <nav className={active ? 'active' : 'deactive'}>
      <button onClick={() => setActive(!active)}><img src={nextt.src} style={{width: 25, transform: active ? 'rotate(180deg)' : 'rotate(0)'}}/></button>
      {datas.map((shelf: HSShelfItem, index: number) => <HSShelf key={index} opened={opened != null && opened.text === shelf.text} setOpened={setOpened} shelf={shelf}/>)}
      <style jsx>{`
        nav {
          position: fixed; 
          left: ${right ? 'auto' : 0};
          right: ${right ? 0 : 'auto'};
          top: 0;
          height: 100vh;
          width: 330px;
          background: #FFF;
          color: #000;
          z-index: 99999;
          padding: 10px;
          border-right: 1px solid #000;
        }
        .active {
          animation-name: open-nav;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        .deactive {
          animation-name: close-nav;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        
        @keyframes open-nav{
          0%{
            transform: translateX(-350px);
          }
          100%{
            transform: translateX(0px);
          }
        }
        @keyframes close-nav{
          0%{
            transform: translateX(0px);
          }
          100%{
            transform: translateX(-350px);
          }
        }
        button {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          left: 350px;
        }
      `}</style>
    </nav>
  )
}