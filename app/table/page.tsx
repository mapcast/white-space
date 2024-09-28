'use client'
import HSTable from "@/components/common/HSTable";
import HSCheckBox from "@/components/common/input/HSCheckBox";
import { useState } from "react";

export default function TableTest() {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{padding: 20}}>
      <HSTable
      headers={[
        {
          id: 0,
          raw: 'babvo',
          search: true,
          display: 'deenm',
        },
        {
          id: 0,
          raw: 'BASDsd',
          search: true,
          display: 'zzzz',
        }
      ]}
      values={[
        /*
        {
          id: 0,
          values: [
            {
              id: 0,
              display: 'daenty',
              raw: 1
            },
            {
              id: 0,
              display: 'sib',
              raw: 2
            }
          ]
        }*/
      ]}/>
      <HSCheckBox value={"abc"} checked={checked} text={'Oh NO.'} onClick={() => setChecked(!checked)}/>
    </div>
  )
}