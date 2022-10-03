import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { generalStyles, colors } from '../utils/reusableStyles';

function Button({label, icon, action}){
  const iconName = <Icon name={icon} size={20} color={colors.mediumPurple} />;
  return(
    <TouchableOpacity 
    style={styles.button}
    onPress={action}
    >
    <View>
     <Text style={[generalStyles.bigFont, styles.buttonText]}>
      {iconName} {label}
      </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:20,
    width:'50%',
    height:50,
    backgroundColor: colors.vampire,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor:colors.vampire,
  },
  buttonText:{
    fontWeight:'400',
    color:colors.mediumPurple,
  }
})

export default Button;