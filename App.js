import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  FlatList,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
const App: () => React$Node = () => {
const [text, setText]=useState('');
  return (
  <View>
  <Text>Here we go</Text>
  <Text>{text}</Text>
  <Text>{text}</Text>
  <TextInput
    style={{
    borderColor:'blue',
    borderWidth: 4
    }}
    onChangeText={text=>setText(text)}
    defaultValue="Type in"
   />


    </View>
    );
 }

export default App;
