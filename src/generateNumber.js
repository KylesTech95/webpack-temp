function generateNumber() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  let oneThruTen = new Array(10).fill("").map((_,i)=>i+1)
  let length = oneThruTen.length
  return oneThruTen[Math.floor(Math.random() * length)]
}

export default generateNumber
