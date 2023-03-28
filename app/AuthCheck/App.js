import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState, useEffect } from 'react'
import { firebase } from './config'

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import Scanner from './screens/Scanner'

import Login from './screens/Login'
import Registration from './screens/Registration'
import Home from './screens/Home'
import Header from './components/Header'

const Stack = createStackNavigator()

function App() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])
  if (initializing) return null

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerTitle: () => <Header name='Login' />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name='Registration'
          component={Registration}
          options={{
            headerTitle: () => <Header name='Login' />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: () => <Header name='Home' />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name='Scanner'
        component={Scanner}
        options={{
          headerTitle: () => <Header name='Scanner' />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25,
          },
        }}
      />
    </Stack.Navigator>
  )
  // return (
  //   <Stack.Navigator>
  //     <Stack.Screen name='Home' component={Home} />
  //     <Stack.Screen name='Scanner' component={Scanner} />
  //   </Stack.Navigator>
  // )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   )
// }
