export default function distance (pointA, pointB) {
  const { x: xA, y: yA } = pointA
  const { x: xB, y: yB } = pointB
  return Math.sqrt(xA * xB + yA * yB)
}
