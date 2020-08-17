const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
	const total = calculateTip(10, .3)
	expect(total).toBe(13)
	expect(calculateTip(100, .2)).toBe(120)
})

test('Should calculate total with default tip', () => {
	expect(calculateTip(10)).toBe(12)
})

test('Should convert 32 F to 0 C', () => {
	expect(fahrenheitToCelsius(32)).toBe(0)
	expect(fahrenheitToCelsius(-40)).toBe(-40)
})

test('Should convert 0 C to 32 F', () => {
	expect(celsiusToFahrenheit(0)).toBe(32)
	expect(celsiusToFahrenheit(-40)).toBe(-40)
})
