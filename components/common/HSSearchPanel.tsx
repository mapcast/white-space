'use client';
import { useState } from "react";
import HSSelectBox from "./HSSelectBox";

import { Roboto } from "next/font/google";
const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function HSSearchPanel({items, searchKey, updateSearchKey, searchValue, updateSearchValue,
  searchConditions, updateSearchConditions, executeSearch, multiple, dark}: 
  {items: HSItem[], searchKey: HSItem|null, updateSearchKey: Function, searchValue: string, updateSearchValue: Function
    searchConditions: HSKeyValue[], updateSearchConditions: Function, executeSearch: (multi: boolean) => void, multiple?: boolean, dark?: boolean}) {
  
  function selectKey(item: HSItem) {
    updateSearchKey(item);
    updateSearchValue('');
  }

  function enterCheck(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      executeSearch(false);
    }
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

  function removeSearchConditions(key: string) {
    updateSearchConditions(searchConditions.filter((condition: HSKeyValue) => condition.key !== key));
  }

  function resetSearchConditions() {
    updateSearchConditions([]);
    updateSearchKey(null);
    updateSearchValue('');
    executeSearch(false);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'right', padding: '10px 0'}}>
      <div style={{padding: '4px'}}>
        <HSSelectBox items={items} selected={searchKey} setSelected={selectKey} dark={dark}/>
      </div>
      
      <div style={{padding: '4px'}}>
        {searchKey != null ? 
        <>
          {searchKey.category === 'select' ? 
          <HSSelectBox 
          items={searchKey.selectItems ? searchKey.selectItems : []} 
          selected={searchKey} 
          setSelected={selectKey} 
          dark={dark}/>
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
          add
        </button>
      </div>
      <div style={{gridColumn: 'span 2', padding: '4px', marginLeft: '10px'}}>
        {/*
        <XitmKeyValueBox
        keyValues={searchConditions}
        removeKeyValue={(val: string) => removeSearchConditions(val)}
        width={200}
        height={26}/>
        */}
      </div>
      <div style={{padding: '7px 4px'}}>
        <button onClick={() => executeSearch(true)} className="blue-button" disabled={searchConditions.length === 0}>Search</button>
      </div>
      <div className="element-to-center" style={{width: '14px'}}>
        <button onClick={() => resetSearchConditions()}>
          reload
        </button>
      </div>
    </div>
  );
}