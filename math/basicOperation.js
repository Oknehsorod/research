function add(first, second) {
	const arrOfNum = []
  for (let i = 0; i < 1000; i += 1) {
  	arrOfNum.push(i)
  }
  
  for (let a = 0; a < first; a += 1) {
  	arrOfNum.shift()
  }
  
  return arrOfNum[second]
}

function dis(first, second) {
  const arrOfNum = []
  for (let i = 0; i <= first; i += 1) {
    arrOfNum.push(i)
  }
  console.log(arrOfNum)
  
  for (let a = 0; a < second; a += 1) {
  	arrOfNum.pop()
  }
  
  const len = arrOfNum.length
  
  for (let c = 1; c < len; c += 1) {
  	arrOfNum.shift()
  }
  
  console.log(arrOfNum)
  
  return arrOfNum[0]
}
