
import { getImageFileDatasApi } from "@/services/image";
import CxrayTableWithModal from "../common/table/CxrayTableWithModal";
import { getMyImageFileDatasApi } from "@/services/my";

export default function AV({imageId}: {imageId?: string}) {
  const additional: Map<String, String> = new Map();
  if(imageId) additional.set('imageId', imageId);
  return (
    <>
      <CxrayTableWithModal
      getDatasApi={imageId ? getImageFileDatasApi : getMyImageFileDatasApi}
      headers={imageId ? [
        {display: '파일 이름', raw: 'fileName', type: 'string', width: 250},
        {display: '파일 경로', raw: 'directory', type: 'string'},
        {display: 'Antivirus', raw: 'avResults', type: 'detection', width: 150},
      ] : [
        {display: '분석 일시', raw: 'createdTimeAt', type: 'time', width: 150, join: 'image'},
        {display: '이미지 이름', raw: 'imageName', type: 'string', width: 150, join: 'image'},
        {display: 'Tag', raw: 'tag', type: 'string', width: 150, join: 'image'},
        {display: '파일 이름', raw: 'fileName', type: 'string', width: 250},
        {display: '파일 경로', raw: 'directory', type: 'string'},
        {display: 'Antivirus', raw: 'avResults', type: 'detection', width: 150},
      ]}
      searchItems={
        imageId ?
        [
          {display: '파일 이름', value: 'fileName', category: 'text'},
          {display: '파일 경로', value: 'directory', category: 'text'},
          {display: 'Detection', value: 'isMalcious', category: 'select', selectItems: [
            {display: 'Detected', value: 'true'},
            {display: 'Undetected', value: 'false'}
          ]},
        ]
        :
        [
          {display: '이미지 이름', value: 'imageName', category: 'text'},
          {display: 'Tag', value: 'tag', category: 'text'},
          {display: '파일 이름', value: 'fileName', category: 'text'},
          {display: '파일 경로', value: 'directory', category: 'text'},
          {display: 'Detection', value: 'isMalcious', category: 'select', selectItems: [
            {display: 'Detected', value: 'true'},
            {display: 'Undetected', value: 'false'}
          ]},
        ]
      }
      additionalCondition={additional}
      modal={'av'}
      />
    </>
  )

  /*
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //다중조건 검색 파라미터
  const [searchKey, setSearchKey] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<KeyValueWithDisplay[]>([]);
  const [list, setList] = useState<FileResult[]>([]);
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

  async function getAntivirusDatas(multiple: boolean) {
    const params: Map<String, String> = new Map();
    params.set('page', page.toString());
    params.set('size', '10');
    params.set('isDeleted', 'false');
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
    
    const response = imageId ? await getImageFileDatasApi(params) : await getMyImageFileDatasApi(params);
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

  useEffect(() => {getAntivirusDatas(false);}, []);
  return (
    <>
      <BasicSearchBox
      items={
        imageId ?
        [
          {display: '파일 이름', value: 'fileName', category: 'text'},
          {display: '파일 경로', value: 'directory', category: 'text'},
          {display: 'Detection', value: 'isMalcious', category: 'select', selectItems: [
            {display: 'Detected', value: 'true'},
            {display: 'Undetected', value: 'false'}
          ]},
        ]
        :
        [
          {display: '이미지 이름', value: 'imageName', category: 'text'},
          {display: 'Tag', value: 'tag', category: 'text'},
          {display: '파일 이름', value: 'fileName', category: 'text'},
          {display: '파일 경로', value: 'directory', category: 'text'},
          {display: 'Detection', value: 'isMalcious', category: 'select', selectItems: [
            {display: 'Detected', value: 'true'},
            {display: 'Undetected', value: 'false'}
          ]},
        ]
      }
      searchKey={searchKey}
      updateSearchKey={updateSearchKey}
      searchValue={searchValue}
      updateSearchValue={updateSearchValue}
      searchConditions={searchConditions}
      setSearchConditions={setSearchConditions}
      executeSearch={(multi: boolean) => {getAntivirusDatas(multi); setPage(0);}}
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
              <th style={{width: '250px'}}>파일 이름</th>
              <th>파일 경로</th>
              <th style={{width: '150px'}}>Antivirus</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data: FileResult, index: number) => 
            <tr onClick={() => setSelectedIndex(index)} key={data.uuid}>
              {!imageId ? 
              <>
                <td style={{width: '150px'}}>{data.inspectTime?.replace("T", " ").substring(0,19)}</td>
                <td style={{width: '150px'}}>{data.imageName}</td>
                <td style={{width: '150px'}}>{data.tag}</td>
              </> : <></>}
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.fileName}</td>
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}>{data.directory}</td>
              <td style={{color: selectedIndex === index ? 'rgb(112,173,71)' : '#DDD'}}><Detection count={data.avResults.length}/></td>
            </tr>)}
            {list.length === 0 ? <tr><td colSpan={imageId ? 3 : 6}><center>No Information</center></td></tr> : <></>}
          </tbody>
        </table>
        <Pagination page={page} setPage={setPage} maxPage={maxPage} search={() => getAntivirusDatas(multipleSearch)}/>
      </div>}
      <AVModal datas={list} maxLength={numberOfElements - 1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
    </>
  )
  */
}