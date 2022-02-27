import { StyleSheet, View, Text } from 'react-native';

export default function Card({data}) {

  return (
    <View style={styles.card}>
        <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 150,
        backgroundColor: 'red',
        marginHorizontal: 10,
        borderRadius: 15
    }
});