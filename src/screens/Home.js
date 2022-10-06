import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { useState } from 'react';

import SavingItem from '../components/SavingItem';
import TitleBar from '../components/TitleBar';
import { generalStyles } from '../utils/reusableStyles';

import { getSavings } from '../models/database';
import { deleteItem as deleteSaving } from '../models/database';

function Home ({navigation}){
  const [registers, setRegisters] = useState(getSavings())

  function deleteRecord (id){
    deleteSaving(id);
    setRegisters(getSavings());
  }

  const noElements = 
    <View style={generalStyles.genericScreenContainer}>
    <Text style={generalStyles.bigFont}>
      No hay registros aún.
    </Text>
    <Text style={generalStyles.bigFont}>
      ¿Que tal si <Text
        onPress={()=>navigation.navigate('NewSavingRegister')}
        style={generalStyles.textLink}
      >añadimos alguno</Text>?
    </Text>
  </View>;

  const registersList = 
  <ScrollView>
    {registers.map( element => {
      return <SavingItem
      key = {element._id}
      name={element.name}
      quantity = {element.quantity}
      date = {element.finalDate}
      idRegister = {element._id}
      navigation = {navigation}
      data = {element}
      remove = {()=> deleteRecord(element._id)}
      />
    })}
  </ScrollView>

  return(
    <>
      {/*main container*/}
      <View style={styles.mainContainer}>
        <TitleBar
          title = 'Todos los ahorros'
          icon = 'add'
          route = 'NewSavingRegister'
          navigation = {navigation}
        />
        {/* main section */}
        {(registers.length>0)? registersList : noElements}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: generalStyles.screenBackground,
  },
})

export default Home; 