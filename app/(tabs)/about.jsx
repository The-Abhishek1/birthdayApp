import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';
import me from "../../assets/images/idiot.png"
import funny from "../../assets/images/funny.jpg"

const About = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{flexDirection:'column', alignItems:'center'}}>
        <Image source={funny} style={{width:350, height:300, marginTop:-30}} resizeMode='center'/>
      </View>
      <View  style={styles.profileimg}>
        <Image resizeMode='cover' source={me} style={{width:100, height:100, borderRadius:50}}/>
        <View style={{flexDirection:'column', gap:10}}>
          <View style={{flexDirection:'row', gap:10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Name:</Text>
            <Text style={{fontSize:20}}>Abhishek Gowda</Text>
          </View>
          <View style={{flexDirection:'row', gap:10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Address:</Text>
            <Text style={{fontSize:20}}>103.1.12.10</Text>
          </View>
          <View style={{flexDirection:'row', gap:10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>NickName:</Text>
            <Text style={{fontSize:20}}>Idiot (only to her)</Text>
          </View>
        </View>
      </View>
      <View style={{padding:5
      }}>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}>
          Hii gorilla😂🦍 Sorry, I know I'm an Idiot, but what to do I grow up like this.
          Happy 22nd Birthday coffee❤️‍🔥, You are a <Text style={{color:'purple'}}>certified AUNTY</Text> now 🙈.
        </Text>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}> Abey yaar I'm getting
          a feeling to write a love letter, but I'm pretty bad in that, got rejected by you more than 5 times
          but never thought of giving up, never ever, <Text style={{color:'red'}}>Yeah I failed in love❤️ but 
          never failed at loving you!!!</Text></Text>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}>
        To be successful in love a boy should make a girl to understand his feelings, if it fails
          he should understand her, I failed to make you understand my feelings, so trying to understand your
          feelings.
        </Text>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}>
          Sorry coffee☕ I don't know what's your life's status now, may be I'm troubling you, I 
          Apologize for that, but don't know I'll get a chance to wish you next year or not,
          so risk is better than regreting just as you say <Text style={{color:'skyblue'}}>Satisfaction is better than perfection!!!</Text>
        </Text>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}>
          Date 25-02-2025 (your sister's anniversery, blocked so unable to wish...)
          Time 9:32:37(sec) preparing this app to wish on birthday, funny right
          but it's my life question 😂, waiting for you to unblock me, I know you won't, but
          I'm not the type of boy who asks to unblock, I can wait for you forever(sorry untill my
          death no false promise) 🤣🤣.
        </Text>
        <Text style={{fontSize:17, paddingHorizontal:20, padding:10,lineHeight:25 ,}}>
          I'm feeling like I should explain you in Kannada just like 
          <Text style={{color:'red'}}> "ನಾ ನಿನಗೆ, ನೀನೆನಗೆ  ಜೇನಾಗುವಾ…
          ರಸದೇವ ಗಂಗೆಯಲಿ ಮೀನಾಗುವ, ಹೂವಾಗುವ,  ಹಣ್ಣಾಗುವ,  ಪ್ರತಿರೂಪಿ ಭಗವತಿಗೆ ಮುಡಿಪಾಗುವ"💖 </Text>
          (sorry it's copied😁 but my feeling are true) I stop it here, I have till April 11, 11:59, I'll 
          think and continue....! (Break Time😴)
        </Text> 
      </View>
    </View>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:10,
    flexDirection:'column',
    gap:10
  },
  profileimg:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    marginTop:-30
  }
})