// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js')

// TODO - Part 2
test("accepts Thomas A. Powell's phone number", () => {
  expect(functions.isPhoneNumber('858-270-2086')).toBe(true)
})

test('accepts whatever Google gives for "ucsd phone number"', () => {
  expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true)
})

test("rejects Thomas A. Powell's other phone number", () => {
  expect(functions.isPhoneNumber('888.355.PINT')).toBe(false)
})

test('rejects foreign phone numbers', () => {
  expect(functions.isPhoneNumber('+886 970699044')).toBe(false)
})

test("accepts Thomas A. Powell's email address", () => {
  expect(functions.isEmail('tpowell2@ucsd.edu')).toBe(true)
})

test('accepts invalid domain names', () => {
  expect(functions.isEmail('tpowell2@thomas.pow')).toBe(true)
})

test('rejects Taipei MRT emails', () => {
  expect(functions.isEmail('support@metro.taipei')).toBe(false)
})

test('rejects my email', () => {
  expect(functions.isEmail('seanthesheep22+lab8@outlook.com')).toBe(false)
})

test("accepts Thomas A. Powell's password", () => {
  expect(functions.isStrongPassword('LLMfetish')).toBe(true)
})

test('accepts "password"', () => {
  expect(functions.isStrongPassword('password')).toBe(true)
})

test('rejects XKCD-suggested password', () => {
  expect(functions.isStrongPassword('correct horse battery staple')).toBe(false)
})

test('rejects passwords that are too DEI', () => {
  expect(functions.isStrongPassword('你好１２３')).toBe(false)
})

test("accepts Thomas A. Powell's birthdate", () => {
  expect(functions.isDate('8/10/1968')).toBe(true)
})

test('accepts nonexistent dates', () => {
  expect(functions.isDate('31/4/2023')).toBe(true)
})

test('rejects international standards', () => {
  expect(functions.isDate('1989-06-04')).toBe(false)
})

test('rejects the future', () => {
  expect(functions.isDate('1/1/10000')).toBe(false)
})

test("accepts Thomas A. Powell's skin color", () => {
  expect(functions.isHexColor('#B86A63')).toBe(true)
})

test('accepts words', () => {
  expect(functions.isHexColor('Facade')).toBe(true)
})

test('rejects translucent colors', () => {
  expect(functions.isHexColor('#B86A6380')).toBe(false)
})

test('rejects numbers', () => {
  expect(functions.isHexColor('0')).toBe(false)
})
