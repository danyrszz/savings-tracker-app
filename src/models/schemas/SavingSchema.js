export default class SavingSchema extends Realm.Object { }
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