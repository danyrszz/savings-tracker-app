import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { idContext } from "./SelectedSavingMain";
import IncomeDetails from "../../components/IncomeDetails";

function History () {
  const id = useContext(idContext);
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