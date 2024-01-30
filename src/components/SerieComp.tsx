import React, { useEffect } from 'react'
import primo from '../utils/primo'
import triangular from '@/utils/triangular'
import fibonacci from '@/utils/fibonacci'

interface Props {
  getData : (prim:number,fib:number,tri:number,resFinal:number) => void;
  n:number
}

const SerieComp : React.FC<Props>  = (props) => {
const n= props.n



const noPrimo = primo(n)
const noTriangular = triangular(n)
const noFibbonacci = fibonacci(n)
const resFinal = -3*noPrimo-noFibbonacci+5*noTriangular

useEffect(()=>{
  if (n!==0){
    props.getData(noPrimo,noFibbonacci,noTriangular,resFinal)
  }
  
},[n])


    return(
      <>       
      </>
    )
    

}

export default SerieComp