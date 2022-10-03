import {TouchableOpacity, View, Text, StyleSheet, TextInput} from 'react-native';
import { generalStyles, colors } from '../utils/reusableStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';


function CalendarPicker({ value, behavior}){

  const icon = <Icon name='event' size={30} color={colors.vampire} />;
  return(
    <TouchableOpacity onPress = {behavior}>
      <View style= {styles.inputTextWrapper}>
        <View style={styles.icon}>
          <Text>{icon}</Text>
        </View>
        <TextInput 
        style={styles.input}
        placeholder={value}
        editable={false}
        ></TextInput>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  inputTextWrapper:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    padding: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: colors.vampire,
    marginBottom:10,
  },
  icon:{
    display:'flex',
    justifyContent:'center',
  },
  centered:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  input: {
    ...generalStyles.bigFont,
    width:'80%',
    paddingLeft:10,
  },
  elementSpacing: {
    paddingBottom: 20,
  }
})
export default CalendarPicker;