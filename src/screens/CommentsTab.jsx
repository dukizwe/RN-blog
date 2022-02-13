import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View, TouchableNativeFeedback } from 'react-native'
import useFetch from '../hooks/useFetch'
import { Comment } from './PostScreen'

export default function CommentsTab() {
          const [loadingComments, comments] = useFetch(`https://gorest.co.in/public/v2/comments`)
          const navigation = useNavigation()
          return (
                    <View style={{paddingHorizontal: 20}}>
                              <FlatList
                                        ListHeaderComponent={() => <Text style={{marginTop: 10, color: '#333', opacity: 0.8, fontWeight: 'bold'}}>Recent comments</Text>}
                                        data={comments}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item}) => {
                                                  return (
                                                            <TouchableNativeFeedback
                                                                      onPress={() => navigation.navigate('PostScreen', { postId: item.post_id })}
                                                                      background={TouchableNativeFeedback.Ripple('#c9c5c5')}
                                                            >
                                                                      <View>
                                                                                <Comment comment={item} />
                                                                      </View>
                                                            </TouchableNativeFeedback>
                                                  )
                                        }}
                                        showsVerticalScrollIndicator={false}
                              />
                    </View>
          )
}