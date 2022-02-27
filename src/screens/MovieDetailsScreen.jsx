import { View, Text } from 'react-native'

export default function MovieDetailsScreen({route}) {
    return (
        <Text>{route.params.id}</Text>
    )
}