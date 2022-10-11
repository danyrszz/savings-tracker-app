import { useState} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { colors } from "../utils/reusableStyles";
import { formatDate } from "../utils/dateUtils";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
/*
  this component shows the information of each income register
  assigned to a saving item 
  a tap to the component allows the user to edit its 
  specific information.
  editable information is just name and date. not quantity.
*/

function IncomeDetails({name,quantity,date,handleDelete,handleEdit}){
  
  const [data, setData] = useState({
    name : name,
    quantity : quantity,
    date : formatDate(date),
  })

  const deleteIcon = <Icon name='delete' size={40} color={colors.lightPurple} />;
  const editIcon = <Icon name='edit' size={40} color={colors.lightPurple} />;

  const rightActions = () =>{
    return(
      <>
        <TouchableHighlight style={styles.deleteItem} onPress={handleDelete}>
          <View>
            <Text>{deleteIcon}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.editItem} onPress={handleEdit}>
          <View>
            <Text>{editIcon}</Text>
          </View>
        </TouchableHighlight>
      </>
    )
  }

  return(
    <Swipeable renderRightActions={rightActions}>
      <View style={styles.container}>
        <Text style={[styles.row, styles.nameText]}>{data.name}</Text>
        <Text style={[styles.row, styles.quantityText]}> ${data.quantity}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{data.date}</Text>
        </View>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor : colors.lightPurple,
    width:'100%',
    padding:10,
    elevation: 10,
    marginBottom : 10,
  },
  row:{
    color : colors.vampire,
    fontSize : 18,
  },
  dateContainer:{
    display:'flex',
    alignItems: 'flex-end',
  },
  dateText:{
    color:colors.red,
    fontSize:15,
    fontWeight:'700',
    fontSize : 18,
  },
  quantityText:{
    fontSize : 30,
    fontWeight:'800'
  },
  nameText:{
    fontSize : 20
  },
  deleteItem:{
    backgroundColor : colors.red,
    width:80,
    alignItems:'center',
    justifyContent:'center',
    marginBottom : 10,
  },  
  editItem:{
    backgroundColor : colors.vampire,
    width:80,
    alignItems:'center',
    justifyContent:'center',
    marginBottom : 10,
  },
})

export default IncomeDetails;