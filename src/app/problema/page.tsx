'use client'
import React, { useEffect } from 'react'
import InputValue from '../../components/InputValue'
import CompleteSerie from '@/components/CompleteSerie'
import ShowResults from '../../components/ShowResults'
import totalRes from '@/utils/totalRes'

interface Dataa {
  prim: number;
  fib: number;
  tri: number;
  finalRes:number;
  first:boolean;
}

const Page = () => {

  const [data, setData] = React.useState({prim:0, fib:0, tri:0, finalRes:0, first:false})
  const [n, setN] = React.useState(0)

 /* const getDataRes = (prim:number, fib:number, tri:number, finalRes:number) => {

    setData({
      prim,
      fib,
      tri,
      finalRes,
      first:true
    })

  }*/
  const getInputData = (num:number) => {
    setN(num)
  }

  useEffect(()=>{
    setData(totalRes(n))
  },[n])

  return (
    <div className='container custome_section'>
      <div>
        <InputValue getInputData={getInputData}/>
      
        <ShowResults data={data}/>
    </div>
      </div>
  )
}

export default Page