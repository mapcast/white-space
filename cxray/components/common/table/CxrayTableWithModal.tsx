import BasicSearchBox from "../BasicSearchBox";
import {useState, useEffect} from 'react';
import Pagination from "./Pagniation";
import NowLoading from "@/components/loading/NowLoading";
import CCEModal from "@/components/analyze/CCEModal";
import Severity from "../data/Severity";
import Detection from "../data/Detection";
import AVModal from "@/components/analyze/AVModal";
import CVEModal from "@/components/analyze/CVEModal";
import off from '@/public/assets/icons/cxray/sortoff.png';
import asc from '@/public/assets/icons/cxray/sortasc.png';
import desc from '@/public/assets/icons/cxray/sortdesc.png';


export default function CxrayTableWithModal({searchItems, headers, modal, getDatasApi, additionalCondition}: 
  {searchItems: KeySelectItem[], headers: CommonTableColumn[], modal: string,
    getDatasApi: (params: Map<String, String>) => Promise<PageResult<any> | null>, 
    additionalCondition?: Map<String, String>}) {

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  
  const [searchKey, setSearchKey] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<KeyValueWithDisplay[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [multipleSearch, setMultipleSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const [sort, setSort] = useState<CommonTableSort>({
    target: null,
    descending: true
  });


  function updateSearchKey(val: string) {
    setSearchKey(val);
    setSearchValue('');
  }

  function updateSearchValue(val: string) {
    setSearchValue(val);
  }

  function handleSort(target: CommonTableColumn) {
    if(sort.target === target) {
      if(sort.descending) {
        setSort({...sort, descending: false});
      } else {
        setSort({target: null, descending: true});
      } 
    } else {
      setSort({descending: true, target});
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
      params.set('sort', `${sort.target.join ? `${sort.target.join}.${sort.target.raw}` : sort.target.raw},${sort.descending ? 'DESC' : 'ASC'}`)
    }
    
    if(multiple) {
      if(multiple === true) {
        setMultipleSearch(true);
        searchConditions.forEach((condition: KeyValue) => params.set(condition.key, condition.value));
      } else {
        setMultipleSearch(false);
        if(searchKey !== '' && searchValue !== '') {
          params.set(searchKey, searchValue);
        }
      }
    } else {
      if(multipleSearch === true) {
        searchConditions.forEach((condition: KeyValue) => params.set(condition.key, condition.value));
      } else {
        if(searchKey !== '' && searchValue !== '') {
          params.set(searchKey, searchValue);
        }
      }
    }
   
    
    const response = await getDatasApi(params);
    if(response != null) {
      setList(response.page.content);
      setMaxPage(response.page.totalPages);
      setNumberOfElements(response.page.numberOfElements);
      setSelectedIndex ? setSelectedIndex(-1) : {};
      setLoading(false);
    } else {
      alert("검사 데이터를 불러오는 중 에러가 발생했습니다.");
    }  
  }

  useEffect(() => {getDatas()}, [sort]);

  return (
    <>
      <BasicSearchBox
      items={searchItems}
      searchKey={searchKey}
      updateSearchKey={updateSearchKey}
      searchValue={searchValue}
      updateSearchValue={updateSearchValue}
      searchConditions={searchConditions}
      setSearchConditions={setSearchConditions}
      executeSearch={(multi: boolean) => {getDatas(multi); setPage(0);}}
      />
      <div style={{padding: '0 30px'}}>
        <table className="xitm-table">
          <thead>
            <tr>
              {headers.map((header: CommonTableColumn, index: number) => 
              <th key={header.id ? header.id : index} style={{cursor: 'pointer'}} onClick={() => handleSort(header)}>
                <span>{header.display ? header.display : header.raw}</span>
                {sort.target != null ? sort.target.raw === header.raw ? 
                sort.descending ? <img style={{height: '10px', marginLeft: '5px', marginBottom: '0'}} src={desc.src}/> 
                : <img style={{height: '10px',  marginLeft: '5px', marginBottom: '0'}} src={asc.src}/> 
                : <img style={{height: '10px',  marginLeft: '5px', marginBottom: '0'}} src={off.src}/> 
                : <img style={{height: '10px',  marginLeft: '5px', marginBottom: '0'}} src={off.src}/> }
              </th>)}
            </tr>
          </thead>
          <tbody>
            {loading ? <tr><td colSpan={headers.length}><NowLoading/></td></tr> 
            : 
            <>
              {list.map((data: any, trIndex: number) => 
              <tr key={data.uuid} onClick={() => setSelectedIndex(trIndex)}>
                {headers.map((header: CommonTableColumn, tdIndex: number) => 
                <td key={tdIndex} style={{color: selectedIndex === trIndex ? 'rgb(112,173,71)' : '#DDD'}}>
                  {header.join ? 
                  <>
                    {data[header.join][header.raw] == null ? '-' :
                    !header.type || header.type === 'string' ? data[header.join][header.raw] :
                    header.type === 'boolean' ? data[header.join][header.raw] ? header.bool?.true : header.bool?.false :
                    header.type === 'time' ? data[header.join][header.raw].substring(0,19).replace("T", " ") :
                    header.type === 'severity' ? <Severity severity={data[header.join][header.raw]}/> :
                    header.type === 'detection' ? <Detection count={data[header.join][header.raw]}/> : <></>}
                  </> 
                  :
                  <>
                    {data[header.raw] == null ? '-' :
                    !header.type || header.type === 'string' ? data[header.raw] :
                    header.type === 'boolean' ? data[header.raw] ? header.bool?.true : header.bool?.false :
                    header.type === 'time' ? data[header.raw].substring(0,19).replace("T", " ") :
                    header.type === 'severity' ? <Severity severity={data[header.raw]}/> :
                    header.type === 'detection' ? <Detection count={data[header.raw]}/> : <></>}
                  </>}
                  
                </td>)}
              </tr>)}
              {list.length === 0 ? <tr><td colSpan={headers.length}><center>No Information</center></td></tr> : <></>}
            </>}
          </tbody>
        </table>
        <Pagination page={page} setPage={setPage} maxPage={maxPage} search={() => getDatas()}/>
      </div>
      {modal === 'cce' ? <CCEModal datas={list} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} maxLength={numberOfElements - 1}/> : <></>}
      {modal === 'cve' ? <CVEModal datas={list} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} maxLength={numberOfElements - 1}/> : <></>}
      {modal === 'av' ? <AVModal datas={list} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} maxLength={numberOfElements - 1}/> : <></>}
    </>
  )
}