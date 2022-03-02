import { StyleSheet, Image, View} from 'react-native'
import PreviousButton from '../components/Button/PreviousButton'
import { API_IMAGE_BASE_URL } from '@env'

export default function MovieDetailsScreen({navigation, route}) {
    const data = route.params.data
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <PreviousButton onClick={() => navigation.navigate('Home')}/>
                <Image style={styles.img} source={{uri: `${API_IMAGE_BASE_URL}${data.poster_path}`}}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(36,35,33)',
    },
    topContainer: {
        position: 'relative',
        height: 450,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
  });