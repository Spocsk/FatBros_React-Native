import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import useResults from './src/hooks/useResults';

export default function App() {
  const results = useResults();

  return (
    <SafeAreaView style={styles.view}>
      <Text>{results.original_title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});