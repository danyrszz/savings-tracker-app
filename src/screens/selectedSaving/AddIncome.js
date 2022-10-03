import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { idContext } from "./SelectedSavingMain";
import { generalStyles } from "../../utils/reusableStyles";
import InputText from '../../components/InputText'
import Button from '../../components/Button'
/*
  component to add a income to the register, this will
  automatically save the actual date.
*/

function AddIncome () {
  const id = useContext(idContext);
  return (
    <View style={[generalStyles.genericScreenContainer, styles.formWrapper]}>
      <InputText
        iconName='edit'
        placeholder='Identificador del ingreso'
      />      
      <InputText
        iconName='payments'
        placeholder='Cantidad'
      />
      <View style={styles.centered}>
        <Button icon='save' label='Guardar'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centered:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  formWrapper:{
    padding : 25,
  }
})

export default AddIncome;