import { useEffect, useState } from "react";
import HSSearchPanel from "./HSSearchPanel";
import HSTable from "./HSTable";
import ColorSwitch from "./item/ColorSwitch";
import HSPagination from "./HSPagination";
import HSSelectBox from "./input/HSSelectBox";

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
    getDatasApi: (params: Map<string, string>) => Promise<any | null>, 
    additionalCondition?: Map<string, string>}) {

  const [searchKey, setSearchKey] = useState<HSItem|null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<HSKeyValue[]>([]);
  const [list, setList] = useState<Object[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(99);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<HSTableSort>({
    target: null,
    //true: descending
    direction: true
  });
  const [sortDisplay, setSortDisplay] = useState('');
  const [pageSize, setPageSize] = useState<HSItem>({raw: '10'});

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

  async function getDatas() {
    const params: Map<string, string> = new Map();
    params.set('page', page.toString());
    params.set('size', pageSize.raw);

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

    if(searchConditions.length > 0) {
      searchConditions.forEach((condition: HSKeyValue) => params.set(condition.key, condition.value));
    }
    if(searchKey != null && searchValue !== '') {
      params.set(searchKey.raw, searchValue);
    }
    console.log(searchConditions);
    
    const response = await getDatasApi(params);
    if(response != null) {
      setList(response.data.contents);
      setMaxPage(response.data.totalPages);
      setLoading(false);
    } else {
      alert("테이블 데이터를 불러오는 중 에러가 발생했습니다.");
    }  
  }

  useEffect(() => {setLoading(true);getDatas();}, [sort, pageSize]);

  return (
    <div>
      <ColorSwitch/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <HSSelectBox
        items={[{raw: '10'},{raw: '20'},{raw: '30'},{raw: '40'},{raw: '30'}]} 
        selected={pageSize} 
        setSelected={setPageSize}/>
        <HSSearchPanel 
        items={headers.filter((header: HSTableHeader) => header.search)
          .map((header: HSTableHeader) => {return {id: header.id, display: header.display, raw: header.raw}})}
        executeSearch={() => getDatas()}
        searchKey={searchKey}
        updateSearchKey={setSearchKey}
        searchValue={searchValue}
        updateSearchValue={setSearchValue}
        searchConditions={searchConditions}
        updateSearchConditions={setSearchConditions}
        multiple/>
      </div>
      <div>
        <HSTable
        headers={headers}
        list={list}
        handleSort={(sort: HSSort) => setSortDisplay(JSON.stringify(sort))}
        handleClickData={(target: HSTableHeader, value: string) => {
          setSearchKey(target);
          setSearchValue(value);
        }}
        width={[200,'auto','auto']}
        loading={false}/>
      </div>
      <div style={{display: 'flex', alignItems: 'center', paddingLeft: 20}}>
        <HSPagination 
        page={page}
        maxPage={maxPage}
        setPage={setPage}
        search={() => getDatas()}/>
      </div>
      {/* 
      <div>
        <span>{`sort: ${sortDisplay}`}</span>
      </div>
      */}
    </div>
  )
}