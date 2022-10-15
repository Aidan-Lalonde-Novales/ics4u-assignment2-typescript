/**
 * Assignment 2 - String Manipulation
 * This program multiplies characters together and prints them out.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-10-11
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * @param {string} baseString the users string with no modification
 * @returns {string} finalString the final output as a string
 */
function stringBlowup(baseString: string): string {
  const finalList = []

  const splitString = baseString.split('')
  for (let counter = 0; counter < splitString.length; counter++) {
    const item = splitString[counter]
    let tempString = ''

    // Run if character appears
    if (isNaN(Number(item))) {
      if (isNaN(Number(splitString[counter - 1])) || counter !== 0) {
        tempString = item
        finalList.push(tempString)
      }
      // Run if number appears
    } else {
      if (splitString[counter + 1] !== undefined) {
        for (let mCounter = 0; mCounter < Number(item); mCounter++) {
          // concat function used to merge strings
          tempString = tempString.concat(splitString[counter + 1])
        }
      }
      if (isNaN(Number(splitString[counter + 1]))) {
        counter++
      }
      finalList.push(tempString)
    }
  }
  // Final Output is formed here
  const finalString = finalList.join('')
  return finalString
}

// Input
const baseString = prompt('Enter numbers/letters to multiply them: ')

// Process
const finalString = stringBlowup(baseString)

// Output
console.log('')
console.log(finalString)

console.log('\nDone.')
