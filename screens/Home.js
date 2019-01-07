import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import About from '../components/About'

export default class App extends React.Component {
  static navigationOptions = {
    title : 'Home'
  }
  constructor(){
    super()
    this.state = {
      header : 'Hello State',
      hasil : 0,
      angka: 0,
      showAbout: false
    }
  }

  render() {
    const {showAbout} = this.state
    return (
      <View style={styles.container}>
    
        <TextInput style={styles.inputBox}
          value={String(this.state.angka)}
          onChangeText={(text) => {this.setState({angka : text})}}
        />  
        <Text style= {{fontSize: 32}}></Text>
        {
          showAbout ?  
          <Button 
          title="Hide About"
            onPress={()=> {this.setState({showAbout: false})}}
          /> : 
          <Button 
            title="Show About"
            onPress={()=> {this.setState({showAbout: true})}}
          /> 
        }
        {
          showAbout && <About deskripsi = { "Ini adalah aplikasi kalkulator" } 
        />
        }
        <Button 
          title="GO to About Screen" 
          onPress={() => this.props.navigation.navigate('About', {text : 'Ini adlah data dari params'})} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  }
});
