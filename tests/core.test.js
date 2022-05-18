import _$ from '../src/core.js'

describe('Init _$', () => {

	it('_$ is function ', () => {
		expect(typeof _$).toBe("function")
	})

	describe('Selector _$', () => {
		let fixtureEl,
			fixContext

		beforeAll(() => {
			fixtureEl = 'body'
			fixContext = document
		})

		afterEach(() => {
			fixContext = null
			fixtureEl = null
		})

		it('Selecionando el body', () => {
			let body = _$(fixtureEl)
			expect(body.length).toEqual(1)
		})


	})
})