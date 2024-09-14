'use client'

import dynamic from "next/dynamic";
import { useState } from "react";

const Tiptap = dynamic(() => import("@/components/editor/Tiptap"), {ssr: false});

export default function TemporaryPage() {

  const [content, setContent] = useState('');

  return (
    <div>
      <Tiptap setContents={setContent}/>
    </div>
  );
}