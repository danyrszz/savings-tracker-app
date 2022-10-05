import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { idSavingContext } from "./SelectedSavingMain";
import IncomeDetails from "../../components/IncomeDetails";

function History () {
  const idSaving = useContext(idSavingContext);
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