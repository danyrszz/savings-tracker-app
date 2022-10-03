import {View, Text, StyleSheet} from 'react-native';
import { generalStyles, colors } from '../utils/reusableStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TitleBar({title, icon, route, navigation}){

  const addIcon = <Icon name= {icon} size={30} color={colors.lightPurple} />;

  return (
    <View style={[generalStyles.tabBackground, styles.titleBar]}>
    <View>
      <Text style={[styles.textTitle, generalStyles.tabTextColor]} > {title} </Text>
    </View>
    <View>
      <Text onPress={()=>navigation.navigate(route)}>{addIcon}</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: generalStyles.screenBackground,
  },
  textTitle : {
    fontSize : 22,
    fontWeight : 'bold',
    color:'#000',
    color:colors.vampire,
    alignItems: 'center',
    justifyContent :'center',
  } ,
  titleBar : {
    padding : 20,
    display : 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
})

export default TitleBar;