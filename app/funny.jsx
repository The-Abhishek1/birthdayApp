import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video';
import v1 from "../assets/videos/aunty.mp4"
import { ImageBackground } from 'react-native';
import b from "../assets/images/back.jpg"
import { useRouter } from 'expo-router';
const Funny = () => {

    const router = useRouter()
  
  
  const player = useVideoPlayer(v1);

  return (
    <ImageBackground style={{flex:1,alignItems:'center',justifyContent:'center'}} source={b} resizeMode="cover">
    <View style={styles.container}>
      <View style={{flexDirection:'column', gap:10, alignItems:'center',padding:10}}>
        <Text style={{textTransform:'uppercase', fontWeight:'bold', fontSize:30}}> Hii AUNTY🙈😂</Text>
        <Text style={{fontSize:20,textAlign:'center'}}>"When she blocks me, but I have 100 ways to get back.🔥😆"</Text>
      </View>
      <View style={styles.contentContainer}>
        <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
      </View>
      <TouchableOpacity onPress={() => {
        player.pause()
        router.push('/song')
      }} style={{backgroundColor:'red', paddingHorizontal:20, paddingVertical:10, borderRadius:5}}>
        <Text style={{color:'white'}}>Continue</Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
  )
}

export default Funny

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:30,
  },
  video: {
    width: 350,
    height: 275,
    borderWidth:0.2,
    borderColor:'black'
  },
})