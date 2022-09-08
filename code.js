let numbers = [0, 1, 1, 2, 1, 0, 0, 0, 0]

function fishAmountFinder(days) {
  numbers = [0, 1, 1, 2, 1, 0, 0, 0, 0]
  // let message1 = "On day: " + 1 + " "
  // for (let i = 0; i < numbers.length; i++) {
  //   message1 += "| "
  //   for (let j = 0; j < numbers[i]; j++) {
  //     message1 += i + " "
  //   }
  //   if (numbers[i] == 0) {
  //     message1 += " "
  //   }
  // }
  // message1 += "| "
  // console.log(message1)
  for (let h = 1; h < days; h++) {
    let placeholder = numbers[0]
    // for number 1:
    numbers[0] = numbers[1]
    // for number 2:
    numbers[1] = numbers[2]
    // for number 3:
    numbers[2] = numbers[3]
    // for number 4:
    numbers[3] = numbers[4]
    // for number 5:
    numbers[4] = numbers[5]
    // for number 6:
    numbers[5] = numbers[6]
    // for number 7:
    numbers[6] = numbers[7]
    // for number 8:
    numbers[7] = numbers[8]
    // for number 0:
    
    numbers[5] += placeholder
    numbers[8] = placeholder
    // let message1 = "On day: " + (h+1) + " "
    // for (let i = 0; i < numbers.length; i++) {
    //   message1 += "| "
    //   for (let j = 0; j < numbers[i]; j++) {
    //     message1 += i + " "
    //   }
    //   if (numbers[i] == 0) {
    //     message1 += " "
    //   }
    // }
    // message1 += "| "
    // console.log(message1)
  }
  let num1 = 0
  for (let i = 0; i < numbers.length; i++) {
    num1 += numbers[i]
  }
  console.log("There are: " + num1 + " fish!")
}