export default class TotalAmount {
	constructor() {
		this.totalAmountHTML = document.querySelector('#total-amount')
	}

	render(value) {
		let totalAmount = Number(this.totalAmountHTML.textContent.replace('$', ''))

		totalAmount += Number(value)

		this.totalAmountHTML.textContent = `${totalAmount}$`
	}
}
