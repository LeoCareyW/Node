function findRectangularOverlap(rect1, rect2) {

// this part finds the X overlap
  const highestXStartPoint = Math.max(rect1.leftX, rect2.leftX)
  const lowestXEndPoint = Math.min((rect1.leftX + rect1.width), (rect2.leftX + rect2.width))

// this finds the Y overlap
  const highestYStartPoint = Math.max(rect1.bottomY, rect2.bottomY)
  const lowestYEndPoint = Math.min((rect1.bottomY + rect1.height), (rect2.bottomY + rect2.height))

  if (lowestXEndPoint <= highestXStartPoint) {
    return { leftX: null, bottomY: null, width: null, height: null }
  }

  if (lowestYEndPoint <= highestYStartPoint) {
    return { leftX: null, bottomY: null, width: null, height: null }
  }

  // calculating the total overlap of both axis
  const xOverlap = lowestXEndPoint - highestXStartPoint
  const yOverlap = lowestYEndPoint - highestYStartPoint

  // return all in object
  return { leftX: highestXStartPoint, bottomY: highestYStartPoint, width: xOverlap, height: yOverlap }
}
