import { randomBetween } from '@/utils'

type Range = {x: [number, number], y: [number, number]}

const getRange = (position: 0 | 1 | 2 | 3) : Range => {
  switch (position) {
    case 0:
      // top
      return {x: [-10, 110], y: [-15, -5]}
    case 1:
      // right
      return {x: [105, 115], y: [-10, 110]}
    case 2:
      // bottom
      return {x: [-10, 110], y: [105, 115]}
    case 3:
      //left
      return {x: [-15, -5], y: [-10, 110]}
  }
}

const generatePath = () => {
  const path = []

  // start off screen
  const startPos = Math.floor(Math.random() * 4)
  const {x: startX, y: startY}: Range = getRange(startPos as 0 | 1 | 2 | 3)
  path.push({
    x: `${randomBetween(...startX)}vw`,
    y: `${randomBetween(...startY)}vh`
  })

  path.push({
    x: `${randomBetween(0, 100)}vw`,
    y: `${randomBetween(0, 100)}vh`
  })
  // path.push({
  //   x: `${randomBetween(51, 100)}vw`,
  //   y: `${randomBetween(0, 50)}vh`
  // })

  // End off screen
  const endPos = Math.floor(Math.random() * 4)
  const {x: endX, y: endY}: Range = getRange(endPos as 0 | 1 | 2 | 3)
  path.push({
    x: `${randomBetween(...endX)}vw`,
    y: `${randomBetween(...endY)}vh`
  })

  console.log(path)
  return path
}

export default generatePath