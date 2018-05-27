/* eslint-env node, mocha */
import { expect } from 'chai'
import distance from '.'

describe('#distance', () => {
  it('should calculate the distance between two points', () => {
    const pointA = { x: 1, y: 1 }
    const pointB = { x: 2, y: 2 }
    expect(distance(pointA, pointB)).to.equal(2)
  })
})
