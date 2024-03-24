import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './Styles';

const BusinesCard = () =>{

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>

      <View style={styles.mainContainer}>

        <View style={styles.imgContainer}>
          <Image style={{width:376, height:280,alignSelf:"center",  borderTopRightRadius:15,
            borderTopLeftRadius:15}} source={require("./assets/me.jpeg")}/>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.texts, {fontSize:30,fontWeight:"bold"}]}>Joshua Mills</Text>

          <Text style={[styles.texts, {fontSize:14}]}>React Native Developer</Text>

          <Text style={[styles.texts, {fontSize:12, padding:8}]}>JavaScript | React-Native | Python</Text>

          <View style={styles.topButtons}>
            <TouchableOpacity style={{flexDirection:"row",backgroundColor:"white", width:130,borderRadius:6,justifyContent:"center", alignItems:'center', marginRight:10}}>
              <Image source={require("./assets/email.png")} style={[styles.icons, {alignSelf:"center"}]}/><Text style={{fontSize:18,paddingLeft:10,fontWeight:"bold",}}>Email</Text></TouchableOpacity>

            <TouchableOpacity  style={{flexDirection:"row",backgroundColor:"#4169e1", width:130,height:40,borderRadius:6,justifyContent:"center", alignItems:'center',marginLeft:10}}>
              <Image  source={require("./assets/social.png")} style={[styles.icons, {tintColor:"white",alignSelf:"center"}]}/><Text  style={{fontSize:18,paddingLeft:10, fontWeight:"bold", color:"white"}}>LinkendIn</Text></TouchableOpacity>
          </View>

          <View style={styles.para}>
            <Text style={{fontSize:18,color:"white", marginBottom:5, fontWeight:"bold", alignSelf:"flex-start"}}>About</Text>
            <Text style={styles.texts }>
              I'm Joshua Mills. 23 years old and am a Ghanaian.I'm an IT Technician and a software Developer.
            </Text>
            
            
            <Text style={{fontSize:18,color:"white" , marginTop:20,marginBottom:5, fontWeight:"bold", alignSelf:"flex-start"}}>Interests</Text>
            <Text style={styles.texts }>
              I like technology.Programing,repairing, and upgrading devices.I like music and movies
            </Text>
          
          </View>

        </View>

        <View style={styles.navIcons}> 
          <TouchableOpacity style={{backgroundColor:"white",justifyContent:"center", alignItems:"center",width:35, height:35,marginRight:25,borderRadius:6}}><Image  source={require("./assets/twitter.png")} style={[styles.icons ]}/></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginRight:25,borderRadius:6}}><Image  source={require("./assets/facebook.png")} style={[styles.icons ]}/></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,borderRadius:6}}><Image  source={require("./assets/github.png")} style={[styles.icons]}/></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginLeft:25,borderRadius:6}}><Image  source={require("./assets/whatsapp.png")} style={[styles.icons]}/></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}


export default BusinesCard;