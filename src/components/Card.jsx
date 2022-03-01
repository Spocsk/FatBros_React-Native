import { StyleSheet, View, Image } from 'react-native';
import { API_IMAGE_BASE_URL } from '@env';

export default function Card({img}) {

  return (
    <View style={styles.card}>
        <Image style={styles.img} source={{uri: `${API_IMAGE_BASE_URL}${img}`}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        width: 140,
        height: 200,
        marginHorizontal: 10,
        borderRadius: 15
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        zIndex: 0
    }
});