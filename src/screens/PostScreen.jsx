import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import useFetch from '../hooks/useFetch';



export const Comment = ({ comment }) => {
          return (
                    <View style={styles.comment}>
                              <View style={styles.commentImage}>
                                        <AntDesign name="user" size={24} color="#777" />
                              </View>
                              <View style={styles.commentContent}>
                                        <Text style={styles.commentCreator}>{ comment.name }</Text>
                                        <Text style={styles.commentBody}>{ comment.body }</Text>
                              </View>
                    </View>
          )
}

export default function PostScreen() {
          const route = useRoute()
          const navigation = useNavigation()
          const { post: defaultPost, postId } = route.params

          const [loadingPost, setLoadingPost] = useState(true)
          const [post, setPost] = useState(defaultPost)

          const [loadingComments, setLoadingComments] = useState(true)
          const [comments, setComments] = useState([])

          useEffect(() => {
                    (async () => {
                              if(!defaultPost) {
                                        try {
                                                  const responsePost = await fetch(`https://gorest.co.in/public/v2/posts/${postId}`)
                                                  const postData = await responsePost.json()

                                                  const responseUser = await fetch(`https://gorest.co.in/public/v2/users/${postData.user_id}`)
                                                  const user = await responseUser.json()
                                                  setPost({...postData, user})
                                        } catch(error) {
                                                  setPost({})
                                        }
                              }
                              setLoadingPost(false)
                    })()
          }, [])

          useEffect(() => {
                    if(!loadingPost) {
                              (async () => {
                                        try {
                                                  const responseComments = await fetch(`https://gorest.co.in/public/v2/posts/${post.id}/comments`)
                                                  const comments = await responseComments.json()
                                                  setComments(comments)
                                        } catch(error) {
                                                  console.log(error)
                                        }
                                        setLoadingComments(false)
                              })()
                    }
          }, [loadingPost])
          
          return (
                    <ScrollView style={styles.postView}>
                              <View style={styles.header}>
                                        <TouchableOpacity onPress={() => navigation.goBack()} >
                                                  <View style={{height: 50, width: 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                            <Ionicons name="arrow-back-outline" size={24} color="black" />
                                                  </View>
                                        </TouchableOpacity>
                              </View>
                              {!loadingPost &&
                              <>
                              <Text style={styles.postTitle}>{ post.title }</Text>
                              <View style={styles.postUser}>
                                        <View style={styles.userImage}>
                                                  <AntDesign name="user" size={24} color="#777" />
                                        </View>
                                        <View style={styles.user}>
                                                  <Text style={styles.usernameText}>{ post.user.name ?? 'Unknown' }</Text>
                                                  <Text style={styles.userEmailText}>{ post.user.email ?? 'unknown' }</Text>
                                        </View>
                              </View>
                              <Text style={styles.postBody}>{ post.body }</Text>
                              </>}
                              {/* <Text style={styles.commentTitle}>Comments</Text> */}
                              {!loadingComments && comments.length == 0 && <Text style={{ color: '#333', opacity: 0.8, marginTop: 20, textAlign: 'center'}}>No comment yet</Text> }
                              {loadingComments ? <ActivityIndicator color='#007BFF' animating={true} size="large" style={{marginTop: 20}} /> :
                              <View style={styles.comments}>
                                        {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
                              </View>}
                    </ScrollView>
          )
}

const styles = StyleSheet.create({
          postView: {
                    paddingHorizontal: 20
          },
          header: {
                    marginTop: StatusBar.currentHeight + 10
          },
          postTitle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 22,
                    marginTop: 10
          },
          
          postUser: {
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 10
          },
          userImage: {
                    width: 35,
                    height: 35,
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
                    opacity: 0.8
          },
          postBody: {
                    fontSize: 15,
                    color: '#333',
                    lineHeight: 22,
                    marginTop: 10,
          },
          commentTitle: {
                    marginTop: 20,
                    fontWeight: 'bold',
                    fontSize: 15
          },
          comment: {
                    flexDirection: 'row',
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingVertical: 10
          },
          commentImage: {
                    width: 35,
                    height: 35,
                    borderColor: '#ddd',
                    borderWidth: 1,
                    borderRadius: 50,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
          },
          commentContent: {
                    marginLeft: 10
          },
          commentCreator: {
                    fontWeight: 'bold'
          },
          commentBody: {
                    fontSize: 15,
                    color: '#333',
                    lineHeight: 20,
          },
          comments: {
                    marginTop: 20
          }
})