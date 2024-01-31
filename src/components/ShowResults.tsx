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
    <div className=''>
        {
            data.first? (
                <>
                <section className='border rounded p-3 bg_outputs'>
                    <h5 className='text-light'>{`Pirmo: ${data.prim}`}</h5>
                    <h5 className='text-light'>{`Fibbonacci: ${data.fib}`}</h5>
                    <h5 className='text-light'>{`Triangular: ${data.tri}`}</h5>
                    <h5 className='text-light'>{`Res: ${data.tri}`}</h5>
                </section>
                </>
            
            
            ):null
        }
    </div>
  )
}

export default ShowResults