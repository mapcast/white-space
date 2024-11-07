'use client';
import HSSelectBox from "./input/HSSelectBox";

import HSInput from "./input/HSInput";
import HSButton from "./input/HSButton";

export default function HSSearchPanel({items, searchKey, updateSearchKey, searchValue, updateSearchValue,
  searchConditions, updateSearchConditions, executeSearch, multiple, dark}: 
  {items: HSItem[], searchKey: HSItem|null, updateSearchKey: (key: HSItem|null) => void, searchValue: string, updateSearchValue: (val: string) => void
    searchConditions: HSKeyValue[], updateSearchConditions: Function, executeSearch: () => void, multiple?: boolean, dark?: boolean}) {
  
  function selectKey(item: HSItem) {
    updateSearchKey(item);
    updateSearchValue('');
  }

  function addSearchConditions() {
    if(searchValue === '' || searchKey == null) {
      alert('검색 조건이 입력되지 않았습니다.');
    } else {
      if(searchKey.category === 'select') {
        updateSearchConditions([...searchConditions, 
          {key: searchKey.value, 
          keyDisplay: searchKey.display, 
          value: searchValue, 
          valueDisplay: searchKey.selectItems ? searchKey.selectItems.filter((item: HSItem) => item.value === searchValue)[0].display : []}]);
      } else {
        updateSearchConditions([...searchConditions, {key: searchKey.value, keyDisplay: searchKey.display, value: searchValue, valueDisplay: searchValue}]);
      }
      updateSearchValue('');
      updateSearchKey(null);
    }
  }

  function resetSearchConditions() {
    updateSearchConditions([]);
    updateSearchKey(null);
    updateSearchValue('');
    executeSearch();
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{padding: '8px 4px'}}>
        <HSSelectBox items={items} selected={searchKey} setSelected={selectKey} dark={dark}/>
      </div>
      
      <div style={{padding: '0 4px'}}>
        {searchKey != null ? 
        <>
          {searchKey.category === 'select' ? 
          <HSSelectBox 
          items={searchKey.selectItems ? searchKey.selectItems : []} 
          selected={searchKey} 
          setSelected={selectKey} 
          dark={dark}/>
          : 
          <HSInput placeholder="value" 
          type="text" 
          value={searchValue} 
          setValue={updateSearchValue} 
          pushEnter={executeSearch}/>}
        </> 
        : 
        searchKey != null ? 
        <HSInput type="text" value={""} setValue={() => {}} disabled/>
        :
        <>
          <HSInput type="text" value={""} setValue={() => {}} disabled/>
        </>}
      </div>
      <div style={{padding: '7px 4px'}}>
        <HSButton text={'Search'} onClick={() => executeSearch()}/>
      </div>
      <div style={{padding: '7px 4px'}}>
        <HSButton text={`Add(${searchConditions.length})`} onClick={() => addSearchConditions()}/>
      </div>
      <div style={{padding: '7px 4px'}}>
        <HSButton text="Refresh" onClick={() => resetSearchConditions()}/>
      </div>
      <style jsx>{`
        button {
          border: none;
          background: transparent;
        }
      `}</style>
    </div>
  );
}