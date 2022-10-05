import {View,Text, StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../utils/reusableStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';

function Snack({message, onClose, duration, isOpen}){

    useEffect(()=>{
    if(isOpen){
      const timer = setTimeout(()=>{
        if(!isOpen) clearTimeout(timer);
        onClose();
      }, duration)
    }
  }, [isOpen]);


  const decoIcon = <Icon name='warning' size={30} color={colors.lightPurple} />
  const closeIcon = <Icon name='close' size={30} color={colors.lightPurple} />
  return(
    isOpen?
    (<View style={styles.container}>
    <View>{decoIcon}</View>
    <View>
      <Text style={[styles.messageStyle,styles.warning]}>{message}</Text>
    </View>
    <TouchableHighlight onPress={onClose}>{closeIcon}</TouchableHighlight>
  </View>):null
  )
}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    display:'flex',
    flexDirection:'row',
    alignItems :'center',
    justifyContent:'space-around',
    bottom:50,
    width:'100%',
    height:60,
    backgroundColor : colors.red,
    color : colors.paleRed,
    borderRadius:10,
    overflow:'hidden',
    elevation:6,
  },
  messageStyle: {
    fontSize:17,
    fontWeight:'800',
  },
  //box style
  warning:{backgroundColor : colors.red, color : 'white'}
})

export default Snack;