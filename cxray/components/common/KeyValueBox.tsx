export default function KeyValueBox({name, value}: {name: any, value: any}) {
  return (
    <div className="kv-wrap">
      <div className="kv-key-wrap"><div className="kv-key element-to-center">{name}</div></div>
      <div className="kv-value expand element-to-center">{value}</div>
      <style jsx>{`      
      .kv-wrap {
        width: 100%;
        color: #EEE;
        display: flex;
        height: auto;
        margin-bottom: 3px;
      }
      .kv-key-wrap {
        flex: 1;
        padding-top: 4px;
        padding-bottom: 4px;
        height: 25px;
      }
      .kv-key {
        width: 100%;
        height: 16px;
        border-right: 1px solid #BBB;
        text-overflow: ellipsis; 
        white-space: nowrap; 
        overflow: hidden;
      }
      .kv-value {
        flex: 1;
        text-overflow: ellipsis; 
        white-space: nowrap; 
        overflow: hidden;
      }
      .kv-value:has(input) {
        padding-top: 0 !important;
      }
      .kv-value:has(select) {
        padding-top: 0 !important;
      }
      .kv-value:has(.xitm-select) {
        padding-top: 0 !important;
      }
      .kv-value > input[type=text] {
        width: 80%;
        padding: 0 5px;
        height: 100%;
      }
      .kv-value > input[type=number] {
        width: 80%;
        padding: 0 5px;
        height: 100%;
      }
      .kv-value > select {
        width: 80%;
        padding: 0 5px;
        height: 100%;
      }
      `}</style>
    </div>
  )
}