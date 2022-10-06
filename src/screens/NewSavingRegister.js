import {View, StyleSheet} from 'react-native';
import { useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { generalStyles, colors } from '../utils/reusableStyles';
import InputText from '../components/InputText';
import CalendarPicker from '../components/CalendarPicker';
import Button from '../components/Button';
import Snack from '../components/Snack';
import { dateToString as formatDate } from '../utils/dateUtils';

import { saveData } from '../models/database';


function NewSavingRegister({navigation}){
  
  const [savingName, setSavingName] = useState('');
  const [targetQuantity, setTargetQuantity] = useState (0);
  const [datepickerDate, setDatePickerDate] = useState('');
  const [showSnackbar, setShowSnackBar] = useState (false);

  //updates the state with the formatted date
  function onChange(e, selectedDate){
    console.log(formatDate(selectedDate));
    setDatePickerDate(formatDate(selectedDate));
  }

  function showDatepicker(){
    DateTimePickerAndroid.open({
      value : new Date(), onChange,
      minimumDate : new Date(),
    })
  }

  function handleSave(){
    if(!datepickerDate||!savingName||(targetQuantity<=0||!targetQuantity)){
      setShowSnackBar(true);
    }else{
      const data={
        name : savingName,
        quantity : targetQuantity,
        finalDate : datepickerDate,
      }
      saveData(data);
      navigation.navigate('Home',{updateState: true});
    }
  }

  return(
    <View style={generalStyles.genericScreenContainer}>
      <Snack isOpen={showSnackbar} message='No pueden haber campos vacios' onClose={()=>setShowSnackBar(false)} duration={2500}/>
      <View style={styles.formWrapper}>
        <InputText iconName='edit' placeholder='Nombre' behavior={text=>setSavingName(text)}/>
        <InputText iconName='payments' placeholder='Cantidad Objetivo' type='number' behavior={text=>setTargetQuantity(parseFloat(text))}/>
        <CalendarPicker behavior={showDatepicker} value={datepickerDate?datepickerDate:'Fecha Objetivo'}/>
        <View style={styles.centered}><Button icon='save' label='Guardar' action={handleSave}></Button></View>
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
  formWrapper : {
    width : '100%',
    padding:25,
  },
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: colors.vampire,
    ...generalStyles.bigFont,
  },
  elementSpacing: {
    paddingBottom: 20,
  },
  button:{
    marginTop:20,
    width:'50%',
    height:50,
    backgroundColor: colors.vampire,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor:colors.vampire,
  },
  buttonText:{
    fontWeight:'400',
    color:colors.mediumPurple,
  }
})

export default NewSavingRegister;