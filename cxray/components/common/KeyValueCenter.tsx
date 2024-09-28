export default function KeyValueCenter({name, value}: {name: any, value: any}) {
  return (
    <div className="kv-wrap">
      <div className="kv-key-wrap"><div className="kv-key">{name}</div></div>
      <div className="kv-value expand">{value}</div>
      <style jsx>{`      
      .kv-wrap {
        width: 100%;
        color: #BBB;
        display: flex;
        height: auto;
        margin-bottom: 3px;
      }
      .kv-key-wrap {
        flex: 1;
        padding-top: 4px;
        padding-bottom: 4px;
        height: 25px;
        padding-left: 30px;
      }
      .kv-key {
        width: 100%;
        height: 16px;
        color: #888;
        border-right: 1px solid #666;
        text-overflow: ellipsis; 
        white-space: nowrap; 
        overflow: hidden;
      }
      .kv-value {
        padding-left: 10px;
        padding-right: 5px;
        flex: 1;
        color: #BBB;
        padding-top: 4px;
        padding-left: 15px;
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