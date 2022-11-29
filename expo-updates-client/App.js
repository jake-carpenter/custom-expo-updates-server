import Constants from 'expo-constants'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app 3!</Text>
      {/* <Text style={styles.text}>Uncomment this after initial run to prove the app received OTA update</Text> */}
      <Text style={styles.text}>Greeting: {Constants?.expoConfig?.extra?.greeting ?? ''}</Text>
      <Text style={styles.text}>extra config: {Constants?.expoConfig && JSON.stringify(Constants.expoConfig.extra, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {marginBottom: 25}
});
