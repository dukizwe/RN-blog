import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Post from '../components/Post/Post'
import useFetch from '../hooks/useFetch'


export const Skeletons = () => {
          return (
                    (new Array(10)).fill(0).map((sk, index) => {
                              return (
                                        <View style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10, marginTop: 10}} key={index}>
                                                  <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                                                            <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#d9ddde'}} />
                                                            <View style={{marginLeft: 10}}>
                                                                      <View style={{width: 100, height: 10, borderRadius: 5, backgroundColor: '#d9ddde'}} />
                                                                      <View style={{width: 70, height: 10, borderRadius: 5, marginTop: 5, backgroundColor: '#d9ddde'}} />
                                                            </View>
                                                  </View>
                                                  <View style={{width: 200, height: 10, borderRadius: 5, marginTop: 5, backgroundColor: '#d9ddde'}} />
                                                  <View style={{width: 150, height: 10, borderRadius: 5, marginTop: 5, backgroundColor: '#d9ddde'}} />
                                                  <View style={{width: 170, height: 10, borderRadius: 5, marginTop: 5, backgroundColor: '#d9ddde'}} />
                                        </View>
                              )
                    })
          )
}

export default function PostsTab() {
          const [loadingPosts, posts] = useFetch('https://gorest.co.in/public/v2/posts')
          return (
                    <View style={{ paddingBottom: 0  }}>
                              {loadingPosts ? <Skeletons /> : 
                                        <FlatList
                                                  data={posts}
                                                  keyExtractor={(post) => post.id}
                                                  renderItem={({item, index}) => {
                                                            return <Post post={item} />
                                                  }}
                                                  showsVerticalScrollIndicator={false}
                                        />
                              }
                    </View>
          )
}