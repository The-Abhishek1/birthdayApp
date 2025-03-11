import { View, Text } from 'react-native'
import React from 'react'
import video from "../assets/videos/wish.mp4"
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { TouchableHighlight } from 'react-native';
import { useRouter } from 'expo-router';

const Song = () => {
  const router = useRouter()

  const player = useVideoPlayer(video, player => {
    player.play()
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });


  return (
    <>
     <VideoView style={{flex:1, backgroundColor:'white'}} player={player} allowsFullscreen allowsPictureInPicture />
     <TouchableHighlight activeOpacity={0.6}
  underlayColor="#DDDDDD"
      onPress={() => {
      player.pause()
        router.push('/(tabs)/home')
      }}
      style={{ paddingVertical:10, borderRadius:5,position:'absolute', zIndex:1000, bottom:30,backgroundColor:'red', paddingHorizontal:20, alignItems:'center', alignSelf:'center', justifyContent:'center', flexDirection:'column'}}>
      <Text style={{color:'white', fontSize:17}}>Ready! Hold your Breath!!</Text>
     </TouchableHighlight>
    </>
  )    
}

export default Song