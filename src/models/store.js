// import realm from './realm';
// const { UUID } = Realm.BSON;

// export default function store (data) {
//     data = {...data, _id : new UUID(),}
//     try{
//       realm.write(() => {
//         realm.create("Savings", data);
//         console.log("data stored");
//       })
//     }catch(e){
//       console.log(e + "error writing the object.");
//     }
// }



// import Realm from 'realm';
// import IncomesSchema from "./schemas/IncomesSchema";
// import SavingSchema from "./schemas/SavingSchema";
// const { UUID } = Realm.BSON;

// export default async function store (data){
//   const realm = await Realm.open({
//     path : 'savingsDB',
//     schema: [IncomesSchema, SavingSchema],
//     deleteRealmIfMigrationNeeded : true,
//   });
//   data = {...data, _id : new UUID(),}
//   try{
//     realm.write(() => {
//       realm.create("Savings", data);
//       console.log("data stored");
//     })
//   }catch(e){
//     console.log(e + "error writing the object.");
//   }
// }