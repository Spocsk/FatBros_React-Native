import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function PreviousButton({onClick}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onClick}>
                <AntDesign name="left" size={15} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(120,120,120,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
    },
    btnText: {
        color: 'white'
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        top: 50,
        left: 10,
    },
})