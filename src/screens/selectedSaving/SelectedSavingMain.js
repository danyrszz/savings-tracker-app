import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddIncome from './AddIncome';
import History from './History';
import Information from './Information';
import TitleBar from '../../components/TitleBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../utils/reusableStyles';

const tabs = createBottomTabNavigator();
export const idContext = React.createContext();

function SelectedSavingMain ({route, navigation}) {
  // options for configuring tab style
  const tabBarIconSize = 38;
  const iconInactiveColor = colors.vampire;
  const iconActiveColor = colors.link;
  const tabTextSize = 13;


  function tabIcon (icon,color){
    return <Icon name={icon} size={tabBarIconSize} color={color} />;
  }
  function tabLabel (text, focused){
    if(focused) return <Text style={{fontSize:tabTextSize,color:iconActiveColor}}>{text}</Text>
    if(!focused) return <Text style={{fontSize:tabTextSize,color:iconInactiveColor}}>{text}</Text>
  }

  return(
      <>
      <TitleBar 
        title = 'Explorando registro'
        icon = 'home'
        navigation={navigation}
        route='Home'
      />
      <idContext.Provider value={route.params.data}>
        <tabs.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.link,
          tabBarInactiveTintColor: colors.vampire,
          tabBarStyle:{height:60},
        }}
        >

          {/* Information */}
          <tabs.Screen 
          name="Information" 
          component={Information}
          options={{
            tabBarLabel:({focused})=> tabLabel('Información', focused),
            tabBarIcon: ({focused}) => (
              focused ? tabIcon('info', iconActiveColor) : tabIcon('info-outline', iconInactiveColor)
            ),
          }}
          />
          {/* history */}
          <tabs.Screen 
          name="History" 
          component={History}
          options={{
            tabBarLabel:({focused})=> tabLabel('Historial', focused),
            tabBarIcon: ({focused}) => (
              focused ? tabIcon('history', iconActiveColor) : tabIcon('history', iconInactiveColor)
            ),
          }}
          />
          {/* add income */}
          <tabs.Screen 
          name="Add Income" 
          component={AddIncome}
          options={{
            tabBarLabel:({focused})=> tabLabel('Añadir Ingreso', focused),
            tabBarIcon: ({focused}) => (
              focused ? tabIcon('post-add', iconActiveColor) : tabIcon('post-add', iconInactiveColor)
            ),
          }}
          />
        </tabs.Navigator>
      </idContext.Provider>
      </>
  )
}

export default SelectedSavingMain;