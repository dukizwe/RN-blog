import React from 'react'
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsTab from './PostsTab';
import UsersTab from './UsersTab';
import CommentsTab from './CommentsTab';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
          const screenOptions = {
                    tabBarPressColor: '#c9c5c5',
                    tabBarScrollEnabled: true,
                    tabBarLabelStyle: {
                              textTransform: 'none',
                              fontSize: 14
                    },
                    tabBarStyle: {
                              backgroundColor: '#f1f1f1',
                              elevation: 0,
                    },
                    tabBarIndicatorStyle: {
                    }
          }
          return (
                    <Tab.Navigator screenOptions={screenOptions}>
                              <Tab.Screen name='Posts' component={PostsTab} />
                              <Tab.Screen name='Users' component={UsersTab} />
                              <Tab.Screen name='Comments' component={CommentsTab} />
                    </Tab.Navigator>
          )
}