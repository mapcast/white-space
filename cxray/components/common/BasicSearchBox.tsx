import { useState } from 'react';

import plusIcon from '@/public/assets/icons/cxray/close_01.png';
import reloadIcon from '@/public/assets/icons/xitm/reload_01.png';
import XitmSelectBox from "@/components/common/input/XitmSelectBox";

import XitmKeyValueBox from "@/components/common/input/XitmKeyValueBox";
import XitmFilteringSelectBox from "./input/XitmFilteringSelectBox";

export default function BasicSearchBox({items, searchKey, updateSearchKey, searchValue, updateSearchValue,
  searchConditions, setSearchConditions, executeSearch}: 
  {items: KeySelectItem[], searchKey: string, updateSearchKey: Function, searchValue: string, updateSearchValue: Function
    searchConditions: KeyValueWithDisplay[], setSearchConditions: Function, executeSearch: Function}) {

  const [selectedKey, setSelectedKey] = useState<KeySelectItem | null>(null);

  function selectKey(val: string) {
    setSelectedKey(items.filter((item: KeySelectItem) => item.value === val)[0]);
    updateSearchKey(val);
    updateSearchValue('');
  }

  function enterCheck(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      executeSearch(false);
    }
  }

  function addSearchConditions() {
    if(searchKey === '' || searchValue === '' || selectedKey == null) {
      alert('검색 조건이 입력되지 않았습니다.');
    } else {
      if(selectedKey.category === 'select') {
        setSearchConditions([...searchConditions, 
          {key: selectedKey.value, 
          keyDisplay: selectedKey.display, 
          value: searchValue, 
          valueDisplay: selectedKey. selectItems ? selectedKey.selectItems.filter((item: SelectItem) => item.value === searchValue)[0].display : []}]);
      } else {
        setSearchConditions([...searchConditions, {key: selectedKey.value, keyDisplay: selectedKey.display, value: searchValue, valueDisplay: searchValue}]);
      }
      updateSearchKey('');
      updateSearchValue('');
      setSelectedKey(null);
    }
  }

  function removeSearchConditions(key: string) {
    setSearchConditions(searchConditions.filter((condition: KeyValue) => condition.key !== key));
  }

  function resetSearchConditions() {
    setSearchConditions([]);
    updateSearchKey('');
    updateSearchValue('');
    executeSearch(false);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'right', padding: '10px 0'}}>
      <div style={{padding: '4px'}}>
        <XitmFilteringSelectBox
        value={searchKey}
        setValue={(val: string) => selectKey(val)}
        items={items}
        filteredItems={items.filter((item: KeySelectItem) => !searchConditions.map((condition: KeyValueWithDisplay) => condition.key).includes(item.value))}
        width={112}
        height={26}
        warning={false}/>
      </div>
      
      <div style={{padding: '4px'}}>
        {selectedKey != null ? 
        <>
          {selectedKey.category === 'select' ? 
          <XitmSelectBox
          value={searchValue}
          setValue={(val: string) => updateSearchValue(val)}
          items={selectedKey.selectItems ? selectedKey.selectItems : []}
          width={150}
          height={26}
          warning={false}/>
          : 
          <input type="text" style={{width: '150px', height: '100%'}} className="xitm-input" value={searchValue} onKeyDown={enterCheck} onChange={(e: any) => updateSearchValue(e.target.value)}/>}
        </> 
        : 
        searchKey != null ? 
        <input type="text" style={{width: '150px', height: '100%'}} className="xitm-input" value={searchValue} onKeyDown={enterCheck} onChange={(e: any) => updateSearchValue(e.target.value)}/>
        :
        <>
          <input type="text" style={{width: '150px', height: '100%'}} className="xitm-input" value={searchValue} onChange={() => {}} disabled/>
        </>}
      </div>
      <div style={{padding: '7px 4px'}}>
        <button onClick={() => executeSearch(false)} className="blue-button" disabled={searchConditions.length > 0}>Search</button>
      </div>
      <div className="element-to-center" style={{width: '14px'}}>
        <button onClick={() => addSearchConditions()}>
          <img src={plusIcon.src} style={{transform: 'rotate(45deg)', width: '14px'}}/>
        </button>
      </div>
      <div style={{gridColumn: 'span 2', padding: '4px', marginLeft: '10px'}}>
        <XitmKeyValueBox
        keyValues={searchConditions}
        removeKeyValue={(val: string) => removeSearchConditions(val)}
        width={200}
        height={26}/>
      </div>
      <div style={{padding: '7px 4px'}}>
        <button onClick={() => executeSearch(true)} className="blue-button" disabled={searchConditions.length === 0}>Search</button>
      </div>
      <div className="element-to-center" style={{width: '14px'}}>
        <button onClick={() => resetSearchConditions()}>
          <img src={reloadIcon.src} style={{width: '14px'}}/>
        </button>
      </div>
    </div>
  )
}