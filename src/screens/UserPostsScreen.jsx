import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useFetch from '../hooks/useFetch';
import Post from '../components/Post/Post';
import { Skeletons } from './PostsTab';
import { Ionicons } from '@expo/vector-icons'

export default function UserPostsScreen() {
          const route = useRoute()
          const navigation = useNavigation()
          const { user } = route.params
          const [loadingPosts, posts] = useFetch(`https://gorest.co.in/public/v2/users/${user.id}/posts`)
          return (
                    <View style={{ paddingBottom: 0  }}>
                              <View style={styles.header}>
                                        <TouchableOpacity onPress={() => navigation.goBack()} >
                                                  <View style={{height: 50, width: 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                            <Ionicons name="arrow-back-outline" size={24} color="black" />
                                                  </View>
                                        </TouchableOpacity>
                                        <Text style={styles.headerTitle} numberOfLines={1}>Posts from { user.name } </Text>
                              </View>
                              {!loadingPosts && posts.length == 0 && <Text style={{ color: '#333', opacity: 0.8, marginTop: 20, textAlign: 'center'}}>No post yet</Text> }
                              {loadingPosts ? <Skeletons /> : 
                                        <FlatList
                                                  data={posts}
                                                  keyExtractor={(post) => post.id}
                                                  renderItem={({item, index}) => {
                                                            return <Post post={{...item, user}} />
                                                  }}
                                                  showsVerticalScrollIndicator={false}
                                        />
                              }
                    </View>
          )
}
const styles = StyleSheet.create({
          header: {
                    marginTop: StatusBar.currentHeight + 10,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center'
          },
          headerTitle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    width: '80%'
          }
})