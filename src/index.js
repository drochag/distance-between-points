export default function distance (pointA, pointB) {
  const { x: xA, y: yA } = pointA
  const { x: xB, y: yB } = pointB
  const xs = Math.pow(xB - xA, 2)
  const ys = Math.pow(yB - yA, 2)
  return Math.sqrt(xs + ys)
}
