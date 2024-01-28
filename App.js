/* eslint-disable no-undef */
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function App () {
  const [Level, setLevel] = useState('1')

  const [LivelloMostrato, setLivelloMostrato] = useState('0')

  const [Restart, setRestart] = useState('invisible')

  const [shouldShow1, setShouldShow1] = useState('null')
  const [shouldShow2, setShouldShow2] = useState('null')
  const [shouldShow3, setShouldShow3] = useState('null')
  const [shouldShow4, setShouldShow4] = useState('null')
  const [shouldShow5, setShouldShow5] = useState('null')
  const [shouldShow6, setShouldShow6] = useState('null')
  const [shouldShow7, setShouldShow7] = useState('null')
  const [shouldShow8, setShouldShow8] = useState('null')
  const [shouldShow9, setShouldShow9] = useState('null')
  const [shouldShowColcusion, setShouldShowColcusion] = useState('null')

  const setShouldShowArray = [setShouldShow1, setShouldShow2, setShouldShow3, setShouldShow4, setShouldShow5, setShouldShow6, setShouldShow7, setShouldShow8, setShouldShow9]

  function restart () {
    setLevel('1')
    setLivelloMostrato('1')
    clearTimeout()
    hideAllbars()
    setShouldShowColcusion('null')
  }

  function hideBar (setShouldShow) {
    setShouldShow('null')
    // console.log("Log status NULL");
  }

  function showBar (setShouldShow) {
    setShouldShow('bar')
    // console.log("Log status BAR");
  }

  function showCircle (setShouldShow) {
    setShouldShow('circle')
    // console.log("Log status CIRCLE");
  }

  function showCross (setShouldShow) {
    setShouldShow('cross')
    // console.log("Log status CROSS");
  }

  function hideAllbars () {
    for (let i = 0; i < setShouldShowArray.length; i++) {
      hideBar(setShouldShowArray[i])
    }
  }

  function reset () {
    // Reset all timers
    clearTimeout()

    // Hide all boxex
    hideAllbars()

    // Reset conclusion view
    setShouldShowColcusion('null')

    // Hide Start button
    setLevel('null')
  }

  function barPressed1 () {
    // Show Circle image
    showCircle(setShouldShow1)
    // Cancel countdown
    clearTimeout(id1)
  }

  function barPressed2 () {
    // Show Circle image
    showCircle(setShouldShow2)
    // Cancel countdown
    clearTimeout(id2)
  }

  function barPressed3 () {
    // Show Circle image
    showCircle(setShouldShow3)
    // Cancel countdown
    clearTimeout(id3)
  }

  function barPressed4 () {
    // Show Circle image
    showCircle(setShouldShow4)
    // Cancel countdown
    clearTimeout(id4)
  }

  function barPressed5 () {
    // Show Circle image
    showCircle(setShouldShow5)
    // Cancel countdown
    clearTimeout(id5)
  }

  function barPressed6 () {
    // Show Circle image
    showCircle(setShouldShow6)
    // Cancel countdown
    clearTimeout(id6)
  }

  function barPressed7 () {
    // Show Circle image
    showCircle(setShouldShow7)
    // Cancel countdown
    clearTimeout(id7)
  }

  function barPressed8 () {
    // Show Circle image
    showCircle(setShouldShow8)
    // Cancel countdown
    clearTimeout(id8)
  }

  function barPressed9 () {
    // Show Circle image
    showCircle(setShouldShow9)
    // Cancel countdown
    clearTimeout(id9)
  }

  function livello1 () {
    restart()
    setRestart('visible')
    const min = 3000
    const max = 10000
    console.log('Level 1')
    startGame(min, max)
  }

  function livello2 () {
    const min = 2750
    const max = 9000
    console.log('Level 2')
    startGame(min, max)
  }

  function livello3 () {
    const min = 2500
    const max = 8000
    console.log('Level 3')
    startGame(min, max)
  }

  function livello4 () {
    const min = 2250
    const max = 7000
    console.log('Level 4')
    startGame(min, max)
  }

  function livello5 () {
    const min = 2000
    const max = 6000
    console.log('Level 5')
    startGame(min, max)
  }

  function livello6 () {
    const min = 1750
    const max = 5000
    console.log('Level 6')
    startGame(min, max)
  }

  function livello7 () {
    const min = 1500
    const max = 4000
    console.log('Level 7')
    startGame(min, max)
  }

  function livello8 () {
    const min = 1250
    const max = 3000
    console.log('Level 8')
    startGame(min, max)
  }

  function livello9 () {
    const min = 1000
    const max = 2000
    console.log('Level 9')
    startGame(min, max)
  }

  function livello10 () {
    const min = 1000
    const max = 2000
    console.log('Level 10')
    startGame(min, max)
  }

  function livello11 () {
    const min = 1000
    const max = 2000
    console.log('Level 11')
    startGame(min, max)
  }

  function retryLevel () {
    // Take current int value from livello mostrato
    const thisLevel = parseInt(LivelloMostrato)

    if (thisLevel === 1) {
      livello1()
    } if (thisLevel === 2) {
      livello2()
    } if (thisLevel === 3) {
      livello3()
    } if (thisLevel === 4) {
      livello4()
    } if (thisLevel === 5) {
      livello5()
    } if (thisLevel === 6) {
      livello6()
    } if (thisLevel === 7) {
      livello7()
    } if (thisLevel === 8) {
      livello8()
    } if (thisLevel === 9) {
      livello9()
    } if (thisLevel === 10) {
      livello10()
    } if (thisLevel === 11) {
      livello11()
    }
  }

  function nextLevel () {
    // Aumenta livello
    setLivelloMostrato(parseInt(LivelloMostrato) + 1)

    // Take current int value from livello mostrato
    const thisLevel = parseInt(LivelloMostrato)

    if (thisLevel === 1) {
      livello2()
    } if (thisLevel === 2) {
      livello3()
    } if (thisLevel === 3) {
      livello4()
    } if (thisLevel === 4) {
      livello5()
    } if (thisLevel === 5) {
      livello6()
    } if (thisLevel === 6) {
      livello7()
    } if (thisLevel === 7) {
      livello8()
    } if (thisLevel === 8) {
      livello9()
    } if (thisLevel === 9) {
      livello10()
    } if (thisLevel === 10) {
      livello11()
    }
  }

  function startGame (min, max) {
    // Reset status of every images
    reset()

    // Hide Bar image
    hideAllbars()

    // Create cross counter
    let cross = 0

    // Create Array of timers
    const random = [
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min),
      Math.floor(Math.random() * (max - min + 1) + min)
    ]

    console.log(random)

    // Show for every element the bar in the half time of the timer assigned
    function setDelayShowBar (i) {
      setTimeout(() => {
        showBar(setShouldShowArray[i])
      }, random[i] / 2)
    }

    // Show Bar image
    for (let i = 0; i < setShouldShowArray.length; i++) {
      setDelayShowBar(i)
    }

    id1 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow1)
      cross++
    }, random[0])

    id2 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow2)
      cross++
    }, random[1])

    id3 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow3)
      cross++
    }, random[2])

    id4 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow4)
      cross++
    }, random[3])

    id5 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow5)
      cross++
    }, random[4])

    id6 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow6)
      cross++
    }, random[5])

    id7 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow7)
      cross++
    }, random[6])

    id8 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow8)
      cross++
    }, random[7])

    id9 = setTimeout(() => {
      // Show Cross image
      showCross(setShouldShow9)
      cross++
    }, random[8])

    setTimeout(() => {
      if (cross === 0) {
        console.log('YOU WIN!')

        // Show "Hai vinto"
        setShouldShowColcusion('win')

        // Change button to go to the next level
        setLevel('Next')
      } else {
        console.log('YOU LOSE!')

        // Show "Hai perso"
        setShouldShowColcusion('lose')

        // Change button to retry the level
        setLevel('Retry')
      }
      console.log('------------')
    }, Math.max.apply(null, random))
  }

  return (
    <View onload={reset} title="Screen" style={{ alignItems: 'center', paddingTop: '30%' }}>
      <View title="Column" style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        {Restart === 'invisible' && null}
        {Restart === 'visible' && <View style={styles.button}><Text style={styles.white} onPress={restart}>RESTART</Text></View>}
        <View >
          {LivelloMostrato === '1' && <View style={styles.button}><Text style={styles.white}>LEVEL 1</Text></View>}
          {LivelloMostrato === '2' && <View style={styles.button}><Text style={styles.white}>LEVEL 2</Text></View>}
          {LivelloMostrato === '3' && <View style={styles.button}><Text style={styles.white}>LEVEL 3</Text></View>}
          {LivelloMostrato === '4' && <View style={styles.button}><Text style={styles.white}>LEVEL 4</Text></View>}
          {LivelloMostrato === '5' && <View style={styles.button}><Text style={styles.white}>LEVEL 5</Text></View>}
          {LivelloMostrato === '6' && <View style={styles.button}><Text style={styles.white}>LEVEL 6</Text></View>}
          {LivelloMostrato === '7' && <View style={styles.button}><Text style={styles.white}>LEVEL 7</Text></View>}
          {LivelloMostrato === '8' && <View style={styles.button}><Text style={styles.white}>LEVEL 8</Text></View>}
          {LivelloMostrato === '9' && <View style={styles.button}><Text style={styles.white}>LEVEL 9</Text></View>}
          {LivelloMostrato === '10' && <View style={styles.button}><Text style={styles.white}>LEVEL 10</Text></View>}
          {LivelloMostrato === '11' && <View style={styles.button}><Text style={styles.white}>LEVEL 11</Text></View>}
        </View>
        <View >
          {Level === 'null' && <View style={styles.button}><Text style={styles.white}>TOUCH THE BARS!</Text></View>}
          {Level === '1' && <View style={styles.button}><Text style={styles.white} onPress={livello1}>START</Text></View>}
          {Level === 'Next' && <View style={styles.button}><Text style={styles.white} onPress={nextLevel}>NEXT LEVEL</Text></View>}
          {Level === 'Retry' && <View style={styles.button}><Text style={styles.white} onPress={retryLevel}>RETRY LEVEL</Text></View>}
        </View>

        <View title="Row1" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View >
            {shouldShow1 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow1 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed1}>—</Text>}
            {shouldShow1 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow1 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow2 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow2 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed2}>—</Text>}
            {shouldShow2 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow2 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow3 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow3 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed3}>—</Text>}
            {shouldShow3 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow3 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
        </View>
        <View title="Row2" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <View >
            {shouldShow4 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow4 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed4}>—</Text>}
            {shouldShow4 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow4 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow5 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow5 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed5}>—</Text>}
            {shouldShow5 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow5 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow6 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow6 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed6}>—</Text>}
            {shouldShow6 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow6 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
        </View>
        <View title="Row3" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <View >
            {shouldShow7 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow7 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed7}>—</Text>}
            {shouldShow7 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow7 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow8 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow8 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed8}>—</Text>}
            {shouldShow8 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow8 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
          <View >
            {shouldShow9 === 'null' && <Text style={styles.imageTxt}>○</Text>}
            {shouldShow9 === 'bar' && <Text style={styles.imageTxt} onTouchStart={barPressed9}>—</Text>}
            {shouldShow9 === 'cross' && <Text style={styles.imageTxt}>×</Text>}
            {shouldShow9 === 'circle' && <Text style={styles.imageTxt}>○</Text>}
          </View>
        </View>
        <View >
          {shouldShowColcusion === 'null' && <View style={styles.button}><Text style={styles.white}></Text></View>}
          {shouldShowColcusion === 'win' && <View style={styles.button}><Text style={styles.white}>YOU WON!</Text></View>}
          {shouldShowColcusion === 'lose' && <View style={styles.button}><Text style={styles.white}>YOU LOSE!</Text></View>}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    fontSize: 80
  },
  white: {
    color: 'white',
    fontSize: 32
  },
  image: {
    width: 100,
    height: 100
  },
  imageTxt: {
    borderColor: 'white',
    borderWidth: 1,
    width: 100,
    height: 100,
    color: 'black',
    fontSize: 180,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 160
  }
})
