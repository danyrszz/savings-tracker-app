import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useContext, useState, useEffect} from "react";
import { idSavingContext } from "./SelectedSavingMain";
import IncomeDetails from "../../components/IncomeDetails";
import { deleteIncome, getSavingById } from '../../models/database';
import { useIsFocused } from "@react-navigation/native";

function History () {
  const id = useContext(idSavingContext);
  const [incomes, setIncomes] = useState(getSavingById(id).incomes);

  const focused = useIsFocused();
  useEffect(()=>{
    if(focused) setIncomes(getSavingById(id).incomes)
  },[focused])

  function handleEdit(){
  }

  function handleDelete(incomeID, savingID){
    deleteIncome(incomeID, savingID);
    setIncomes(getSavingById(id).incomes);
  }

  const noItems =
  <View style={styles.noRecords}>
    <Text>No hay nada por aqui todavia</Text>
  </View>;

  const allIncomes =
  <ScrollView>
    <View style={styles.itemsContainer}>
      {incomes.map((element)=>{
        return (<IncomeDetails
          key = {element._id} 
          name = {element.name}
          quantity = {element.currentSaving}
          date = {element.date}
          handleDelete = {()=>handleDelete(element._id, id)}
          savingID = {id}
          incomeID = {element._id}
        />)
      }
      )}
    </View>
  </ScrollView>;

  return (
    <>
      {(incomes.length>0)? allIncomes : noItems}
    </>
  )
}

const styles = StyleSheet.create({
  itemsContainer : { 
    display:'flex', 
    width:'100%',
    padding: 15,
  },
  noRecords:{
    height:'100%',
    justifyContent:"center",
    alignItems:"center"
  }
})

export default History;