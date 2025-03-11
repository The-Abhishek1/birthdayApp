import React, { useState, useEffect } from 'react';
import { View, ImageBackground,Image,Text, StyleSheet,FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import banner from "../../assets/images/banner.jpg"
import ConfettiCannon from 'react-native-confetti-cannon';
import b from "../../assets/images/b27.jpg"
import * as Animatable from 'react-native-animatable';
import { BlurView } from 'expo-blur';
import b1 from "../../assets/images/back.jpg"
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import i4 from "../../assets/images/g4.jpg"
import i5 from "../../assets/images/g5.png"
import i6 from "../../assets/images/g6.jpg"
import i7 from "../../assets/images/g7.jpg"
import i8 from "../../assets/images/g8.jpg"
import i9 from "../../assets/images/g9.webp"
import i10 from "../../assets/images/g10.jpg"
import i11 from "../../assets/images/g11.jpg"
import i12 from "../../assets/images/g12.jpg"
import i13 from "../../assets/images/g13.jpg"
import i14 from "../../assets/images/g14.jpg"
import i15 from "../../assets/images/g15.jpg"
import i16 from "../../assets/images/g16.jpg"
import last from "../../assets/images/last.png"

const Home = () => {

  useEffect(()=>{
    const showToast = () => {
      ToastAndroid.show("Happy Birthday Gorilla😂☕🦍",
        ToastAndroid.LONG,
        ToastAndroid.TOP
      )
    }
  showToast()

  },[])

  return (
    <>
      <ImageBackground source={b1} style={{ padding:20,flex:1, alignItems:'center', justifyContent:'center'}} resizeMode="cover">
        <View style={{flexDirection:'column', marginTop:70, gap:20, alignItems:'center', justifyContent:'center'}}>
          <Animatable.Text animation='flash' easing="ease-in-out-cubic" style={{color:'red', fontSize:27, textAlign:'center',fontFamily:"DancingScript-Regular",  
            textShadowColor: 'rgb(211, 16, 16)',
          textShadowOffset: {width: -4, height: 4},
          textShadowRadius: 10,
          fontWeight:'bold',
          textTransform:'uppercase'}}>
            Happy Birthday Coffee!!
          </Animatable.Text>
          <View style={{flexDirection:'column',gap:10, justifyContent:'center', alignItems:'center'}}>
            <Animatable.Image animation='zoomIn' resizeMode='contain' source={b} style={styles.img}/>
            <Animatable.Text animation='fadeIn' easing="ease-out" style={{color:'black', fontSize:17, textAlign:'center',fontFamily:"DancingScript-Regular", lineHeight:23,  
            textShadowColor: 'rgba(58, 58, 58, 0.64)',
          textShadowOffset: {width: -3, height: 3},
          textShadowRadius: 10}}>
            You’re the sweetest bug in my code, the breakpoint to my chaos! 💕, Wishing you 
            <Animatable.Text style={{color:'red', 
            textShadowColor: 'rgba(255, 83, 83, 0.64)',
          textShadowOffset: {width: -3, height: 3},
          textShadowRadius: 10}}> if (happiness && love) (return forever;)💖.</Animatable.Text> May your day be filled with warmth, joy, and all things caffeinated! 🦍✨
            </Animatable.Text>
          </View>
            <FlatList
            horizontal={true}
        data = {[
          {
            image : i4,
          },
          {
            image : i5,
          },
          {
            image : i6,
          },
          {
            image : i8,
          },
          {
            image : i12,
          },
          {
            image : i16,
          },
          {
            image : i9,
          },
          {
            image : i14,
          },
          {
            image : i15,
          },
          {
            image : i10,
          },
          {
            image : i11,
          },
          {
            image : i13,
          },
          {
            image : i7,
          },
          {
            image : last,
          },
        ]}
        renderItem = {({item}) => (
          <View style={{alignItems:'center', justifyContent:'center',gap:10, padding:10, margin:10,borderColor:"red", borderWidth:.5, height:300,}} key={item.key}>
            <Image style={{width:250,height:250, borderTopLeftRadius:50, borderBottomRightRadius:50}} resizeMode='cover' source={item.image}/>
            {/* <View style={{width:250}}>
              <Text style={{textAlign:'center', fontSize:17}}>{item.message}</Text>
            </View> */}
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', gap:20}}>
              <Ionicons name= "arrow-undo-circle" color='red' size={24} />
              <Text style={{fontSize:17}}>Slide</Text>
              <Ionicons name= "arrow-redo-circle" color='red' size={24} />
            </View>
          </View>
    )}
        />
        </View>
        <ConfettiCannon
        style ={styles.confetti}
          count={200}
          origin={{x: 30, y: 510}}
          autoStart={true}
        />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  confetti:{
    position:'absolute',
    top:0,
    zIndex:1000
  },
  img:{
    width:300,
    height:200,
  }
  
});

export default Home;