import { getImageCVEDatasApi } from "@/services/image";
import { getMyImageCVEDatasApi } from "@/services/my";
import CxrayTableWithModal from "../common/table/CxrayTableWithModal";


export default function CVE({imageId}: {imageId?: string}) {
  const additional: Map<String, String> = new Map();
  if(imageId) additional.set('imageId', imageId);
  return (
    <>
      <CxrayTableWithModal
      getDatasApi={imageId ? getImageCVEDatasApi : getMyImageCVEDatasApi}
      headers={imageId ? [
        {display: 'CVE Code', raw: 'cveCode', type: 'string'},
        {display: 'Vendor', raw: 'vendor', type: 'string'},
        {display: 'Product', raw: 'product', type: 'string'},
        {display: 'Version', raw: 'version', type: 'string'},
      ] : [
        {display: '분석 일시', raw: 'createdTimeAt', type: 'time', width: 150, join: 'image'},
        {display: '이미지 이름', raw: 'imageName', type: 'string', width: 150, join: 'image'},
        {display: 'Tag', raw: 'tag', type: 'string', width: 150, join: 'image'},
        {display: 'CVE Code', raw: 'cveCode', type: 'string'},
        {display: 'Vendor', raw: 'vendor', type: 'string'},
        {display: 'Product', raw: 'product', type: 'string'},
        {display: 'Version', raw: 'version', type: 'string'},
      ]}
      searchItems={
        imageId ? 
        [
          {display: 'CVE Code', value: 'cveCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: 'Vendor', value: 'vendor', category: 'text'},
          {display: 'Product', value: 'product', category: 'text'},
          {display: 'Version', value: 'version', category: 'text'},
        ]
        : 
        [
          {display: '이미지 이름', value: 'imageName', category: 'text'},
          {display: 'Tag', value: 'tag', category: 'text'},
          {display: 'CVE Code', value: 'cveCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: 'Vendor', value: 'vendor', category: 'text'},
          {display: 'Product', value: 'product', category: 'text'},
          {display: 'Version', value: 'version', category: 'text'},
        ]
      }
      additionalCondition={additional}
      modal={'cve'}
      />
    </>
  )
  /*
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //다중조건 검색 파라미터
  const [searchKey, setSearchKey] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<KeyValueWithDisplay[]>([]);

  const [list, setList] = useState<CVEResult[]>([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [multipleSearch, setMultipleSearch] = useState(false);

  const [loading, setLoading] = useState(true);

  function updateSearchKey(val: string) {
    setSearchKey(val);
    setSearchValue('');
  }

  function updateSearchValue(val: string) {
    setSearchValue(val);
  }

  async function getCVEDatas(multiple: boolean) {
    const params: Map<String, String> = new Map();
    params.set('page', page.toString());
    params.set('size', '10');
    if(imageId) params.set('imageId', imageId);
    
    if(multiple) {
      setMultipleSearch(true);
      searchConditions.forEach((condition: KeyValue) => params.set(condition.key, condition.value));
    } else {
      setMultipleSearch(false);
      if(searchKey !== '' && searchValue !== '') {
        params.set(searchKey, searchValue);
      }
    }
    
    const response = imageId ? await getImageCVEDatasApi(params) : await getMyImageCVEDatasApi(params);
    if(response != null) {
      setList(response.page.content);
      setMaxPage(response.page.totalPages);
      setNumberOfElements(response.page.numberOfElements);
      setSelectedIndex(-1);
      setLoading(false);
    } else {
      alert("검사 데이터를 불러오는 중 에러가 발생했습니다.");
    }  
  }

  useEffect(() => {getCVEDatas(false);}, []);

  return (
    <>
      <BasicSearchBox
      items={
        imageId ? 
        [
          {display: 'CVE Code', value: 'cveCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: 'Vendor', value: 'vendor', category: 'text'},
          {display: 'Product', value: 'product', category: 'text'},
          {display: 'Version', value: 'version', category: 'text'},
        ]
        : 
        [
          {display: '이미지 이름', value: 'imageName', category: 'text'},
          {display: 'Tag', value: 'tag', category: 'text'},
          {display: 'CVE Code', value: 'cveCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: 'Vendor', value: 'vendor', category: 'text'},
          {display: 'Product', value: 'product', category: 'text'},
          {display: 'Version', value: 'version', category: 'text'},
        ]
      }
      searchKey={searchKey}
      updateSearchKey={updateSearchKey}
      searchValue={searchValue}
      updateSearchValue={updateSearchValue}
      searchConditions={searchConditions}
      setSearchConditions={setSearchConditions}
      executeSearch={(multi: boolean) => {getCVEDatas(multi); setPage(0);}}
      />
      {loading ? <NowLoading/> :
      
      <div style={{padding: '0 30px'}}>
        <table className="xitm-table">
          <thead>
            <tr>
              {!imageId ? 
              <>
                <th style={{width: '150px'}}>분석 일시</th>
                <th style={{width: '150px'}}>이미지 이름</th>
                <th style={{width: '150px'}}>Tag</th>
              </> : <></>}
              <th style={{width: '150px'}}>CVE Code</th>
              <th>Vendor</th>
              <th>Product</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data: CVEResult, index: number) => 
            <tr onClick={() => setSelectedIndex(index)} key={data.uuid}>
              {!imageId ? 
              <>
                <td style={{width: '150px'}}>{data.inspectTime?.replace("T", " ").substring(0,19)}</td>
                <td style={{width: '150px'}}>{data.imageName}</td>
                <td style={{width: '150px'}}>{data.tag}</td>
              </> : <></>}
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.cveCode}</td>
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.vendor}</td>
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.product}</td>
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.version}</td>
            </tr>)}
            {list.length === 0 ? <tr><td colSpan={imageId ? 4 : 7}><center>No Information</center></td></tr> : <></>}
          </tbody>
        </table>
        <Pagination page={page} setPage={setPage} maxPage={maxPage} search={() => getCVEDatas(multipleSearch)}/>
      </div>}
      <CVEModal datas={list} maxLength={numberOfElements - 1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
    </>
  )
  */
}