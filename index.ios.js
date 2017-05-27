import React from 'react'
import  { AppRegistry, View } from 'react-native'
import Header from './src/components/Header' // . = Albums folder
import AlbumList from './src/components/AlbumList' // . = Albums folder
const App = () =>  (
  <View style={ { flex: 1 }  }>
    <Header headerText = {'Albums'} />
    <AlbumList />
  </View>

)
AppRegistry.registerComponent('Albums', () => App)