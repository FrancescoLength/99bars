/* eslint-disable no-undef */
import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function App () {
  const [Level, setLevel] = useState('1')

  const [LevelShown, setLevelShown] = useState('0')

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
    setLevelShown('1')
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

  function level1 () {
    restart()
    setRestart('visible')
    const min = 3000
    const max = 10000
    console.log('Level 1')
    startGame(min, max)
  }

  function level2 () {
    const min = 2750
    const max = 9000
    console.log('Level 2')
    startGame(min, max)
  }

  function level3 () {
    const min = 2500
    const max = 8000
    console.log('Level 3')
    startGame(min, max)
  }

  function level4 () {
    const min = 2250
    const max = 7000
    console.log('Level 4')
    startGame(min, max)
  }

  function level5 () {
    const min = 2000
    const max = 6000
    console.log('Level 5')
    startGame(min, max)
  }

  function level6 () {
    const min = 1750
    const max = 5000
    console.log('Level 6')
    startGame(min, max)
  }

  function level7 () {
    const min = 1500
    const max = 4000
    console.log('Level 7')
    startGame(min, max)
  }

  function level8 () {
    const min = 1250
    const max = 3000
    console.log('Level 8')
    startGame(min, max)
  }

  function level9 () {
    const min = 1000
    const max = 2000
    console.log('Level 9')
    startGame(min, max)
  }

  function level10 () {
    const min = 1000
    const max = 2000
    console.log('Level 10')
    startGame(min, max)
  }

  function level11 () {
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
    // Increase the level
    setLevelShown(parseInt(LevelShown) + 1)

    // Take current int value from level mostrato
    const thisLevel = parseInt(LevelShown)

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

        // Show "YOU WIN!"
        setShouldShowColcusion('win')

        // Change button to go to the next level
        setLevel('Next')
      } else {
        console.log('YOU LOSE!')

        // Show 'YOU LOSE!'
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
        <View >
          {Level === 'null' && <View style={styles.button}><Text style={styles.white}>TOUCH THE BARS!</Text></View>}
          {Level === '1' && <View style={styles.button}><Text style={styles.white} onPress={level1}>START</Text></View>}
          {Level === 'Next' && <View style={styles.button}><Text style={styles.white} onPress={nextLevel}>NEXT LEVEL</Text></View>}
          {Level === 'Retry' && <View style={styles.button}><Text style={styles.white} onPress={retryLevel}>RETRY LEVEL</Text></View>}
        </View>

        <View title="Row1" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View >
            {shouldShow1 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow1 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed1} />}
            {shouldShow1 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow1 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
            {shouldShow2 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow2 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed2} />}
            {shouldShow2 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow2 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
          {shouldShow3 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow3 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed3} />}
            {shouldShow3 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow3 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
        </View>
        <View title="Row2" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <View >
            {shouldShow4 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow4 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed4} />}
            {shouldShow4 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow4 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
            {shouldShow5 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow5 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed5} />}
            {shouldShow5 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow5 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
            {shouldShow6 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow6 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed6} />}
            {shouldShow6 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow6 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
        </View>
        <View title="Row3" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <View >
            {shouldShow7 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow7 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed7} />}
            {shouldShow7 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow7 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
            {shouldShow8 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow8 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed8} />}
            {shouldShow8 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow8 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
          <View >
            {shouldShow9 === 'null' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
            {shouldShow9 === 'bar' && <Image style={styles.image} source={require('./assets/-_icon.png')} onTouchStart={barPressed9} />}
            {shouldShow9 === 'cross' && <Image style={styles.image} source={require('./assets/x_icon.png')} />}
            {shouldShow9 === 'circle' && <Image style={styles.image} source={require('./assets/o_icon.png')} />}
          </View>
        </View>
        <View >
          {shouldShowColcusion === 'null' && <View style={styles.button}><Text style={styles.white}></Text></View>}
          {shouldShowColcusion === 'win' && <View style={styles.button}><Text style={styles.white}>YOU WIN!</Text></View>}
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
  }
})
