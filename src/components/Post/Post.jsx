import React, { useEffect, useState } from 'react'
import { Text, View, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons'; 
import subText from '../../helpers/subText';
import { useNavigation } from '@react-navigation/native'


export default function Post({ post }) {
          const [loadingUser, setLoadingUser] = useState(true)
          const [user, setUser] = useState({})
          const navigation = useNavigation()
          useEffect(() => {
                    (async () => {
                              if(!post.user) {
                                        const response = await fetch(`https://gorest.co.in/public/v2/users/${post.user_id}`)
                                        const user = await response.json()
                                        if(response.ok) {
                                                  setUser(user)
                                        }
                              }
                              setLoadingUser(false)
                    })()
          }, [])
          return (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('PostScreen', { post: {...post, user: post.user ? post.user : user }})}>
                              <View style={styles.post}>
                                        <View style={styles.postHeader}>
                                                  <View style={styles.userImage}>
                                                            <AntDesign name="user" size={24} color="#777" />
                                                  </View>
                                                  <View style={styles.user}>
                                                            {loadingUser ? 
                                                            <View style={{marginLeft: 0}}>
                                                                      <View style={{width: 100, height: 10, borderRadius: 5, backgroundColor: '#d9ddde'}} />
                                                                      <View style={{width: 70, height: 10, borderRadius: 5, marginTop: 5, backgroundColor: '#d9ddde'}} />
                                                            </View> :
                                                            <>
                                                            <Text style={styles.usernameText}>{ post.user?.name ?? user.name ?? 'Unknown' }</Text>
                                                            <Text style={styles.userEmailText}>{ post.user?.email ?? user.email ?? 'unknown' }</Text>
                                                            </>}
                                                  </View>
                                        </View>
                                        <Text style={styles.postTitle}>{ post.title }</Text>
                                        <Text style={styles.postBody}>{ subText(post.body, 200) }</Text>
                                        {/* <Text style={{color: '#333', opacity: 0.6, marginTop: 5}}>2 comments</Text> */}
                                        <TouchableNativeFeedback
                                                  onPress={() => navigation.navigate('PostScreen', { post: {...post, user: post.user ? post.user : user }})}
                                                  background={TouchableNativeFeedback.Ripple('#b3b3b3')}
                                                  useForeground={true}
                                                  >
                                                  <View style={styles.readMoreBtn}>
                                                            <Text style={styles.readMoreBtnText}>Read more</Text>
                                                  </View>
                                        </TouchableNativeFeedback>
                              </View>
                    </TouchableWithoutFeedback>
          )
}