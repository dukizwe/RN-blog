import React from 'react'
import { FlatList, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'
import useFetch from '../hooks/useFetch'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function UsersTab() {
          const [loadingUsers, users] = useFetch('https://gorest.co.in/public/v2/users')
          
          const User = ({ user }) => {
                    const navigation = useNavigation()
                    return (
                              <TouchableNativeFeedback
                                        onPress={() => navigation.navigate('UserPostsScreen', { user})}
                                        background={TouchableNativeFeedback.Ripple('#c9c5c5')}
                              >
                                        <View style={styles.userCont}>
                                                  <View style={styles.userImage}>
                                                            <AntDesign name="user" size={24} color="#777" />
                                                  </View>
                                                  <View style={styles.user}>
                                                            <Text style={styles.usernameText}>{ user.name ?? 'Unknown' }</Text>
                                                            <Text style={styles.userEmailText} numberOfLines={1}>{ user.email ?? 'unknown' }</Text>
                                                  </View>
                                        </View>
                              </TouchableNativeFeedback>
                    )
          }
          return (
                    <View style={styles.users}>
                              <FlatList
                                        data={users}
                                        keyExtractor={(user) => user.id}
                                        renderItem={({item, index}) => <User user={item} />}
                                        showsVerticalScrollIndicator={false}
                              />
                    </View>
          )
}

const styles = StyleSheet.create({
          userCont: {
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginTop: 10,
                    backgroundColor: '#fff'
          },
          userImage: {
                    width: 50,
                    height: 50,
                    borderColor: '#ddd',
                    borderWidth: 1,
                    borderRadius: 50,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
          },
          user: {
                    marginLeft: 10
          },
          usernameText: {
                    color: '#333',
                    fontWeight: 'bold',
          },
          userEmailText: {
                    fontSize: 13,
                    color: '#333',
                    opacity: 0.8,
                    width: '95%'
          },
})