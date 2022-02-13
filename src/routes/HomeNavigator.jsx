import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Header from '../components/Header/Header'
import HomeScreen from '../screens/HomeScreen'
import PostScreen from '../screens/PostScreen'
import UserPostsScreen from '../screens/UserPostsScreen'

const Stack = createNativeStackNavigator()
export default function HomeNavigator() {
          return (
                    <Stack.Navigator screenOptions={{header: () => <Header />}}>
                              <Stack.Screen name="Home" component={HomeScreen} />
                              <Stack.Screen name="PostScreen" component={PostScreen} options={{ headerShown: false }} />
                              <Stack.Screen name="UserPostsScreen" component={UserPostsScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
          )
}