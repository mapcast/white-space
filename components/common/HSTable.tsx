import { useState } from "react"
import SmallArrow from "./item/SmallArrow";

export default function HSTable({headers, list, width, handleSort, handleClickData}: 
  {headers:HSTableHeader[], list: Object[], 
    width?: Array<string|number>,
    handleSort?: (sort: HSSort) => void, handleClickData?: (header: HSTableHeader, data: string) => void}) {
  const [sorted, setSorted] = useState<HSTableHeader|null>(null);
  const [direction, setDirection] = useState(true);

  function sort(header: HSTableHeader) {
    if(handleSort) {
      setSorted(header);
      if(sorted) {
        let target = header.raw;
        if(target === sorted.raw) {
          if(direction) {
            handleSort({target, direction: false});
            setDirection(false);
          } else {
            handleSort({target: '', direction: true});
            setSorted(null);
            setDirection(true);
          }
        } else {
          handleSort({target, direction: true});
          setDirection(true);
          setSorted(header);
        }
      } else {
        handleSort({target: header.raw, direction: true});
      }
    }
    
  }

  return (
    <table>
      <thead>
        <tr style={{
          background: 'rgba(0,0,0,0.5)',
        }}>
          {headers.map((header: HSTableHeader, index: number) => 
          <th
          key={header.id ? header.id : index} 
          style={{
            width: width ? width[index] : 'auto',
            cursor: handleSort ? 'pointer' : 'default'
          }}
          onClick={() => handleSort ? sort(header) : {}}>
            <div style={{display: 'flex'}}>
              <div style={{padding: '2px 0'}}>
                <span>{header.display ? header.display : header.raw}</span>
              </div>
              <div style={{width: 20, height: 20}}>{sorted ? 
              sorted.raw === header.raw ? 
              <SmallArrow dark rotate={direction ? 180: 0}/> 
              : <></> : <></>}</div>
            </div>
          </th>)}
        </tr>
      </thead>
      <tbody>
        {list.map((data: any, listIndex: number) => 
          <tr key={data.id ? data.id : listIndex} style={{
            background: listIndex % 2 == 0 ? 'rgba(0,0,0,0.02)' : 'rgba(0,0,0,0.15)'
          }}>
            {headers.map((header: HSTableHeader, tdIndex: number) => 
            <td key={tdIndex} 
            style={{cursor: handleClickData && header.search ? 'pointer' : 'default'}}
            onClick={() => handleClickData && header.search ? handleClickData(header, header.join ? data[header.join][header.raw] : data[header.raw]) : {}}>
              {header.join ? 
              <>
                {data[header.join][header.raw] == null ? '-' :
                !header.type || header.type === 'string' ? data[header.join][header.raw] :
                header.type === 'boolean' ? data[header.join][header.raw] ? header.bool?.true : header.bool?.false :
                header.type === 'time' ? data[header.join][header.raw].substring(0,19).replace("T", " ") : <></>}
              </> 
              :
              <>
                {data[header.raw] == null ? '-' :
                !header.type || header.type === 'string' ? data[header.raw] :
                header.type === 'boolean' ? data[header.raw] ? header.bool?.true : header.bool?.false :
                header.type === 'time' ? data[header.raw].substring(0,19).replace("T", " ") : <></>}
              </>}
            </td>)}
          </tr>)}
          {list.length === 0 ? <tr><td colSpan={headers.length} style={{padding: 10}}><center>No Information.</center></td></tr> : <></>}
      </tbody>
      <style jsx>{`
        table {
          border-spacing: 0px;
          border-style: none;
          padding: 0px;
          width: 100%;
          table-layout: fixed;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          border: 1px groove rgba(0,0,0,0.1);
        }
        
        th {
          border-spacing: 0px;
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          padding: 8px 10px;
          fontWeight: 800;
          color: #FFF;
          border-bottom: 5px solid rgba(0,0,0,0.2);
          text-align: left;
          font-size: 16px;
        }
        td {
          border-spacing: 0px;
          border-style: none;
          text-overflow:ellipsis; 
          overflow:hidden; 
          white-space:nowrap;
          padding: 5px 10px;
        }
      `}</style>
    </table>
  )
}