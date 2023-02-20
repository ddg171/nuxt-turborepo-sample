import { describe, it, expect } from 'vitest'
import { replaceRandomCharactor } from '../utils/index'

describe('replaceRandomCharactor', () => {
  it('replace string', () => {
    const str = 'hello'
    expect(replaceRandomCharactor(str).length).toBe(str.length)
    expect(typeof replaceRandomCharactor(str)).toBe('string')
    const result1 = replaceRandomCharactor(str)
    const result2 = replaceRandomCharactor(str)

    expect(result1 === result2).toBe(false)
  })
  it('startAt not first charactor', () => {
    const str = 'hello'
    const startAt1 = replaceRandomCharactor(str, 1)
    const startAt2 = replaceRandomCharactor(str, 2)
    const startAt3 = replaceRandomCharactor(str, 3)
    const startAt4 = replaceRandomCharactor(str, 4)
    console.log(startAt1, startAt2, startAt3, startAt4)
    expect(startAt1[0]).toBe(str[0])
    expect(startAt2[1]).toBe(str[1])
    expect(startAt3[2]).toBe(str[2])
    expect(startAt4[3]).toBe(str[3])
  })

  it('startAt is bigger than string length', () => {
    expect(typeof replaceRandomCharactor('hello', 5)).toBe('string')
  })
  it('startAt is negative', () => {
    expect(typeof replaceRandomCharactor('hello', -1)).toBe('string')
  })
  it('startAt is not number', () => {
    expect(typeof replaceRandomCharactor('hello', NaN)).toBe('string')
  })
  it('empty string', () => {
    expect(replaceRandomCharactor('')).toBe('')
  })
})
