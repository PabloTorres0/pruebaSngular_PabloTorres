import React from 'react'

interface Props {
    data:{
        prim: number;
        fib: number;
        tri: number;
        finalRes:number;
        first:boolean;
    }
}

const ShowResults: React.FC<Props>= (props) => {

    const data = props.data
    console.log(data)
  return (
    <div>
        {
            data.first? (
                <>
                    <h1>{`Pirmo de n es: ${data.prim}`}</h1>
                    <h1>{`Fibbonacci de n es: ${data.fib}`}</h1>
                    <h1>{`Triangular de n n es: ${data.tri}`}</h1>
                    <h1>{`Res: ${data.tri}`}</h1>
                </>
            
            
            ):null
        }
    </div>
  )
}

export default ShowResults