import HSSearchPanel from "./HSSearchPanel";

export default function HSTable({headers, values}: {headers: TableHeader[], values: TableValues[]}) {
  
  return (
    <div>
      <div>
        <HSSearchPanel 
        items={headers.filter((header: TableHeader) => header.search)
          .map((header: TableHeader) => {return {id: header.id, display: header.display, raw: header.raw}})}
        search={(key: string, value: string) => {
          console.log(`${key}: ${value}`);
        }}
        useMultiple/>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {headers.map((header: TableHeader) => <td key={header.id}>{header.display ? header.display : header.raw}</td>)}
            </tr>
          </thead>
          <tbody>
            {values.map((header: TableValues) => 
            <tr key={header.id}>
              {header.values.map((value: HSItem) => 
              <td key={value.id}>{value.display ? value.display : value.raw}</td>)}
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}