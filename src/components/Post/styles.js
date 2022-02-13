import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
          post: {
                    backgroundColor: '#fff',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginTop: 10
          },
          postHeader: {
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center'
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
                    opacity: 0.8
          },
          postTitle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#333',
                    lineHeight: 22,
                    marginTop: 10
          },
          postBody: {
                    fontSize: 15,
                    color: '#333',
                    lineHeight: 22,
                    marginTop: 10,
          },
          readMoreBtn: {
                    // backgroundColor: '#ddd',
                    paddingVertical: 10,
                    borderRadius: 5,
                    marginTop: 10,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: '100%',
                    alignSelf: 'center'
          },
          readMoreBtnText: {
                    textAlign: 'center',
                    color: '#333',
                    fontWeight: 'bold',
                    opacity: 0.8
          }
})
export default styles