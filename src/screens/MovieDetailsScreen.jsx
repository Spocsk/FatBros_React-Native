import { SafeAreaView, StyleSheet, Image, View} from 'react-native'
import PreviousButton from '../components/Button/PreviousButton'
import { API_IMAGE_BASE_URL } from '@env'

export default function MovieDetailsScreen({navigation, route}) {
    const data = route.params.data
    return (
        <View style={styles.container}>
            <PreviousButton onClick={() => navigation.navigate('Home')}></PreviousButton>
            <Image style={styles.img} source={{uri: `${API_IMAGE_BASE_URL}${data.backdrop_path}`}}></Image>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 550
    },
    img: {
        zIndex: 0,
        height: '100%',
        zIndex: 1,
        resizeMode: 'cover',
    }
  });