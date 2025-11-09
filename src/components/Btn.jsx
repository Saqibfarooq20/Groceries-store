import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
const Btn = ({name , onPress}) => {
    
  return (
   <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={onPress} >
     <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>{name}</Text>
   </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    btn : {
        backgroundColor:'#53B175',
        padding:15,
        position:'absolute',
        borderRadius:10,
        width:350,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        bottom:100, 
     },       
})
export default Btn