/* eslint-env node, mocha */
import { expect } from 'chai'
import distance from '.'

describe('#distance', () => {
  it('should calculate the distance between two points', () => {
    const pointA = { x: -2, y: 1 }
    const pointB = { x: 1, y: 5 }
    expect(distance(pointA, pointB)).to.equal(5)
  })
})
