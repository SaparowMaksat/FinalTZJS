import timeCodeFormat from '../utils/date'

export default class DonateItem {
	#container

	constructor() {
		this.#container = document.createElement('div')
		this.#container.className = 'donate-item'
	}

	render(donationAmount) {
		const currentDate = timeCodeFormat(new Date())

		this.#container.innerHTML = `${currentDate} - <b>${donationAmount}$</b>`

		return this.#container
	}
}
