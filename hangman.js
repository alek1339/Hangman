var countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
  'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands',
  'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
  'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
  'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
  'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia',
  'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania',
  'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan',
  'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad Tobago', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Turks Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay',
  'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']
var randomNum = Math.floor(Math.random() * countries.length)
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
          if (score === 0) {
            score++
          } else if (i > 0) {
            score++
          }
          console.log(country + ' ' + score)
        }
      }
      word.innerHTML = wordInArr.join(' ')

      if (score === country.length - 1) {
        result.innerHTML = 'You Won!'
        result.style.color = 'green'
        document.getElementById('textInput').disabled = true
      }
    }
  } else {
    errors++
    document.getElementById('img').src = `./images/err${errors}.gif`

    if (errors > 5) {
      word.innerHTML = country
      word.style.color = 'red'

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
  word.style.color = 'black'
}
