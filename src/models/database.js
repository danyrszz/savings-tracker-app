import Realm from "realm";
const { UUID } = Realm.BSON;

import { getPercent } from "../utils/misc";

class IncomesSchema extends Realm.Object { }
IncomesSchema.schema = {
  embedded : true,
  name: "Incomes",
  properties: {
    _id: "uuid",
    name: "string",
    date: "string",
    currentSaving : "float"
  },
}

class SavingSchema extends Realm.Object { }
SavingSchema.schema = {
  name: "Savings",
  properties: {
    _id: "uuid",
    name: "string",
    quantity: "float", //fixed value doesnt change
    finalDate : "string",
    savedMoney : "float",
    restingMoney : "float",
    progress : "int",
    incomes : {
      type : 'list',
      objectType : 'Incomes',
    }
  },
  primaryKey: "_id",
};

//Create a config object for the realm instance
const config = {
  path : 'savingsDB',
  schema: [IncomesSchema, SavingSchema],
  deleteRealmIfMigrationNeeded : true,
}
const realm = new Realm (config);

//new saving register
const saveData = (data)=>{
  data = {...data, _id : new UUID(),}
  try{
    realm.write(() => {
      realm.create("Savings", data);
      console.log("data stored");
    })
  }catch(e){
    console.log(e + " error writing the object.");
  }
}

const deleteItem = (id) =>{
  try{
    realm.write(()=>{
      realm.delete(
        realm.objectForPrimaryKey("Savings",id)
        );
      console.log("record deleted: " + id);
      return true
    })
  }catch(e){
    console.log(e + "cannot delete");
    return false
  }
}

const addIncome = (id, income) =>{
  incomeData = {...income, _id : new UUID(),}
  try{
    const saving = getSavingById(id);
    realm.write(()=>{
      saving.incomes.push(incomeData);
      saving.savedMoney += income.currentSaving;
      saving.progress = getPercent(saving.savedMoney, saving.quantity);
      saving.restingMoney -= income.currentSaving;
    })
  }catch(e){
    console.log(e)
  }
}

const deleteIncome = (incomeID, savingID) =>{
  try{
    const savings = realm.objectForPrimaryKey("Savings",new UUID(savingID));
    savings.incomes.map((el)=>{
      console.log(el._id, incomeID)
      if(el._id.toString() === incomeID.toString()){
        //Delete the element
        realm.write(()=>{
          savings.savedMoney -= el.currentSaving;
          savings.progress = getPercent(savings.savedMoney, savings.quantity);
          savings.restingMoney += el.currentSaving;    
          realm.delete(el);
        })
        console.log("deleted successfuly");
        return;
      }
    });
  } catch (e) {
    console.log(e);
  }
}


//query the savings
//let getSavings = realm.objects("Savings");
const getSavings = () => realm.objects("Savings");

//receives an string formatted uuid and converts into uuid
const getSavingById = (id)=> realm.objectForPrimaryKey("Savings", new UUID(id)); 

export {getSavings, saveData, deleteItem, getSavingById, addIncome, deleteIncome};
export default realm;