import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View ,Image, ToastAndroid} from 'react-native'
import React from 'react'
import i1 from "../../assets/images/father.jpg"
import i2 from "../../assets/images/mother.jpg"
import i3 from "../../assets/images/sister.jpg"
import i4 from "../../assets/images/brother.jpg"
import i5 from "../../assets/images/idiot.png"

const Wishes = () => {

  const Toast = () => {
    ToastAndroid.show("Refreshed",
      ToastAndroid.SHORT
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{color:'red', fontWeight:'bold', fontSize:30,marginLeft:20}}>Birthday Wishes</Text>
          <TouchableOpacity onPress={Toast} style={styles.refreshBtn}>
            <Text style={{color:'white'}}>Refresh</Text>
          </TouchableOpacity>
      </View>
      <FlatList
      data = {[
        {
          name :"Sadashiva",
          image : i1,
          message: "Happy Birthday, my little princess! 👑🎉 You have always been the brightest star in my life, filling my world with joy and pride! 🌟 May you always stay strong, kind, and successful in everything you do! 💖 Love you forever, my dear! 🤗🎂"
        },
        {
          name :"Savitha",
          image : i2,
          message: "Happy Birthday, my precious angel! 🎂🎈 From the moment you were born, you brought endless love and happiness into my life. 🌸 May you always be surrounded by love, success, and good health! 💕 No matter how big you grow, you’ll always be my little girl! 🤗🎁"
        },
        {
          name :"Brunda",
          image : i3,
          message: "Happy Birthday, my partner-in-crime! 🎉🎂 Life wouldn’t be the same without our crazy talks, fun fights, and endless memories! 🤪😂 I’m so lucky to have you as my sister and best friend! 💖 May your day be filled with love, laughter, and all the happiness you deserve! 💫🎁"
        },
        {
          name :"Srikanth",
          image : i4,
          message: "Happy Birthday to the best sister ever! 🎂🥳 You’re not just my sister, you’re my first friend and forever protector! 💪😌 Thank you for always being there for me, even when I annoy you! 😆 Wishing you a day as awesome and beautiful as you are! 🎉"
        },
        {
          name :"Idiot",
          image : i5,
          message: "Isn't the moon🌕 beautiful❤️‍🔥 Dabba Girl!!"
        },
      ]}
      renderItem={({item}) => (
        <View key={item.key} style={styles.wishes}>
          <Image resizeMode={item.name == "Idiot" ? "cover" : "contain"} source={item.image} style={{width:60, height:60, borderRadius:40}}/>
          <View style={styles.wishMsg}>
            <Text style={{fontWeight:'700', fontSize:20}}>{item.name}</Text>
            <Text style={{ extAlign:'justify',lineHeight:20}}>{item.message}</Text>
          </View>
        </View>
  )}
      />
    </View>
  )
}

export default Wishes

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:'white'
  },
  top:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20
  },
  refreshBtn:{
    backgroundColor:'green',
    paddingHorizontal:10,
    paddingVertical:7,
    borderRadius:5,
    marginRight:10
  },
  wishes:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'',
    gap:20,
    margin:10,
    flexWrap:'nowrap',
    padding:10,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    borderColor:'red',
    borderWidth:1
  },
  wishMsg:{
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flexWrap:'wrap',
    gap:10,
    width:270,
  }
})