import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({onPress, text }) => {
  return (
      // onPress: call parent's function
      <TouchableOpacity onPress = { onPress } style = { styles.button }>
          <Text style={ styles.text }> { text } </Text>
      </TouchableOpacity>
  )
}
const styles = {

  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
    borderColor: '#186a88',
    shadowColor: '#282a2d',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    // shadowOffset: { width: 0, height: 2 }
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: -5,
    color: '#186a88'
  }

}
export default Button
