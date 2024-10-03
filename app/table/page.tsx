'use client'
import HSTableSet from "@/components/common/HSTableSet";
import HSCheckBox from "@/components/common/input/HSCheckBox";
import { Roboto } from "next/font/google";
import { useState } from "react";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function TableTest() {
  const [checked, setChecked] = useState(false);
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
      <HSCheckBox value={"abc"} checked={checked} text={'Oh NO.'} onClick={() => setChecked(!checked)}/>
    </div>
  )
}