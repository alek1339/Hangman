var countries = ['Albania', 'Belarus', 'Bulgaria', 'Brazil', 'Canada', 'Denmark', 'Israel', 'Italy', 'Iran', 'Luxembourg']
var randomNum = Math.floor(Math.random() * 10)
var country = countries[randomNum]

var word = document.getElementById('word')
var wordInArr = []
var result = document.getElementById('result')

for (let i = 0; i < country.length; i++) {
  wordInArr.push('_')
}
word.innerHTML = wordInArr.join(' ')

var errors = 0
var score = 0

function nextMove () {
  let textInput = document.getElementById('textInput').value

  if (country.indexOf(textInput) !== -1 || country.indexOf(textInput.toUpperCase()) !== -1) {
    for (let i = 0; i < country.length; i++) {
      let char = textInput.toLowerCase()

      if (country[i].toLowerCase() === char) {
        if (wordInArr[i] !== textInput) {
          if (i === 0) {
            wordInArr[i] = textInput.toUpperCase()
          } else {
            wordInArr[i] = textInput
          }

          score++
        }
      }
      word.innerHTML = wordInArr.join(' ')

      if (score === country.length) {
        result.innerHTML = 'You Won!'
        result.style.color = 'green'
        document.getElementById('textInput').disabled = true
      }
    }
  } else {
    errors++
    document.getElementById('img').src = `./images/err${errors}.gif`

    if (errors > 5) {
      result.innerHTML = 'You Lost!'
      result.style.color = 'red'
      document.getElementById('textInput').disabled = true
    }
  }

  document.getElementById('textInput').value = ''
}

function newGame () {
  randomNum = parseInt(Math.random() * 10)
  country = countries[randomNum]
  score = 0
  errors = 0
  document.getElementById('textInput').disabled = false
  wordInArr = []
  document.getElementById('img').src = `./images/err${errors}.gif`
  for (let i = 0; i < country.length; i++) {
    wordInArr.push('_')
  }
  result.innerHTML = ''
  word.innerHTML = wordInArr.join(' ')
}
