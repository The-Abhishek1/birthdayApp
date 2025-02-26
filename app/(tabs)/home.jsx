import React, { useState, useEffect } from 'react';
import { View, ImageBackground,Image,Text, StyleSheet, TouchableOpacity, Animated, ToastAndroid } from 'react-native';
import banner from "../../assets/images/banner.jpg"
import ConfettiCannon from 'react-native-confetti-cannon';
import b1 from "../../assets/images/b8.jpg"
import * as Animatable from 'react-native-animatable';

const Home = () => {
  
  const [secondsLeft, setSecondsLeft] = useState(getSecondsUntilBirthday());
  
  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  // Convert seconds to days, hours, mins, secs
  const Days = () => {
    return Math.floor(secondsLeft / (3600 * 24))
  };
  const Hours = ()=>{
    return  Math.floor((secondsLeft % (3600 * 24)) / 3600)
  }
  const Minutes = () =>{
    return  Math.floor((secondsLeft % 3600) / 60)
  }
  const Seconds = () =>{
    return  Math.floor(secondsLeft % 60)
  }
  const showToast = () => {
    ToastAndroid.show("Happy Birthday Gorilla😂😂🦍",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <View style={styles.insidecountdown}>
          <Text style={styles.ctext}>Days</Text>
          <Text style={styles.countdownText}>{Days()}</Text>
        </View>
        <View style={styles.insidecountdown}>
          <Text style={styles.ctext}>Hours</Text>
          <Text style={styles.countdownText}>{Hours()}</Text>
        </View>
        <View style={styles.insidecountdown}>
          <Text style={styles.ctext}>Minutes</Text>
          <Text style={styles.countdownText}>{Minutes()}</Text>
        </View>
        <View style={styles.insidecountdown}>
          <Text style={styles.ctext}>Seconds</Text>
          <Text style={styles.countdownText}>{Seconds()}</Text>
        </View>
      </View>
      <ImageBackground source={banner}  resizeMode="cover" style={styles.banner}>
        <Image resizeMode='cover' source={b1} style={styles.bindu}/>
        <View style={{width:240, marginTop:260, marginBottom:20}}>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{color:'red', fontSize:17, textAlign:'center',fontFamily:"DancingScript-Regular", lineHeight:23}}>
          You’re the sweetest bug in my code, the breakpoint to my chaos! 💕 Wishing you <Animatable.Text style={{color:'blue'}}>if (happiness && love) (return forever;)💖</Animatable.Text> May your day be filled with warmth, joy, and all things caffeinated! 🦍✨ You make my life’s syntax perfect, and my heart’s program run smoothly! 🥰
          </Animatable.Text>
        </View>
        <ConfettiCannon
        style ={styles.confetti}
          count={200}
          origin={{x: 10, y: 10}}
          autoStart={true}
        /> 
      </ImageBackground>
    
    </View>
  );
};

// Helper to calculate seconds until Bindu's birthday
const getSecondsUntilBirthday = () => {
  const birthday = new Date('2025-04-12T00:00:00'); // Adjust this date!
  const now = new Date();
  const diff = (birthday - now) / 1000; // Seconds difference
  return Math.max(diff, 0); // Ensure no negative
};

const styles = StyleSheet.create({
  confetti:{
    position:'absolute',
    top:0,
    zIndex:1000
  },
  bindu:{
    width:230,
    height:250,
    position:"absolute",
    top:120,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30
  },
  confettiBtn:{
    backgroundColor:'red',
    padding:10
  },
  container: {
    backgroundColor: 'white',
    flex:1,
    padding:10
  },
  banner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  countdownContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:25,
    paddingVertical:20,
  },
  insidecountdown:{
    flexDirection:'column',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    paddingHorizontal:20
  },
  countdownText: {
    color:"white",
    fontWeight:'bold',
    fontSize:30
  },
  birthday:{
    flexDirection:'row',
    position:"absolute",
    top:140,
    alignItems:'center',
    gap:2
  },
  wish:{
    fontWeight:'bold',
    fontStyle:"italic",
    fontSize:30
  },
  emoji:{
    fontSize:30
  }
  
});

export default Home;