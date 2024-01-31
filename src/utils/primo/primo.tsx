const primo = (n: number) => {
	const seriePrimo = (position: number) => {
		let j = 1
		let i = 0

		while (i < position) {
			if (isPrimo(j) === true && j !== 4) {
				//console.log(j)
				i++
			}
			j++
		}
		return j - 1
	}

	const isPrimo = (num: number) => {
		for (let i = 2; i < num / 2; i++) {
			if (num % i === 0) {
				return false
			}
		}
		return num !== 1
	}
	return seriePrimo(n)
}

export default primo
