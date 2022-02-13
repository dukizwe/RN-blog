import React, { useState} from 'react'
import { Text, View, TouchableOpacity, TouchableNativeFeedback, Image, Linking } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem,  } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';


export default function DrawerContent (props ) {
          const navigation = useNavigation()
          return (<View style={{flex: 1}}>
                    <DrawerContentScrollView>
                              <View styles={styles.drawerSection}>
                                        <View style={styles.drawerHeader}>
                                                  <Text style={styles.appText}>RN Posts</Text>
                                        </View>
                                        <DrawerItem label="Sign in" icon={({ focused, size, color}) => {
                                                  return <MaterialCommunityIcons name="login" size={24} color="black" />
                                        }} />
                                        <DrawerItem label="Register" icon={({ focused, size, color}) => {
                                                  return <AntDesign name="adduser" size={24} color="black" />
                                        }} />
                              </View>
                    </DrawerContentScrollView>
          </View>)
}