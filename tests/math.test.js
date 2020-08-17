const { calculateTip } = require('../src/math')

test('Should calculate total with tip', () => {
	const total = calculateTip(10, .3)
	expect(total).toBe(13)
	expect(calculateTip(100, .2)).toBe(120)
})

test('Should calculate total with default tip', () => {
	expect(calculateTip(10)).toBe(12)
})
