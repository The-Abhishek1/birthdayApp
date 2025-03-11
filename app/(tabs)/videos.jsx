import { FlatList, StatusBar,Button, StyleSheet, Text, TouchableOpacity, View ,Image, ToastAndroid, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import v1 from "../../assets/videos/bindu1.mp4"
import v2 from "../../assets/videos/bindu2.mp4"
import v3 from "../../assets/videos/bindu3.mp4"
import v4 from "../../assets/videos/bindu4.mp4"
import v5 from "../../assets/videos/bindu5.mp4"
import v6 from "../../assets/videos/bindu6.mp4"
import v7 from "../../assets/videos/bindu7.mp4"
import v8 from "../../assets/videos/bindu8.mp4"
import v9 from "../../assets/videos/bindu9.mp4"
import v10 from "../../assets/videos/bindu10.mp4"
import v11 from "../../assets/videos/bindu11.mp4"
import v12 from "../../assets/videos/bindu12.mp4"
import v13 from "../../assets/videos/bindu13.mp4"
import v14 from "../../assets/videos/bindu14.mp4"
import v15 from "../../assets/videos/bindu15.mp4"
import v16 from "../../assets/videos/bindu16.mp4"
import v17 from "../../assets/videos/bindu17.mp4"
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
const Videos = () => {




  const Toast = () => {
    ToastAndroid.show("Refreshed",
      ToastAndroid.SHORT
    )
  }

  //Player1
  const player1 = useVideoPlayer(v1);
  //Player2
  const player2 = useVideoPlayer(v2);
  //Player3
  const player3 = useVideoPlayer(v3);
  //Player4
  const player4 = useVideoPlayer(v4);
  //Player5
  const player5 = useVideoPlayer(v5);
  //Player6
  const player6 = useVideoPlayer(v6);
  //Player7
  const player7 = useVideoPlayer(v7);
  //Player8
  const player8 = useVideoPlayer(v8);
  //Player9
  const player9 = useVideoPlayer(v9);
  //Player10
  const player10 = useVideoPlayer(v10);
  //Player11
  const player11 = useVideoPlayer(v11);
  //Player12
  const player12 = useVideoPlayer(v12);
  //Player13
  const player13 = useVideoPlayer(v13);
  //Player14
  const player14 = useVideoPlayer(v14);
  //Player15
  const player15 = useVideoPlayer(v15);
  //Player16
  const player16 = useVideoPlayer(v16);
  //Player17
  const player17 = useVideoPlayer(v17);

  //Player2
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{color:'red', fontWeight:'bold', fontSize:22, marginLeft:20}}>Comedy Unleashed!😂🎬</Text>
          <TouchableOpacity onPress={Toast} style={styles.refreshBtn}>
            <Text style={{color:'white'}}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.whole}>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player4} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player3} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player2} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player5} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player10} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player9} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player13} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player12} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player15} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player1} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player16} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player17} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player7} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player14} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
          <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player8} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically />
          </View>
      </View>
      </View>
    </ScrollView>
  )
}

export default Videos

const styles = StyleSheet.create({
  whole:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
    borderWidth:0.2,
    borderColor:'black'
  },
  container:{
    flex:1,
    padding:10,
    backgroundColor:'white',
    marginTop:30
  },
  top:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
    marginBottom:10,
  },
  refreshBtn:{
    backgroundColor:'green',
    paddingHorizontal:10,
    paddingVertical:7,
    borderRadius:5,
    marginRight:10
  },

})