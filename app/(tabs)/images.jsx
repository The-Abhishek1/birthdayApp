import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View ,Image, ToastAndroid} from 'react-native'
import React from 'react'
import i1 from "../../assets/images/b1.jpg"
import i2 from "../../assets/images/b2.jpg"
import i3 from "../../assets/images/b3.jpg"
import i5 from "../../assets/images/b5.jpg"
import i6 from "../../assets/images/b6.jpg"
import i7 from "../../assets/images/b7.jpg"
import i8 from "../../assets/images/b8.jpg"
import i9 from "../../assets/images/b9.jpg"
import i10 from "../../assets/images/b10.jpg"
import i11 from "../../assets/images/b11.jpg"
import i12 from "../../assets/images/b12.jpg"
import i13 from "../../assets/images/b13.jpg"
import i14 from "../../assets/images/b14.jpg"
import i15 from "../../assets/images/b15.jpg"
import i16 from "../../assets/images/b16.jpg"
import i17 from "../../assets/images/b17.jpg"
import i18 from "../../assets/images/b18.jpg"
import i19 from "../../assets/images/b19.jpg"
import i20 from "../../assets/images/b20.jpg"
import i21 from "../../assets/images/b21.jpg"
import i22 from "../../assets/images/b22.jpg"
import i23 from "../../assets/images/b23.jpg"
import i24 from "../../assets/images/b24.jpg"
import i25 from "../../assets/images/b25.jpg"
import i26 from "../../assets/images/b26.jpg"
import i28 from "../../assets/images/b28.jpg"

const Images = () => {

  const Toast = () => {
    ToastAndroid.show("Refreshed",
      ToastAndroid.SHORT
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{color:'red', fontWeight:'bold', fontSize:22, marginLeft:20}}>Freeze the Fun! 😂📸</Text>
          <TouchableOpacity onPress={Toast} style={styles.refreshBtn}>
            <Text style={{color:'white'}}>Refresh</Text>
          </TouchableOpacity>
      </View>
      <FlatList
      data = {[
        {
          image : i2,
          message: "That smile could probably fix a thousand bugs in my life’s code! ❤️ Her grin is like a ray of sunshine, spreading warmth and joy wherever she goes! ✨"
        },
        {
          image : i8,
          message: "Caution: This picture might give you caffeine cravings! ☕ The only thing sweeter than that coffee cup is the one holding it! ❤️"
        },
        {
          image : i10,
          message: "When you think you’re looking away, but the camera catches your inner diva! She’s got the natural charm that makes every candid click look like a magazine cover! 🌟"
        },
        {
          image : i7,
          message: "Explorer mode: ON! Whether it’s a new place or a new experience, she’s always ready to take the leap! Her life’s mantra: “Collect moments, not things.” ✨"
        },
        {
          
          image : i15,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          
          image : i13,
          message: "If food was a love language, she’d be fluent! 😂 Just look at that pure joy while enjoying her favorite treats—proof that good food = good mood! 🍔❤️"
        },
        {
          
          image : i11,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          image : i5,
          message: "That smile could probably fix a thousand bugs in my life’s code! ❤️ Her grin is like a ray of sunshine, spreading warmth and joy wherever she goes! ✨"
        },
        {
          image : i9,
          message: "Caution: This picture might give you caffeine cravings! ☕ The only thing sweeter than that coffee cup is the one holding it! ❤️"
        },
        {
          image : i3,
          message: "When you think you’re looking away, but the camera catches your inner diva! She’s got the natural charm that makes every candid click look like a magazine cover! 🌟"
        },
        {
          image : i6,
          message: "Explorer mode: ON! Whether it’s a new place or a new experience, she’s always ready to take the leap! Her life’s mantra: “Collect moments, not things.” ✨"
        },
        {
          
          image : i16,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          
          image : i17,
          message: "If food was a love language, she’d be fluent! 😂 Just look at that pure joy while enjoying her favorite treats—proof that good food = good mood! 🍔❤️"
        },
        {
          
          image : i19,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          image : i20,
          message: "That smile could probably fix a thousand bugs in my life’s code! ❤️ Her grin is like a ray of sunshine, spreading warmth and joy wherever she goes! ✨"
        },
        {
          image : i21,
          message: "Caution: This picture might give you caffeine cravings! ☕ The only thing sweeter than that coffee cup is the one holding it! ❤️"
        },
        {
          image : i22,
          message: "When you think you’re looking away, but the camera catches your inner diva! She’s got the natural charm that makes every candid click look like a magazine cover! 🌟"
        },
        {
          image : i23,
          message: "Explorer mode: ON! Whether it’s a new place or a new experience, she’s always ready to take the leap! Her life’s mantra: “Collect moments, not things.” ✨"
        },
        {
          
          image : i25,
          message: "If food was a love language, she’d be fluent! 😂 Just look at that pure joy while enjoying her favorite treats—proof that good food = good mood! 🍔❤️"
        },
        {
          
          image : i26,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          
          image : i18,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
        {
          
          image : i28,
          message: "When your TBR pile is as high as your ambitions! She dives into books like a coder into lines of code, always seeking knowledge and wisdom! 📖✨"
        },
      ]}
      renderItem = {({item}) => (
        <View style={styles.imgcollection} key={item.key}>
          <Image style={styles.img} resizeMode='cover' source={item.image}/>
          <View style={{width:300}}>
            <Text style={{textAlign:'center', fontSize:17}}>{item.message}</Text>
          </View>
        </View>
  )}
      />
    </View>
  )
}

export default Images

const styles = StyleSheet.create({
  img:{
    width:330,
    height:550,
    borderRadius:20,
  },
  imgcollection:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:15,
    borderWidth:0.5,
    margin:5,
    padding:5,
    paddingVertical:35,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
    borderColor:'red',
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
    marginBottom:10
  },
  refreshBtn:{
    backgroundColor:'green',
    paddingHorizontal:10,
    paddingVertical:7,
    borderRadius:5,
    marginRight:10
  },

})