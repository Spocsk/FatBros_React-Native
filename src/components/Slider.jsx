import { StyleSheet, FlatList } from 'react-native';
import Card from './Card'

export default function Slider({data}) {

  return (
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={movie => movie.id}
        renderItem={({item}) => {
            return <Card data={item.original_title}></Card>
        }}
    />
  );
}

const styles = StyleSheet.create({
});