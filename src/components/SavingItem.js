import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { colors, generalStyles } from '../utils/reusableStyles';
import reduceTo from '../utils/misc';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDate } from '../utils/dateUtils';
import { useState } from 'react';

/*
  this component is able to navigate to the main information screen
  and with a swipable gesture will be able to edit the params
  and/or delete the item from the database.
*/

function SavingItem({name, quantity, date, idRegister, navigation, remove}){
  const [completed, setCompleted] = useState(false);
  const id = idRegister.toString();
  const formattedDate = formatDate(date);
  const shrinkName = reduceTo(name,25);
  const goToDetails = () => navigation.navigate('SelectedSavingMain',{id : id});
  //const goToDetails = () => navigation.navigate('SelectedSavingMain',{data : data});
  const deleteIcon = <Icon name='delete' size={40} color={colors.lightPurple} />;
  const completedIcon = <Icon name='done' size={20} color={colors.green} />;

  const rightActions = () =>{
    return(
      // <TouchableHighlight style={styles.deleteItem} onPress={()=>call(idRegister)}>
      <TouchableHighlight style={styles.deleteItem} onPress={remove}>
        <View>
          <Text>{deleteIcon}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  return(
    <>
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight onPress={goToDetails}>
        <View style={styles.wrapper}>
        {/* top row */}
          <View style={styles.topRow}>
            <Text style={[generalStyles.bigFont]}> {shrinkName} </Text>
            <Text style={[generalStyles.giantFont,{color:colors.green}]}> ${quantity} </Text>
          </View>
        {/* bottom row */}
          <View style={styles.bottomRow}>
            <Text style={styles.dateLabel}>{formattedDate}</Text>
          </View>
          {/* if task completed */}
          {completedIcon} 
        </View>
        </TouchableHighlight>
    </Swipeable>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    backgroundColor:'white',
    display : 'flex',
    padding : 12,
    borderBottomWidth : 1,
    borderBottomColor : '#C8C8C8',
  },
  topRow : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  bottomRow : {
    padding : 6
  },
  dateLabel : {
    color:colors.red,
    fontSize:16,
    fontWeight:'500'
  },
  boxShadow:{
    elevation:5,
  },
  deleteItem:{
    backgroundColor : colors.red,
    width:80,
    alignItems:'center',
    justifyContent:'center',
  }
})
export default SavingItem;