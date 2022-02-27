import { StyleSheet, Text, SafeAreaView } from 'react-native';
import getDiscover from './src/api/tmdb'
import axios from 'axios'
import {
    API_BASE_URL,
    API_BEARER_TOKEN
} from '@env'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  
  const queryClient = new QueryClient();
  
  const fetchDiscoverMovies = async () => {
    return await axios.get(`${API_BASE_URL}/discover/movie`, {
      headers: {
        Authorization: 'bearer ' + API_BEARER_TOKEN
    }
    })
  }
  const { data } = useQuery('discover', fetchDiscoverMovies)

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.view}>
        <Text>{data[0].id}</Text>
      </SafeAreaView>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});