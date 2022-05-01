import { Commponent } from 'react';
import { ScrollView, Platform, Flatlist, SectionList, RefreshControl, Text, View , Pressable} from 'react-native';
import HomeScreen from './HomeScreen';
import CityChoice from './CityChoice';
import CityScreen from './CityScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MyStack () {
  return (

    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerStyle: {backgroundColor:'white'}, headerTitleStyle: {fontWeight: '500'}}}>
      <Stack.Screen name='Weather' component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='CityChoice' component={CityChoice} options={{ headerShown: false }}/>
      <Stack.Screen name='CityScreen' component={CityScreen} options={{ headerShown: false }}/>
      

    </Stack.Navigator>
  )
}

export default function App (){

    return(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }

  






  
