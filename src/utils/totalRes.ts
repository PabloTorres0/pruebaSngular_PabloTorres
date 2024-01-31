
import primo from './primo'
import triangular from './triangular'
import fibonacci from './fibonacci'


const totalRes = (n:number) => {
    const prim= primo(n)
    const fib=fibonacci(n)
    const tri= triangular(n+1)

    
    const finalRes = -3*prim-fib+5*tri
    const data={
        prim,
        fib,
        tri,
        finalRes,
        first:true
    }
    

  
    if (n!==0){
    return data}
    else  return{
        prim:0,
        fib:0,
        tri:0,
        finalRes:0,
        first:false
    }
  
}

export default totalRes