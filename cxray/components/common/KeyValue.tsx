export default function KeyValue({name, value}: {name: any, value: any}) {
  return (
    <div className="kv-wrap">
      <div className="kv-key-wrap"><div className="kv-key">{name}</div></div>
      <div className="kv-value expand">{value}</div>
      <style jsx>{`
      .kv-wrap {
        width: 100%;
        color: #BBB;
        display: flex;
        font-size: 10px;
        height: auto;
        margin-bottom: 3px;
      }
      .kv-half-wrap {
        width: 100%;
        display: flex;
        height: auto;
        font-size: 10px;
        margin-bottom: 3px;
      }
      .kv-half {
        width: 50%;
        display: flex;
        height: auto;
        overflow: hidden;
      }
      .kv-key-wrap {
        padding-top: 4px;
        padding-bottom: 4px;
        height: 25px;
      }
      .kv-key {
        width: 100px;
        height: 16px;
        color: #888;
        border-right: 1px solid #666;
      }

      .kv-value {
        padding-left: 10px;
        padding-right: 5px;
        flex-grow: 1;
        color: #BBB;
        padding-top: 4px;
        text-overflow: ellipsis; 
        white-space: nowrap; 
        overflow: hidden;
      }
      .kv-value.expand {
        text-overflow: initial; 
        white-space: wrap; 
        overflow: initial;
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