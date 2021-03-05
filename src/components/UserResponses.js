import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
function UserResponses() {
 const [dataList, setDataList] = useState([]);
 useEffect(
   () => {
     // get the users collection
     const unsubscribe = firebase.firestore().collection("users")
     // watch for any changes in firestore
     .onSnapshot((querySnapshot) => {
         let firestoreData = [];
         // for each document in the collection, add the name, hometown, and id to the firestoreData array
         querySnapshot.forEach(function(doc) {
           firestoreData.push({name: doc.data().name, hometown: doc.data().hometown, id: doc.id});
         });
         // update the state
         setDataList(firestoreData);
       });
       // this stops the snapshot watching process when the component is deleted or cleaned up
       return () => unsubscribe()
   }, [] )
 return (
   <div>
      <ul>
       {dataList.map((data) => {
         return (<li key={data.id}>{data.name}, {data.hometown}</li>)
       })}
     </ul>
   </div>);
};
export default UserResponses;
