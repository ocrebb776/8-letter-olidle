let n = 1
let stage = 0
let ent = []
let table = [['⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '\n']]
let enter
let results = 'you have got to play first'
const orange = '#b59d3b'
const green = '#538d4e'
const gray = '#4f4f52'
const con = ['a', 'b', 'c', 'd', 'e', 'f']
var current_date, epocDate
current_date = new Date()
var epocDate = new Date(new Date().getTime() / 1000)
var res = Math.abs(current_date - epocDate) / 1000
let days = Math.floor(res / 86400)
days -= 19059
function orangef(cell) {
  document.getElementById(cell).style.backgroundColor = orange
  document.getElementById(cell).style.border = orange
}

function greenf(cell) {
  document.getElementById(cell).style.backgroundColor = green
  document.getElementById(cell).style.border = green
}
function set(cell, press) {
  document.getElementById(cell).innerHTML = press
}
function graykey(cell) {
  document.getElementById(cell).style.backgroundColor = gray
  document.getElementById(cell).style.border = gray
}
function delay(time) {
  time = time * 1000
  return new Promise((resolve) => setTimeout(resolve, time))
}

function grayf(cell) {
  document.getElementById(cell).style.backgroundColor = gray
  document.getElementById(cell).style.border = gray
}
function hidde() {
  document.getElementById('nope').style.width = '0vw'
  document.getElementById('nope').style.fontSize = '0vh'
}
function notword(tag) {
  document.getElementById(tag).style.width = '60vw'
  document.getElementById(tag).style.fontSize = '5vh'
  delay(2).then(() => hidde())
}
function hidden() {
  document.getElementById('fe').style.width = '0vw'
  document.getElementById('fe').style.fontSize = '0vh'
}
function notlong() {
  document.getElementById('fe').style.hight = '900vh'
  document.getElementById('fe').style.width = '60vw'
  document.getElementById('fe').style.hight = '900vh'
  document.getElementById('fe').style.fontSize = '5vh'
  delay(2).then(() => hidden())
}
function hidewin() {
  document.getElementById('yay').style.width = '0vw'
  document.getElementById('yay').style.fontSize = '0vh'
  document.getElementById('yay').style.height = '0vh'
}
function win() {
  document.getElementById('yay').style.width = '70vw'
  document.getElementById('yay').style.fontSize = '2vh'
  document.getElementById('yay').style.height = '70vh'
  delay(10).then(() => hidewin())
}
function norand() {
  alert('correct word has been changed')
  correct = random[Math.floor(Math.random() * random.length)]
  console.log(array)
  array = correct.split('')
}
const random = [
  'ABSOLUTE',
  'CRITICAL',
  'CELLULAR',
  'ASSESSED',
  'HONESTLY',
  'CALENDAR',
  'CLASSMAN',
  'SALIVATE',
  'PUNCTURE',
  'CULPRITS',
  'CUITTLED',
  'ABROOKED',
  'ABJECTED',
  'AARDVARK',
  'COMPARER',
  'SINGULAR',
  'HONESTLY',
  'STALKING',
  'UNSETTLE',
  'EMPHASIS',
  'SHORTAGE',
  'SHUFFLED',
  'PARANOID',
  'VELOSITY',
  'ATTACKED',
  'CHAMPION',
  'EXERSIZE',
  'DESCRIBE',
  'ALTHOUGH',
  'GREETING',
  'DAUGHTER',
  'EMPERESS',
  'VISITING',
  'VALUABLE',
  'ADEQUATE',
  'ALTHOUGH',
  'ARGUMENT',
  'BIRTHDAY',
  'CATHOLIC',
  'CAUTIOUS',
  'CATEGORY',
  'COMPUTER',
  'DAYLIGHT',
  'DESCRIBE',
  'FORMERLY',
  'FUNCTION',
  'EXCITING',
  'FOOTBALL',
  'IMPERIAL',
  'INCIDENT',
  'HISTORIC',
  'HUMANITY',
  'CREATIVE',
  'STRUGGLE',
]
let correct = random[days]

let array = correct.split('')
console.log(array)
let keygray
/*
function display(rows) {
  enter = prompt('enter a 5 letter word for row: ' + rows).toUpperCase()
  if (enter.length == 5) {
    if (word.includes(enter) == true) {
      document.getElementById(rows + '1').innerHTML = enter[0]
      document.getElementById(rows + '2').innerHTML = enter[1]
      document.getElementById(rows + '3').innerHTML = enter[2]
      document.getElementById(rows + '4').innerHTML = enter[3]
      document.getElementById(rows + '5').innerHTML = enter[4]
      check(rows, enter)
      a = 'y'
    } else {
      notword()
    }
  } else {
    alert('must be 5 letters long')
  }
}*/
function key(press) {
  if (n < 9) {
    press = press.toUpperCase()
    set(con[stage] + String(n), press)
    ent[n - 1] = press
    n = n + 1
  }
}
function checks() {
  enter = String(
    ent[0] + ent[1] + ent[2] + ent[3] + ent[4] + ent[5] + ent[6] + ent[7],
  )
  if (enter.length == 8) {
    if (word.includes(enter) == true) {
      check(stage)
      stage = stage + 1
      a = 'y'
    } else {
      notword('nope')
    }
  } else {
    notlong()
  }
}
function back() {
  if (n > 1) {
    n = n - 1
    ent[n - 1] = ''
    set(con[stage] + String(n), '')
  }
}
function check(sta) {
  var row = con[stage]
  if (enter == correct) {
    console.log('yo')
    document.getElementById('word').innerHTML = correct.toLowerCase()
    win()
    document.getElementById('tri').innerHTML = stage + 1 + ' tries'
    table[sta] = ['🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '\n']
    let result = String(table)
    result = result.replace(/,/g, '')
    results =
      'hey I it did this 8 letter olidle in ' +
      String(stage + 1) +
      ' tries \n' +
      result +
      'https://ocrebb776.github.io/8-letter-olidle/'
  } else if (stage == 6) {
    alert('the answer is :' + correct)
  } else {
    table.push(['⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '⬛', '\n'])
  }
  let tochange
  let i = 1
  while (i < 9) {
    let x = i - 1
    if (enter[i - 1] == correct[i - 1]) {
      greenf(row + String(i))
      table[sta][i - 1] = '🟩'
      tochange = '#' + enter[i - 1].toLowerCase()
      $(tochange).css('background-color', green)
    } else if (array.includes(enter[i - 1]) == true) {
      orangef(row + String(i))
      table[sta][i - 1] = '🟨'
      tochange = '#' + enter[i - 1].toLowerCase()
      $(tochange).css('background-color', orange)
    } else {
      grayf(row + String(i))
      tochange = '#' + enter[i - 1].toLowerCase()
      $(tochange).css('background-color', gray)
    }
    i += 1
  }

  number = 0
  n = 1
}
