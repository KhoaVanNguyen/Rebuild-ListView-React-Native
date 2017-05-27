import React  from 'react'
import { Text, Image, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image, url  } = album

  return (
      <Card>
      <CardSection>
        <View >
          <Image
          style={ styles.thumbnailContainer  }
          source={{uri: thumbnail_image}}
          />
        </View>

        <View style={styles.headerTextContainer}>
          <Text style = { styles.headerText } > {title}  </Text>
          <Text > {artist}  </Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
        style={ styles.mainImage }
        source={{uri: image}}
        />
      </CardSection>

      <CardSection>
        <Button onPress = { () =>  Linking.openURL(url)  } text ="Buy Now" />
      </CardSection>

      </Card>
  )
}
const styles = {
    viewStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20
    },
    thumbnailContainer: {
      width: 50,
      height: 50,
      marginLeft: 10,
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 18
    },
    headerTextContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 0
    },
    mainImage:{
      height: 300,
      width: null,
      flex: 1
    }

}

export default AlbumDetail
