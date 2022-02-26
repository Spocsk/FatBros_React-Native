import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { API_LANGUAGE } from 'react-native-dotenv';

export default function App() {
  return (
    <SafeAreaView style={styles.view}>
      <Text>{API_LANGUAGE}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});
