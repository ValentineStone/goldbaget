function calc({
  workWidth,
  workHeight,
  frameWidth,
  framePrice,
  pullOnEmbroidery = false,
  cardboardCount = 0,
  passepartoutWidth = 0,
  passepartoutCount = 0,
  regularGlass = false,
  antiReflectiveGlass = false,
  museumGlass = false
}) {
  workWidth += 2 * passepartoutWidth
  workHeight += 2 * passepartoutWidth

  let workPerimeter = 2 * (workWidth + workHeight)
  let workArea = workWidth * workHeight

  let montageTotal = 800
    * (workWidth + 2 * frameWidth)
    * (workHeight + 2 * frameWidth)
  montageTotal = montageTotal < 200 ? 200 : montageTotal

  let frameTotal = (workPerimeter + frameWidth * 8 + .1) * framePrice

  let pullOnEmbroideryTotal = (pullOnEmbroidery ? 1 : 0) * workArea * 1200
  let cardboardTotal = workArea * 1000 * cardboardCount
  let passepartoutTotal = passepartoutCount * workArea * 1200
  let regularGlassTotal = (regularGlass ? 1 : 0) * workArea * 1300
  let antiReflectiveGlassTotal = (antiReflectiveGlass ? 1 : 0) * workArea * 3300
  let museumGlassTotal = (museumGlass ? 1 : 0) * workArea * 15000

  let extrasTotal =
    pullOnEmbroideryTotal
    + cardboardTotal
    + passepartoutTotal
    + regularGlassTotal
    + antiReflectiveGlassTotal
    + museumGlassTotal

  let total = montageTotal + frameTotal + extrasTotal

  return total
}

export default function calculus(arg1, arg2) {
  switch (arg1) {
    case 'economy':
      return calc({
        ...arg2,
        frameWidth: 0.02,
        framePrice: 150,
        regularGlass: true,
        pullOnEmbroidery: true,
        cardboardCount: 2,
      })
    case 'standart':
      return calc({
        ...arg2,
        frameWidth: 0.025,
        framePrice: 245,
        regularGlass: true,
        passepartoutWidth: 0.055,
        passepartoutCount: 2,
        pullOnEmbroidery: true,
        cardboardCount: 2,
      })
    case 'premium':
      return calc({
        ...arg2,
        frameWidth: 0.03,
        framePrice: 350,
        antiReflectiveGlass: true,
        passepartoutWidth: 0.055,
        passepartoutCount: 2,
        pullOnEmbroidery: true,
        cardboardCount: 2,
      })
    case 'luxury':
      return calc({
        ...arg2,
        frameWidth: 0.05,
        framePrice: 650,
        museumGlass: true,
        passepartoutWidth: 0.075,
        passepartoutCount: 2,
        pullOnEmbroidery: true,
        cardboardCount: 2,
      })
    default:
      return calc(arg2 || arg1)
  }
}