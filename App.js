/* eslint-disable no-undef */
import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function App () {
  const [Restart, setRestart] = useState('invisible')

  const [Score, setScore] = useState(0)

  const [LevelShown, setLevelShown] = useState('0')

  const [StartButton, setStartButton] = useState('Start')

  const [Button1, setButton1] = useState('null')
  const [Button2, setButton2] = useState('null')
  const [Button3, setButton3] = useState('null')
  const [Button4, setButton4] = useState('null')
  const [Button5, setButton5] = useState('null')
  const [Button6, setButton6] = useState('null')
  const [Button7, setButton7] = useState('null')
  const [Button8, setButton8] = useState('null')
  const [Button9, setButton9] = useState('null')

  const [Conclusion, setConclusion] = useState('null')

  const setButtonArray = [setButton1, setButton2, setButton3, setButton4, setButton5, setButton6, setButton7, setButton8, setButton9]

  function restart () {
    setStartButton('Start')
    setLevelShown('1')
    clearTimeout()
    hideAllbars()
    setConclusion('null')
    setScore(0)
  }

  function hideBar (setButton) {
    setButton('null')
    // console.log("Log status NULL");
  }

  function showBar (setButton) {
    setButton('bar')
    // console.log("Log status BAR");
  }

  function showCircle (setButton) {
    setButton('circle')
    // console.log("Log status CIRCLE");
  }

  function showCross (setButton) {
    setButton('cross')
    // console.log("Log status CROSS");
  }

  function hideAllbars () {
    for (let i = 0; i < setButtonArray.length; i++) {
      hideBar(setButtonArray[i])
    }
  }

  function reset () {
    // Reset all timers
    clearTimeout()

    // Hide all boxex
    hideAllbars()

    // Reset conclusion view
    setConclusion('null')

    // Hide Start button
    setStartButton('null')
  }

  function barPressed1 () {
    // Show Circle image
    showCircle(setButton1)
    // Cancel countdown
    clearTimeout(id1)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed2 () {
    // Show Circle image
    showCircle(setButton2)
    // Cancel countdown
    clearTimeout(id2)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed3 () {
    // Show Circle image
    showCircle(setButton3)
    // Cancel countdown
    clearTimeout(id3)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed4 () {
    // Show Circle image
    showCircle(setButton4)
    // Cancel countdown
    clearTimeout(id4)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed5 () {
    // Show Circle image
    showCircle(setButton5)
    // Cancel countdown
    clearTimeout(id5)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed6 () {
    // Show Circle image
    showCircle(setButton6)
    // Cancel countdown
    clearTimeout(id6)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed7 () {
    // Show Circle image
    showCircle(setButton7)
    // Cancel countdown
    clearTimeout(id7)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed8 () {
    // Show Circle image
    showCircle(setButton8)
    // Cancel countdown
    clearTimeout(id8)
    // increase Score
    setScore(Score + 1)
  }

  function barPressed9 () {
    // Show Circle image
    showCircle(setButton9)
    // Cancel countdown
    clearTimeout(id9)
    // increase Score
    setScore(Score + 1)
  }

  function level1 () {
    restart()
    setRestart('visible')
    setLevelShown('1')
    const min = 3000
    const max = 10000
    console.log('Level 1')
    startGame(min, max)
  }

  function level2 () {
    setLevelShown('2')
    const min = 2750
    const max = 9000
    console.log('Level 2')
    startGame(min, max)
  }

  function level3 () {
    setLevelShown('3')
    const min = 2500
    const max = 8000
    console.log('Level 3')
    startGame(min, max)
  }

  function level4 () {
    setLevelShown('4')
    const min = 2250
    const max = 7000
    console.log('Level 4')
    startGame(min, max)
  }

  function level5 () {
    setLevelShown('5')
    const min = 2000
    const max = 6000
    console.log('Level 5')
    startGame(min, max)
  }

  function level6 () {
    setLevelShown('6')
    const min = 1750
    const max = 5000
    console.log('Level 6')
    startGame(min, max)
  }

  function level7 () {
    setLevelShown('7')
    const min = 1500
    const max = 4000
    console.log('Level 7')
    startGame(min, max)
  }

  function level8 () {
    setLevelShown('8')
    const min = 1250
    const max = 3000
    console.log('Level 8')
    startGame(min, max)
  }

  function level9 () {
    setLevelShown('9')
    const min = 1000
    const max = 2000
    console.log('Level 9')
    startGame(min, max)
  }

  function level10 () {
    setLevelShown('10')
    const min = 1000
    const max = 2000
    console.log('Level 10')
    startGame(min, max)
  }

  function level11 () {
    setLevelShown('11')
    const min = 1000
    const max = 2000
    console.log('Level 11')
    startGame(min, max)
  }

  function retryLevel () {
    // Take current int value from level mostrato
    const thisLevel = parseInt(LevelShown)

    if (thisLevel === 1) {
      level1()
    } if (thisLevel === 2) {
      level2()
    } if (thisLevel === 3) {
      level3()
    } if (thisLevel === 4) {
      level4()
    } if (thisLevel === 5) {
      level5()
    } if (thisLevel === 6) {
      level6()
    } if (thisLevel === 7) {
      level7()
    } if (thisLevel === 8) {
      level8()
    } if (thisLevel === 9) {
      level9()
    } if (thisLevel === 10) {
      level10()
    } if (thisLevel === 11) {
      level11()
    }
  }

  function nextLevel () {
    // Take current int value from level mostrato
    const thisLevel = parseInt(LevelShown)

    // Increase the level
    setLevelShown(thisLevel + 1)

    if (thisLevel === 1) {
      level2()
    } if (thisLevel === 2) {
      level3()
    } if (thisLevel === 3) {
      level4()
    } if (thisLevel === 4) {
      level5()
    } if (thisLevel === 5) {
      level6()
    } if (thisLevel === 6) {
      level7()
    } if (thisLevel === 7) {
      level8()
    } if (thisLevel === 8) {
      level9()
    } if (thisLevel === 9) {
      level10()
    } if (thisLevel === 10) {
      level11()
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
        showBar(setButtonArray[i])
      }, random[i] / 2)
    }

    // Show Bar image
    for (let i = 0; i < setButtonArray.length; i++) {
      setDelayShowBar(i)
    }

    id1 = setTimeout(() => {
      // Show Cross image
      showCross(setButton1)
      cross++
    }, random[0])

    id2 = setTimeout(() => {
      // Show Cross image
      showCross(setButton2)
      cross++
    }, random[1])

    id3 = setTimeout(() => {
      // Show Cross image
      showCross(setButton3)
      cross++
    }, random[2])

    id4 = setTimeout(() => {
      // Show Cross image
      showCross(setButton4)
      cross++
    }, random[3])

    id5 = setTimeout(() => {
      // Show Cross image
      showCross(setButton5)
      cross++
    }, random[4])

    id6 = setTimeout(() => {
      // Show Cross image
      showCross(setButton6)
      cross++
    }, random[5])

    id7 = setTimeout(() => {
      // Show Cross image
      showCross(setButton7)
      cross++
    }, random[6])

    id8 = setTimeout(() => {
      // Show Cross image
      showCross(setButton8)
      cross++
    }, random[7])

    id9 = setTimeout(() => {
      // Show Cross image
      showCross(setButton9)
      cross++
    }, random[8])

    setTimeout(() => {
      if (cross === 0) {
        console.log('YOU WIN!')

        // Show "YOU WIN!"
        setConclusion('win')

        // Change button to go to the next level
        setStartButton('Next')
      } else {
        console.log('YOU LOSE!')

        // Show 'YOU LOSE!'
        setConclusion('lose')

        // Change button to retry the level
        setStartButton('Retry')

        // Set Score
        setScore(Score)
      }
      console.log('Score = ' + Score)
      console.log('------------')
    }, Math.max.apply(null, random))
  }

  return (
    <View onload={reset} title="Screen" style={{ alignItems: 'center', paddingTop: '30%' }}>
        <View title="Column" style={{ flexDirection: 'column', justifyContent: 'space-around' }}>

          {/* RESTART BUTTON */}
          {Restart === 'invisible' && null}
          {Restart === 'visible' && <View style={styles.button}><Text style={styles.white} onPress={restart}>RESTART</Text></View>}

          {/* SCORE BUTTON */}
          <View style={styles.button}><Text style={styles.white}>SCORE: {Score}</Text></View>

          {/* LEVEL BUTTON */}
          <View>
            {LevelShown === '1' && <View style={styles.button}><Text style={styles.white}>LEVEL 1</Text></View>}
            {LevelShown === '2' && <View style={styles.button}><Text style={styles.white}>LEVEL 2</Text></View>}
            {LevelShown === '3' && <View style={styles.button}><Text style={styles.white}>LEVEL 3</Text></View>}
            {LevelShown === '4' && <View style={styles.button}><Text style={styles.white}>LEVEL 4</Text></View>}
            {LevelShown === '5' && <View style={styles.button}><Text style={styles.white}>LEVEL 5</Text></View>}
            {LevelShown === '6' && <View style={styles.button}><Text style={styles.white}>LEVEL 6</Text></View>}
            {LevelShown === '7' && <View style={styles.button}><Text style={styles.white}>LEVEL 7</Text></View>}
            {LevelShown === '8' && <View style={styles.button}><Text style={styles.white}>LEVEL 8</Text></View>}
            {LevelShown === '9' && <View style={styles.button}><Text style={styles.white}>LEVEL 9</Text></View>}
            {LevelShown === '10' && <View style={styles.button}><Text style={styles.white}>LEVEL 10</Text></View>}
            {LevelShown === '11' && <View style={styles.button}><Text style={styles.white}>LEVEL 11</Text></View>}
          </View>

          {/* START GAME BUTTON */}
          <View>
            {StartButton === 'null' && <View style={styles.button}><Text style={styles.white}>TOUCH THE BARS!</Text></View>}
            {StartButton === 'Start' && <View style={styles.button}><Text style={styles.white} onPress={level1}>START</Text></View>}
            {StartButton === 'Next' && <View style={styles.button}><Text style={styles.white} onPress={nextLevel}>NEXT LEVEL</Text></View>}
            {StartButton === 'Retry' && <View style={styles.button}><Text style={styles.white} onPress={retryLevel}>RETRY LEVEL</Text></View>}
          </View>

          {/* MATRIX BUTTONS */}
          <View title="Row1" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              {Button1 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button1 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed1} />}
              {Button1 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button1 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button2 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button2 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed2} />}
              {Button2 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button2 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button3 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button3 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed3} />}
              {Button3 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button3 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
          </View>
          <View title="Row2" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            <View>
              {Button4 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button4 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed4} />}
              {Button4 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button4 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button5 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button5 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed5} />}
              {Button5 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button5 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button6 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button6 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed6} />}
              {Button6 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button6 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
          </View>
          <View title="Row3" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            <View>
              {Button7 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button7 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed7} />}
              {Button7 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button7 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button8 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button8 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed8} />}
              {Button8 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button8 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
            <View>
              {Button9 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
              {Button9 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed9} />}
              {Button9 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
              {Button9 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            </View>
          </View>

          {/* RESULT BUTTON */}
          <View>
            {Conclusion === 'null' && <View style={styles.button}><Text style={styles.white}></Text></View>}
            {Conclusion === 'win' && <View style={styles.button}><Text style={styles.white}>YOU WIN!</Text></View>}
            {Conclusion === 'lose' && <View style={styles.button}><Text style={styles.white}>YOU LOSE!</Text></View>}
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
    fontSize: 32,
    fontFamily: 'JockeyOne-Regular'
  },
  image: {
    width: 100,
    height: 100
  }
})
