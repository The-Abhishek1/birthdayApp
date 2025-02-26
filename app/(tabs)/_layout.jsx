import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'red',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: 'white',
      tabBarStyle: {
      backgroundColor: 'white',    
      },
    }}
    >  
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
         
        }}
      />
      <Tabs.Screen
        name="wishes"
        options={{
          title: 'Wishes',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="images"
        options={{
          title: 'Images',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'image-sharp' : 'image-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'videocam-sharp' : 'videocam-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
