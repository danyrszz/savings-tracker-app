export default class IncomesSchema extends Realm.Object { }

IncomesSchema.schema = {
  embedded : true,
  name: "Incomes",
  properties: {
    _id: "uuid",
    name: "string",
    currentSaving : "float"
  },
}