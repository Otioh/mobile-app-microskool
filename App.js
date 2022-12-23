import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'rgb(83,83,170)'}}>Microskool App</Text>
      <Button  title='Login' color={'rgb(83,83,170)'} onPress={()=>{
        alert("Yes We Cans")
      }}/>
      <View >
<TextInput/>
        </View>
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
});
