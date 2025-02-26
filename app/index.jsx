import React,{useEffect} from 'react';
import {ImageBackground,Animated ,StyleSheet,View, Text, TouchableNativeFeedback, ViewComponent, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import coffee from "../assets/images/coffee.jpg"
import { useRouter } from 'expo-router';
import { Platform } from 'react-native';



const App = () => {

  const router = useRouter()
  const fadeAnim = new Animated.Value(0); // Initial opacity: 0

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000, // 2 seconds
      useNativeDriver: true,
    }).start(() => {
      // Navigate to Home after 3 seconds
      setTimeout(() => router.push('/(tabs)/home'), 1000);
    });
  }, [fadeAnim, router]);
  return(

  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={coffee} resizeMode="cover" style={styles.image}>
        <Animated.View style={{ opacity: fadeAnim }}> 
        <Text style={styles.text}>Welcome Coffee!❤️‍🔥</Text>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  image: {
    flex:1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    paddingHorizontal:20
  },

});

export default App;