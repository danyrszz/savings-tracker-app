import {View, Text, StyleSheet, TextInput} from 'react-native';
import { generalStyles, colors } from '../utils/reusableStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function InputText({iconName, placeholder, type, behavior}){
  const icon = <Icon name={iconName} size={30} color={colors.vampire} />;
  return(
    <View style= {styles.inputTextWrapper}>
      <View style={styles.icon}>
        <Text>{icon}</Text>
      </View>
      <TextInput 
      style={styles.input}
      placeholder={placeholder}
      keyboardType={type==='number'?'number-pad':'default'}
      onChangeText = {text =>behavior(text)}
      ></TextInput>
    </View>
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

export default InputText;