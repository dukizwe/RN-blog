import { StatusBar, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
          header: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                    paddingTop: StatusBar.currentHeight + 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderBottomColor: '#ddd',
                    paddingVertical: 5,
                    borderBottomWidth: 1
          },
          brandName: {
                    fontSize: 16,
                    fontWeight: 'bold'
          }
})

export default styles