import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from './src/utils/reusableStyles';

import Home from './src/screens/Home';
import NewSavingRegister from './src/screens/NewSavingRegister';
import SelectedSavingMain from './src/screens/selectedSaving/SelectedSavingMain';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>

          {/* Home */}
          <Stack.Screen 
          name='Home' 
          component={Home}
          />
          {/* New register */}
          <Stack.Screen 
          name='NewSavingRegister' 
          component={NewSavingRegister} 
          options={{
            headerShown:true,
            title:'Añadir nuevo ingreso',
            headerStyle: {
              backgroundColor: colors.vampire,
            },
            headerTintColor: colors.lightPurple,
            }}
          />
          {/* Information screen */}
          <Stack.Screen 
            name = 'SelectedSavingMain'
            component={SelectedSavingMain}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;