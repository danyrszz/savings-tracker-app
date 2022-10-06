import { View, StyleSheet } from "react-native";
import { useContext, useState} from "react";
import { idSavingContext } from "./SelectedSavingMain";
import IncomeDetails from "../../components/IncomeDetails";
import { getSavingById } from '../../models/database';


function History () {
  const id = useContext(idSavingContext);
  const [incomes, setIncomes] = useState(getSavingById(id));
  console.log(incomes.incomes)
  return (
    <View style={styles.itemsContainer}>
      <IncomeDetails/>
      <IncomeDetails/>
      <IncomeDetails/>
    </View>
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