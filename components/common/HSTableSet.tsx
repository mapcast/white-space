import { useEffect, useState } from "react";
import HSSearchPanel from "./HSSearchPanel";
import HSTable from "./HSTable";
import HSPagination from "./HSPagination";

const dataset = [
  {
    id: 0,
    createdTimeAt: '2024-10-03 00:00:00',
    fieldA: 'Lorem ipsum dolor sit amet',
    fieldB: 'consectetur adipiscing elit'
  },
  {
    id: 1,
    createdTimeAt: '2024-10-03 00:01:00',
    fieldA: 'sed do eiusmod',
    fieldB: 'et dolore magna aliqua'
  },
  {
    id: 2,
    createdTimeAt: '2024-10-03 00:02:00',
    fieldA: 'tempor incididunt ut labore',
    fieldB: 'Ut enim ad minim veniam'
  },
  {
    id: 3,
    createdTimeAt: '2024-10-03 00:03:00',
    fieldA: 'quis nostrud exercitation ullamco',
    fieldB: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

export default function HSTableSet({headers, getDatasApi, additionalCondition}: 
  {headers: HSTableHeader[]
    getDatasApi: (params: Map<String, String>) => Promise<any | null>, 
    additionalCondition?: Map<String, String>}) {
  const [searchKey, setSearchKey] = useState<HSItem|null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<HSKeyValue[]>([]);
  const [list, setList] = useState<Object[]>([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(99);
  const [multipleSearch, setMultipleSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<HSTableSort>({
    target: null,
    //true: descending
    direction: true
  });
  const [sortDisplay, setSortDisplay] = useState('');

  function handleSort(target: HSTableColumn) {
    if(sort.target === target) {
      if(sort.direction) {
        setSort({...sort, direction: false});
      } else {
        setSort({target: null, direction: true});
      } 
    } else {
      setSort({direction: true, target});
    }
  }

  async function getDatas(multiple?: boolean) {
    const params: Map<String, String> = new Map();
    params.set('page', page.toString());
    params.set('size', '10');
    //추가조건 받는식으로 작성
    //if(imageId) params.set('imageId', imageId);
    if(additionalCondition) {
      const keys = additionalCondition.keys();
      let next = keys.next();
      if(!next.done) {
        const val = additionalCondition.get(next.value);
        if(val) params.set(next.value, val);
      }
    }

    if(sort.target != null) {
      params.set('sort', `${sort.target.join ? `${sort.target.join}.${sort.target.raw}` : sort.target.raw},${sort.direction ? 'DESC' : 'ASC'}`)
    }
    
    if(multiple) {
      if(multiple === true) {
        setMultipleSearch(true);
        searchConditions.forEach((condition: HSKeyValue) => params.set(condition.key, condition.value));
      } else {
        setMultipleSearch(false);
        if(searchKey != null && searchValue !== '') {
          params.set(searchKey.raw, searchValue);
        }
      }
    } else {
      if(multipleSearch === true) {
        searchConditions.forEach((condition: HSKeyValue) => params.set(condition.key, condition.value));
      } else {
        if(searchKey != null && searchValue !== '') {
          params.set(searchKey.raw, searchValue);
        }
      }
    }

    const response = await getDatasApi(params);
    if(response != null) {
      setList(response.page.content);
      setMaxPage(response.page.totalPages);
      setLoading(false);
    } else {
      //alert("검사 데이터를 불러오는 중 에러가 발생했습니다.");
    }  
  }

  useEffect(() => {getDatas()}, [sort]);

  return (
    <div>
      <div>
        <HSSearchPanel 
        items={headers.filter((header: HSTableHeader) => header.search)
          .map((header: HSTableHeader) => {return {id: header.id, display: header.display, raw: header.raw}})}
        executeSearch={() => {
          setList(dataset);
        }}
        searchKey={searchKey}
        updateSearchKey={setSearchKey}
        searchValue={searchValue}
        updateSearchValue={setSearchValue}
        searchConditions={searchConditions}
        updateSearchConditions={setSearchConditions}
        multiple/>
      </div>
      <div>
        {/*
        <table>
          <thead>
            <tr>
              {headers.map((header: HSTableHeader) => <td key={header.id}>{header.display ? header.display : header.raw}</td>)}
            </tr>
          </thead>
          <tbody>
            {list.map((data: any) => 
              <tr key={data.uuid} style={handleClickRow ? {cursor: "pointer"} : {}} onClick={() => handleClickRow ? handleClickRow(data) : {}}>
                {headers.map((header: HSTableHeader, tdIndex: number) => 
                <td key={tdIndex}>
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
          </tbody>
        </table>*/}
        <HSTable
        headers={headers}
        list={list}
        handleSort={(sort: HSSort) => setSortDisplay(JSON.stringify(sort))}
        handleClickData={(target: HSTableHeader, value: string) => {
          setSearchKey(target);
          setSearchValue(value);
        }}
        width={[200,'auto','auto']}/>
      </div>
      <HSPagination 
      page={page}
      maxPage={maxPage}
      setPage={setPage}
      search={() => {}}/>
      <div>
        <span>{`sort: ${sortDisplay}`}</span>
      </div>
    </div>
  )
}