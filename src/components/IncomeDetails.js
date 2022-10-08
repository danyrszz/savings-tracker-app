import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/reusableStyles";
/*
  this component shows the information of each income register
  assigned to a saving item 
  a tap to the component allows the user to edit its 
  specific information.
  editable information is just name and date. not quantity
*/

function IncomeDetails({name,quantity,date}){
  const [data, setData] = useState({
    name : name,
    quantity : quantity,
    date : date
  })
  return(
    <View style={styles.container}>
      <Text style={styles.row}>{data.name}</Text>
      <Text style={[styles.row, styles.quantityText]}> ${data.quantity}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{data.date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor : colors.lightPurple,
    borderRadius : 10,
    width:'100%',
    marginBottom : 20,
    padding:10,
    elevation: 10,
  },
  row:{
    // padding:10,
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
    fontSize : 25,
    fontWeight:'600'
  }
})

export default IncomeDetails;