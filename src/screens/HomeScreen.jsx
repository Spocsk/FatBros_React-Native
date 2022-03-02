import { StyleSheet, SafeAreaView, View} from 'react-native';
import Slider from '../components/Slider';
import Subtitle from '../components/Subtitle';
import useMovies from '../hooks/useMovies';
import useTvShows from '../hooks/useTvShows'

export default function HomeScreen({navigation}) {

  const movies = useMovies();
  const tv = useTvShows();

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <Subtitle>À découvrir</Subtitle>
        <Slider navigation={navigation} data={movies}/>
        <Subtitle>Top des séries</Subtitle>
        <Slider data={tv}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(36,35,33)',
  }
});