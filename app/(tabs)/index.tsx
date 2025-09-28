  
import { PathWay } from '@/components/crosspath';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export default function HomeScreen() {
  return (
  <Provider store={store}>
      <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
       <PathWay/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
