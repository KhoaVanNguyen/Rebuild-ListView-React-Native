import React from 'react'
import { Text, View } from 'react-native'

const Header = (params) => {
  const { textStyle } = styles
  return (
    <View style = { styles.viewStyle } >
      <Text style = { styles.textStyle  } > { params.headerText } </Text>
    </View>
  )
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8f8f8',
    flexDirection: 'row', //primary axis
    justifyContent: 'center', //distribution of children along the primary axis
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 50
  },
  textStyle: {
    fontSize: 20,
    paddingTop: 20
  }
}
export default Header
