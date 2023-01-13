import DonateItem from './donateItem'
import TotalAmount from './totalAmount'

export default class Donates {
	#totalAmount

	constructor() {
		this.#totalAmount = new TotalAmount()
	}

	run() {
		const donateForm = document.querySelector('.donate-form')
		const donateContainer = document.querySelector(
			'.donates-container__donates'
		)
		const inputHTML = document.querySelector('.donate-form__donate-input')

		donateForm.addEventListener('submit', event => {
			event.preventDefault()
			const { target } = event
			const amountInput = target.amount.value
			if (amountInput) {
				const donateItem = new DonateItem()
				const donateItemHTML = donateItem.render(amountInput)
				donateContainer.append(donateItemHTML)

				inputHTML.value = ''

				this.#totalAmount.render(amountInput)
			}
		})
	}
}
