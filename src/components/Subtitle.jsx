import { StyleSheet, Text } from 'react-native';

export default function Subtitle({children}) {
  return (
    <Text style={styles.subtitle}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'rgb(233,232,230)',
        fontSize: 16,
        marginVertical: 20,
        marginHorizontal: 10,
    },
});