import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';

export default function Header() {
          const route = useRoute()
          const navigation = useNavigation()
          return (<View style={styles.header}>
                    <TouchableNativeFeedback
                              accessibilityRole="button"
                              background={TouchableNativeFeedback.Ripple('#c9c5c5', true)}
                              onPress={() => navigation.openDrawer()}
                    >
                              <View style={{width: 30, height: 30, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                                        <Feather name="menu" size={24} color="#777" />
                              </View>
                    </TouchableNativeFeedback>
                    <Text style={styles.brandName}>RN Posts</Text>
                    <TouchableNativeFeedback
                              accessibilityRole="button"
                              background={TouchableNativeFeedback.Ripple('#c9c5c5', true)}
                    >
                              <View style={{width: 35, height: 35, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                                        <EvilIcons name="search" size={30} color="#777" />
                              </View>
                    </TouchableNativeFeedback>
          </View>)
}