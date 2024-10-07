'use client'
import HSTableSet from "@/components/common/HSTableSet";
import HSBigInput from "@/components/common/input/HSBigInput";
import HSCheckBox from "@/components/common/input/HSCheckBox";
import HSRadio from "@/components/common/input/HSRadio";
import { Roboto } from "next/font/google";
import { useState } from "react";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function TableTest() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const [fieldValue, setFieldValue] = useState('');
  return (
    <div className={font.className} style={{padding: 20}}>
      <HSTableSet
      headers={[
        {
          raw: 'createdTimeAt',
          search: false,
          display: 'Created Time',
        },
        {
          raw: 'fieldA',
          search: true,
          display: 'Field A',
        },
        {
          raw: 'fieldB',
          search: true,
          display: 'Field B',
        },
      ]}
      getDatasApi={async () => {}}
      />
      <HSCheckBox value={"abc"} checked={checked} text={'CheckBox'} onChange={() => setChecked(!checked)}/>
      <div>
        <HSRadio value={"a"} selected={selected} text="Radio A" onClick={setSelected}/>
        <br/>
        <HSRadio value={"b"} selected={selected} text="Radio B" onClick={setSelected}/>
      </div>
      <div>
        <HSBigInput fieldName="Just Test" fieldValue={fieldValue} setFieldValue={setFieldValue}/>
      </div>
    </div>
  )
}