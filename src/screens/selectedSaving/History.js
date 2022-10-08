import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useContext, useState} from "react";
import { idSavingContext } from "./SelectedSavingMain";
import IncomeDetails from "../../components/IncomeDetails";
import { getSavingById } from '../../models/database';

function History () {
  const id = useContext(idSavingContext);
  const [incomes, setIncomes] = useState(getSavingById(id).incomes);
  console.log(incomes)
  const noItems =
  <View>
    <Text>No hay registros guardados aún</Text>
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
        />)
      }
      )}
    </View>
  </ScrollView>;

  function deleteItem(){}
  function editItem(){}

  return (
    <>
      {(incomes.length>0)? allIncomes : noItems}
    </>
  )
}

const styles = StyleSheet.create({
  itemsContainer : { 
    display:'flex', 
    alignItems: "flex-start", 
    width:'100%',
    padding: 15,
  },
})

export default History;