interface Props {
	data: {
		prim: number
		fib: number
		tri: number
		finalRes: number
		first: boolean
	}
}

const ShowResults: React.FC<Props> = props => {
	const data = props.data
	return (
		<div className=''>
			{data.first ? (
				<>
					<section className='border rounded p-3 bg_outputs'>
						<h5 className='text-light'>{`Pirmo n : ${data.prim}`}</h5>
						<h5 className='text-light'>{`Fibbonacci n : ${data.fib}`}</h5>
						<h5 className='text-light'>{`Triangular (n+1) : ${data.tri}`}</h5>
						<h5 className='text-light'>{`Res: ${data.finalRes}`}</h5>
					</section>
				</>
			) : null}
		</div>
	)
}

export default ShowResults
