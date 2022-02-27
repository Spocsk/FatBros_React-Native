import { StyleSheet, SafeAreaView } from 'react-native';
import Slider from './src/components/Slider';
import useMovies from './src/hooks/useMovies';

export default function App() {

  const movies = useMovies();

  return (
    <SafeAreaView style={styles.view}>
      <Slider data={movies}></Slider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});