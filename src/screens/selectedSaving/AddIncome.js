import { View, StyleSheet, Text } from "react-native";
import { useContext, useState } from "react";
import { idSavingContext } from "./SelectedSavingMain";
import { generalStyles } from "../../utils/reusableStyles";
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import Snack from "../../components/Snack";
import { addIncome } from "../../models/database";
import { dateToString } from "../../utils/dateUtils";
/*
  component to add a income to the register, this will
  automatically save the actual date.
*/

function AddIncome ({navigation}) {
  const [registerIdentifier, setRegisterIdentifier] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [showSnackbar, setShowSnackBar] = useState (false);

  const id = useContext(idSavingContext);
  
  function saveIncome () {
    if(!registerIdentifier||!quantity){
      setShowSnackBar(true);
    }else{
      const income = {
        name : registerIdentifier,
        currentSaving : quantity,
        date : dateToString(new Date())
      }
      addIncome(id, income);
      navigation.navigate('Information')
    }
  }

  return (
    <View style={[generalStyles.genericScreenContainer, styles.formWrapper]}>
      <Snack isOpen={showSnackbar} message='No pueden haber campos vacios' onClose={()=>setShowSnackBar(false)} duration={2500}/>
      <InputText
        iconName='edit'
        placeholder='Identificador del ingreso'
        behavior={(text)=>setRegisterIdentifier(text)}
      />      
      <InputText
        iconName='payments'
        placeholder='Cantidad'
        behavior={(text)=>setQuantity(parseFloat(text))}
        type = 'number'
      />
      <View style={styles.centered}>
        <Button icon='save' label='Guardar' action={saveIncome}/>
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