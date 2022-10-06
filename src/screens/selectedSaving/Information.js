import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { idSavingContext } from "./SelectedSavingMain";
import { colors } from "../../utils/reusableStyles";
import reduceTo from '../../utils/misc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { daysTo } from "../../utils/dateUtils";
import { getSavingById } from '../../models/database';

const warningIcon = <Icon name='warning' size={30} color={colors.red} />

function InformationHome () {

  const id = useContext(idSavingContext);
  const [savingInformation, setSavingInformation] = useState(getSavingById(id));

  const [currentSaving, setCurrentSaving] = useState(0);
  const [remaining, setRemaining] = useState(savingInformation.quantity);
  const [remainingDays, setRemainingDays] = useState(daysTo(savingInformation.finalDate))  
  
  console.log(savingInformation.incomes)
  // example info
  const name = savingInformation.name;
  const daysToFinalDate = daysTo(savingInformation.finalDate);
  const shrinkedName = reduceTo(name, 70);

  return(
    <View>

      <View style={styles.itemsContainer}>

        {savingInformation.incomes.map((element)=>{
          return <Text>{element.name}</Text>
        }
        )}
        <Text style={styles.titleText}> 
         {shrinkedName}
        </Text>

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
            <Text style ={styles.iconWrapper}>Te quedan {remainingDays} dias</Text>
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

export default InformationHome;