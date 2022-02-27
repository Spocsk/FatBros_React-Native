import { StyleSheet, SafeAreaView, View } from 'react-native';
import Slider from './src/components/Slider';
import Subtitle from './src/components/Subtitle';
import useMovies from './src/hooks/useMovies';
import useTvShows from './src/hooks/useTvShows'

export default function App() {

  const movies = useMovies();
  const tv = useTvShows();
  console.log(tv)

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <Subtitle>À découvrir</Subtitle>
        <Slider data={movies}></Slider>
        <Subtitle>Top des séries</Subtitle>
        <Slider data={tv}></Slider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(31,27,26)',
  }
});