import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './src/routes/HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './src/components/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
          return (
                    <View style={styles.container}>
                              <NavigationContainer>
                                        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} /> }>
                                                  <Drawer.Screen name="Root" component={HomeNavigator} />
                                        </Drawer.Navigator>
                              </NavigationContainer>
                    </View>
          );
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
          },
});
