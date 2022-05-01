import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Pressable, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';



export var city_info = ''



export default function CityChoice ({navigation}) {
  
  const [text, onChangeText] = React.useState('')

  city_info = text



    return(
      <LinearGradient style={{flex:1}} colors={['#654ea3', '#eaafc8']}>
      <ScrollView style={{flex:1, padding:40}}>
        <Text style={styles.Text_top}>Enter Your City</Text>
        <TextInput 
          autoFocus={true}
          style={styles.TextInput} 
          onChangeText={(text) => onChangeText(text)}
          />
        <Pressable style={styles.Pressable} onPress={() => navigation.navigate('CityScreen')}>
          <View style={styles.transparentArea}>
            <Text style={styles.Text}>Continue</Text>
          </View>

        </Pressable>
      </ScrollView>
      </LinearGradient>
    )
  }



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
  },

  TextInput: {
    marginTop:30,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius:20,
    fontSize:32,
    color:'white',
    textAlign:'center',
  },

  Pressable: {
    alignItems: 'center',

  },
  Text_top: {
    fontSize:48,
    color: 'white',
    textAlign:'center',
    marginTop: 30
    
  },
  Text: {
    padding:10,
    fontSize:48,
    color: 'white',
    textAlign:'center',
  },

  transparentArea: {
    marginTop:30,
    backgroundColor:'rgba(255,255,255,0.6)',
    borderRadius: 25,
  }




})









