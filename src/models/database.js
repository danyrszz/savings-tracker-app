import Realm from "realm";
const { UUID } = Realm.BSON;

class IncomesSchema extends Realm.Object { }
IncomesSchema.schema = {
  embedded : true,
  name: "Incomes",
  properties: {
    _id: "uuid",
    name: "string",
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


//query the savings
let getSavings = realm.objects("Savings");
const getSavingById = (id)=> realm.objectForPrimaryKey("Savings", id); 

export {getSavings, saveData, getSavingById};
export default realm;