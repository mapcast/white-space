import { EditorProvider, useCurrentEditor, useEditor } from "@tiptap/react";
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit';
import root from 'react-shadow'
import Image from "@tiptap/extension-image";
import { useRef, useCallback, useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { addFileToObjectStorageApi } from "@/services/board";
import SimpleLink from "../common/SimpleLink";
import deleteIcon from '@/public/assets/icons/xitm/del_01.png';
import attachedIcon from '@/public/assets/icons/cxray/board/attached.png';
import Placeholder from "@tiptap/extension-placeholder";

function Menubar() {
  const { editor } = useCurrentEditor();
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!editor) {
    return null;
  }

  async function uploadImage() {
    if(file != null) {
      const response = await addFileToObjectStorageApi(file);
      setLoading(false);
      if(response != null) {
        if(response.code === 200) {
          if(editor && response.data != null) {
            editor.chain().focus().setImage({src: response.data}).run();
            setFile(null);
          }
        } else {
          alert(`에러가 발생했습니다: ${response.message}`);
        }
      } else {
        alert('이미지 업로드 도중 에러가 발생했습니다');
      }
    }
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
  
  function handleFileChange(event: any) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  useEffect(() => console.log(file), [file]);

  useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div className={`control-group`}>
      {loading ? <div className="curtain"/> : <></>}
      <div className="file-group">
        {file != null ? 
        <div style={{padding: '10px 0', display: 'flex', justifyContent: 'center', transition: 'all 0.2s ease-out'}}>
          <span style={{color: '#EEE', fontSize: 14}}>{file.name}</span> 
          <div>
            <SimpleLink onClick={() => {setLoading(true); uploadImage();}} text="upload"/>
          </div>
          <button style={{display: 'flex', justifyContent:'center', alignItems: 'center', cursor: 'pointer', padding: 0}}>
            <img src={deleteIcon.src} style={{width: 12, height: 12}} onClick={() => setFile(null)}/>
          </button>
        </div>
        : 
        <div className={`drag-drop-wrap ${dragging ? 'dragging' : ''}`}>
          <label className="drag-drop-label" htmlFor="fileUpload" ref={dragRef}>
            <img src={attachedIcon.src} style={{width: 16}}/>
            <span style={{color: '#EEE', fontSize: 12}}>drop file here</span>
            <div style={{transform: 'translateY(1px)'}}>
              <SimpleLink onClick={() => fileInputRef.current ? fileInputRef.current.click() : {}} text={"or select file"}/>
            </div>
          </label>
        </div>}
        <div/>
        <input style={{display: 'none'}} type="file" ref={fileInputRef} onChange={handleFileChange}/>
      </div>
      <style>{`
        .upload-button {
          border: none;
          background: none;
          border-radius: 5px;
          padding: 5px;
          transition: all 0.5s ease-out;
        }
        .upload-button:hover:not(:disabled) {
          background: rgba(0,0,0,0.15);
        }
        
        .file-group {
          border-radius: 5px 5px 0 0;
          background: rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(0,0,0,0.1);
          height: 36px;
        }
        .drag-drop-wrap {
          transition: all 0.2s ease-out;
        }
        .drag-drop-label {
          padding: 10px 0;
          height: 100%;
          display: flex;
          gap: 3px;
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
        button {
          background: transparent;
          border: 0;
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
  Placeholder.configure({placeholder: 'Enter the content of a post...'})
]

export default function CustomTiptap({defaultContents, setContents}: {defaultContents: string, setContents: (contents: string) => void}) {
  return (
    <root.div>
      <EditorProvider slotBefore={<Menubar/>} extensions={extensions} onUpdate={({editor}: any) => setContents(editor.getHTML())} content={defaultContents}/>
      <style>{`
        .tiptap {
          outline: none !important;
          border: none !important;
          width: 99%;
          background: transparent;
          overflow-y: auto;
          padding: 0px 10px;
          height: 500px;
          color: #EEE;
        }
        .tiptap > p {
          line-height: 70%;
        }
        
        .tiptap::-webkit-scrollbar-button {
          height: 0;
          width: 0;
        }

        .tiptap::-webkit-scrollbar {
          height: 13px;
          overflow: visible;
          width: 13px;
        }

        .tiptap::-webkit-scrollbar-track {
          background-clip: padding-box;
          border: solid transparent;
          border-width: 0 0 0 4px
        }

        .tiptap::-webkit-scrollbar-track:horizontal {
          border-width: 4px 0 0
        }

        .tiptap::-webkit-scrollbar-track:hover {
          background-color: rgba(255,255,255,.05);
          box-shadow: inset 1px 0 0 rgba(255,255,255,.1)
        }

        .tiptap::-webkit-scrollbar-track:horizontal:hover {
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1)
        }

        .tiptap::-webkit-scrollbar-track:active {
          background-color: rgba(255,255,255,.05);
          box-shadow: inset 1px 0 0 rgba(255,255,255,.14),inset -1px 0 0 rgba(255,255,255,.07)
        }

        .tiptap::-webkit-scrollbar-track:horizontal:active {
          box-shadow: inset 0 1px 0 rgba(255,255,255,.14),inset 0 -1px 0 rgba(255,255,255,.07)
        }

        .tiptap::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,.2);
          background-clip: padding-box;
          border: solid transparent;
          border-width: 1px 1px 1px 6px;
          min-height: 28px;
          padding: 100px 0 0;
          box-shadow: inset 1px 1px 0 rgba(255,255,255,.1),inset 0 -1px 0 rgba(255,255,255,.07)
        }

        .tiptap::-webkit-scrollbar-thumb:horizontal {
          border-width: 6px 1px 1px;
          padding: 0 0 0 100px;
          box-shadow: inset 1px 1px 0 rgba(255,255,255,.1),inset -1px 0 0 rgba(255,255,255,.07)
        }

        .tiptap::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255,255,255,.4);
          box-shadow: inset 1px 1px 1px rgba(255,255,255,.25)
        }

        .tiptap::-webkit-scrollbar-thumb:active {
          background-color: rgba(255,255,255,.05);
          box-shadow: inset 1px 1px 3px rgba(255,255,255,.35)
        }

        .tiptap::-webkit-scrollbar-corner {
          background: transparent
        }
        .tiptap p.is-editor-empty:first-child::before {
          color: #666;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </root.div>
  )
}