import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import root from 'react-shadow'
import Image from "@tiptap/extension-image";
import { useRef, useCallback, useState, useEffect } from "react";
import { ChangeEvent } from "react";

function Menubar() {
  const { editor } = useCurrentEditor();
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const dragRef = useRef<HTMLLabelElement | null>(null);

  if (!editor) {
    return null;
  }

  async function uploadImage() {
   
  }

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer!.files) {
      setDragging(true);
    }
  }, []);

  const onChangeFiles = useCallback((e: ChangeEvent<HTMLInputElement> | DragEvent): void => {
    if (e instanceof DragEvent) {
      if(e.dataTransfer != null) {
        const files = e.dataTransfer.files;
        for(let i = 0; i < files.length; i++) {
          const dragged = files[i];
          setFile(dragged);
        }
      }
    } else {
      const files = e.target.files;
      if(files != null) {
        for(let i = 0; i < files.length; i++) {
          const dragged = files[i];
          setFile(dragged);
        }
      }
    }
  }, [file]);

  const handleDrop = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    onChangeFiles(e);
    setDragging(false);
  }, [onChangeFiles]);

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div className={`control-group`}>
      {loading ? <div className="curtain"/> : <></>}
      <div className="button-group">
        <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()} 
          className={editor.isActive('bold') ? 'is-active' : ''}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()} 
          className={editor.isActive('italic') ? 'is-active' : ''}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editor.can().chain().focus().toggleStrike().run()} 
          className={editor.isActive('strike') ? 'is-active' : ''}>
          Strike
        </button>
        <button onClick={() => editor.chain().focus().toggleCode().run()} disabled={!editor.can().chain().focus().toggleCode().run()} 
          className={editor.isActive('code') ? 'is-active' : ''}>
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </button>
        <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
          Paragraph
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
          H3
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
          H4
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
          H5
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
          H6
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}className={editor.isActive('bulletList') ? 'is-active' : ''}>
          Bullet list
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>
          Ordered list
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
          Code block
        </button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()}>
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()}>
          Redo
        </button>
        <button onClick={() => editor.chain().focus().setColor('#958DF1').run()} className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
          Purple
        </button>
      </div>
      <div className="file-group">
        <div/>
        <div className={`drag-drop-wrap ${dragging ? 'dragging' : ''}`}>
          <label className="drag-drop-label" htmlFor="fileUpload" ref={dragRef}>
            <span>{file != null ? file.name : 'drop file here'}</span>
          </label>
        </div>
        <button onClick={() => {setLoading(true); uploadImage();}} disabled={file == null}>upload</button>
        <div/>
      </div>
      <style>{`
        button {
          border: none;
          background: none;
          border-radius: 5px;
          padding: 5px;
          transition: all 0.5s ease-out;
        }
        button:hover:not(:disabled) {
          background: rgba(0,0,0,0.15);
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          padding: 3px 5px;
          gap: 3px;
          border-bottom: 1px solid #CCC;
        }
        .button-group > button {
          flex: 1;
          font-size: 11px;
        }
        
        .file-group {
          display: grid;
          grid-template-columns: 100px 1fr 80px 100px;
          padding: 5px;
          grid-gap: 5px;
          border-bottom: 1px solid #CCC;
        }
        .drag-drop-wrap.dragging {
          border: 1px solid #777;
        }
        .drag-drop-wrap {
          border: 1px solid #CCC;
          transition: all 0.2s ease-out;
        }
        .drag-drop-label {
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .curtain {
          left: 0;
          top: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  Image,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, 
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, 
    },
  }),
]

export default function Tiptap({setContents}: {setContents: Function}) {
  return (
    <root.div>
      <EditorProvider slotBefore={<Menubar/>} extensions={extensions} onUpdate={({editor}: any) => setContents(editor.getHTML())} content='<p></p>'/>
      <style>{`
        .tiptap {
          outline: none !important;
          border: none !important;
          height: 500px;
          overflow-y: auto;
          padding: 0px 10px;
        }
        
      `}</style>
    </root.div>
  )
}