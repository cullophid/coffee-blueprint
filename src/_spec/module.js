import assert from 'assert'
import {add, sub} from '../'

describe('add', () => {
  it('should return the sum of the two values', () => {
    assert.equal(add(1, 2), 3)
  })
})

describe('sub', () => {
  it('should return the difference between the two values', () => {
    assert.equal(sub(1, 2), -1)
  })
})
