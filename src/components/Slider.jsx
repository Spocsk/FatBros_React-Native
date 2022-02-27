import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card'

export default function Slider({data, navigation}) {

  return (
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={movie => movie.id}
        renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {id: item.id})}>
                <Card img={item.poster_path}></Card>
              </TouchableOpacity>
            )
        }}
    />
  );
}

const styles = StyleSheet.create({
});