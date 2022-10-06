import Realm from "realm";
const { UUID } = Realm.BSON;

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
    quantity: "float",
    finalDate : "string",
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
    })
  }catch(e){
    console.log(e)
  }
}


//query the savings
//let getSavings = realm.objects("Savings");
const getSavings = () => realm.objects("Savings");

//receives an string formatted uuid and converts into uuid
const getSavingById = (id)=> realm.objectForPrimaryKey("Savings", new UUID(id)); 

export {getSavings, saveData, deleteItem, getSavingById, addIncome};
export default realm;