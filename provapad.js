// 1° Questão

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// 2° Questão

function someFn(nume) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

// 3° Questão

function calculator(nume1, nume2) {
  return callback => callback(nume1, nume2)
}

// 4° Questão

/**
 * No console aparecerá nessa ordem:
 * 4
 * 1
 * 5
 * 1
 */

// 5° Questão

function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`)
  }
}
