import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { idSavingContext } from "./SelectedSavingMain";
import { colors } from "../../utils/reusableStyles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { daysTo } from "../../utils/dateUtils";
import { getSavingById } from '../../models/database';

const warningIcon = <Icon name='warning' size={30} color={colors.red} />

function Information () {
  const id = useContext(idSavingContext);
  const focused = useIsFocused();
  const [savingInformation, setSavingInformation] = useState(getSavingById(id));
  const [currentSaving, setCurrentSaving] = useState(savingInformation.savedMoney);
  const [remaining, setRemaining] = useState(savingInformation.restingMoney);
  const [remainingDays, setRemainingDays] = useState(daysTo(savingInformation.finalDate)-1)
    
  useEffect(()=>{
    if(focused){
      setSavingInformation(getSavingById(id));
      setCurrentSaving(savingInformation.savedMoney);
      setRemaining(savingInformation.restingMoney);
    }
  },[focused])
    
  return(
  <View>
  <View style={styles.itemsContainer}>
    <View style={[styles.quantityContainer, styles.boxSadow]}>
      <Text style={styles.quantityText}>${currentSaving}</Text>
    </View>
    
    <View style={{display:'flex', alignItems:'flex-end', width:'100%'}}>
      <View style={styles.targetQuantityContainer}>
        <Text style={styles.targetQuantity}>Faltan: ${remaining}</Text>
      </View>
    </View>

    <View style={[styles.textWarningContainer, styles.boxSadow]}>
      <View style={styles.iconWrapper}>
        {warningIcon} 
      </View>
      <View style={styles.iconWrapper}>
      {(remainingDays<=0)?(
        <Text style ={styles.iconWrapper}>Alcanzaste el limite de dias</Text>
      ):(
        <Text style ={styles.iconWrapper}>Te quedan {remainingDays} dias</Text>
      )}
      </View>
    </View>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  iconWrapper : {
    display:'flex',
    justifyContent:'center',
    color:colors.red,
    fontWeight:'700',
    fontSize:18
  },
  textWarningContainer : {
    paddingLeft: 20,
    backgroundColor : colors.paleRed,
    display:'flex',
    flexDirection : 'row',
    width:'100%',
    height:50,
    marginTop:10,
    borderRadius : 10,
  },
  boxSadow:{
    elevation:5
  },
  titleText : {
    padding:10,
    fontSize : 22,
    fontWeight : '400',
    width:'100%',
  },
  itemsContainer : { 
    display:'flex', 
    alignItems: "flex-start", 
    width:'100%',
    padding: 30,
  },
  quantityContainer: {
    display:'flex',
    alignItems:'flex-end',
    padding:10,
    width:'100%',
    backgroundColor : colors.green,
    borderRadius : 10,
  },
  quantityText:{
    fontSize:80,
    fontWeight:'600',
    color:colors.paleGreen,
  },
  targetQuantityContainer:{
    display:'flex',
    alignItems:'flex-end',
    padding:10,
    marginTop:10,
    backgroundColor : colors.red,
    borderRadius : 10,
  },
  targetQuantity:{
    fontSize:20,
    fontWeight:'600',
    color: colors.paleRed
  }
})

export default Information;