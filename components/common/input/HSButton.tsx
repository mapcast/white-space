import root from 'react-shadow';
export default function HSButton({text, onClick, dark}: 
  {text: string|JSX.Element,
  onClick: () => void,  
  dark?: boolean}) {

  return (
    <root.div>
      <button onClick={onClick}>
        {text}
      </button>
      <style>{`
        button {
          font-family: inherit;
          position: relative;
          background: transparent;
          border-radius: 5px;
          padding: 4px 16px;
          cursor: pointer;
          border: 1px groove rgba(0,0,0,0.2);
          transition: all 0.5s ease;
          outline: none;
        }

        button:after {
          content: '»';
          position: absolute;
          opacity: 0;  
          transition: 0.5s;
          right: 10px;
        }

        button:hover{
          padding-right: 20px;
          padding-left: 12px;
          border: 1px groove rgba(0,0,0,0.5);
        }

        button:hover:after {
          opacity: 1;
          
        }
      `}</style>
    </root.div>
    
  )
}