import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, Image, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './src/Styles/Styles';

const BusinesCard = () =>{
  const emailAddress = 'mailto:joshuamills105@gmail.com';
  const phoneNumber = '+233241380745';
  const message = "Hello there!";
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  const telegramUrl = `tg://resolve?domain=JoshMills_9`;
  const twitterUrl = `twitter://user?screen_name=ZipTech1nc`;
  const username = 'JoshMills9';
  const githubUrl = `https://github.com/${username}/BusinessCard`;
  const linkedinUrl = `https://www.linkedin.com/in/joshua-mills-005528206`;

  const buttonHandler = (links)=>{
    try{
      if(links=== "Email"){
        Linking.openURL(emailAddress)
      }
      else if(links === "LinkedIn"){
        Linking.openURL(linkedinUrl)
      }
      else if(links === "Twitter"){
        Linking.openURL(twitterUrl)
      }
      else if(links === "Telegram"){
        Linking.openURL(telegramUrl)
      }
      else if(links === "Github"){
        Linking.openURL(githubUrl)
      }
      else if(links === "WhatsApp"){
        Linking.openURL(whatsappUrl)
      }
    }
    catch{
      err => Alert.alert('An error occurred', err)
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>

      <View style={styles.mainContainer}>

        <View style={styles.imgContainer}>
          <Image style={{width:376, height:280,alignSelf:"center",  borderTopRightRadius:15,
            borderTopLeftRadius:15}} source={require("./src/Image/me.jpeg")}/>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.texts, {fontSize:30,fontWeight:"bold"}]}>Joshua Mills</Text>

          <Text style={[styles.texts, {fontSize:14}]}>React Native Developer</Text>

          <Text style={[styles.texts, {fontSize:10, padding:8}]}>JAVASCRIPT | REACT-NATIVE | PYTHON</Text>

          <View style={styles.topButtons}>
            <TouchableOpacity onPress={()=> buttonHandler("Email")} style={{flexDirection:"row",backgroundColor:"white", width:130,borderRadius:6,justifyContent:"center", alignItems:'center', marginRight:20}}>
              <Image source={require("./src/Image/email.png")} style={[styles.icons, {alignSelf:"center",}]}/><Text style={{fontSize:18,paddingLeft:10,fontWeight:"bold",}}>Email</Text></TouchableOpacity>

            <TouchableOpacity  onPress={()=> buttonHandler("LinkedIn")} style={{flexDirection:"row",backgroundColor:"#4169e1", width:130,height:40,borderRadius:6,justifyContent:"center", alignItems:'center',marginLeft:20}}>
              <Image  source={require("./src/Image/social.png")} style={[styles.icons, {tintColor:"white",alignSelf:"center"}]}/><Text  style={{fontSize:18,paddingLeft:10, fontWeight:"bold", color:"white"}}>LinkedIn</Text></TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.para}>
            <Text style={{fontSize:18,color:"white", marginBottom:5, fontWeight:"bold", alignSelf:"flex-start"}}>About</Text>
            <Text style={[styles.texts,{textAlign:"justify"}] }>
              I'm Joshua Mills, a 23-year-old Ghanaian IT Technician and Software Developer. 
              With a passion for technology, I excel in troubleshooting hardware and crafting software solutions. Beyond work, I enjoy exploring Ghana's culture and cuisine. 
              Committed to continuous learning, I strive to make a positive impact through my IT expertise.
              In my role as an IT Technician, I bring a meticulous approach to problem-solving, ensuring smooth operations and efficient resolution of technical issues. As a Software Developer, I thrive on the creative process of transforming ideas into functional applications, utilizing my coding skills to deliver high-quality solutions.

            </Text>
            
            
            <Text style={{fontSize:18,color:"white" , marginTop:20,marginBottom:5, fontWeight:"bold", alignSelf:"flex-start"}}>Interests</Text>
            <Text style={[styles.texts,{textAlign:"justify"}]}>
              I'm deeply passionate about technology, with a focus on programming, repairing, and upgrading devices. 
              I find joy in deciphering the inner workings of gadgets and breathing life into lines of code. 
              Beyond technology, I also enjoy immersing myself in the worlds of music and movies, finding solace and inspiration in their captivating narratives and melodies.
               My interests in technology and entertainment converge, forming a rich tapestry of experiences that define who I am.
            </Text>
          
          </ScrollView>

        </View>

        <View style={styles.navIcons}> 
          <TouchableOpacity onPress={() => buttonHandler("Twitter")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center",width:35, height:35,marginRight:38,borderRadius:6}}><Image  source={require("./src/Image/twitter.png")} style={[styles.icons ]}/></TouchableOpacity>
          <TouchableOpacity onPress={() => buttonHandler("Telegram")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginRight:38,borderRadius:6}}><Image  source={require("./src/Image/telegram.png")} style={[styles.icons ]}/></TouchableOpacity>
          <TouchableOpacity onPress={() => buttonHandler("Github")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,borderRadius:6}}><Image  source={require("./src/Image/github.png")} style={[styles.icons]}/></TouchableOpacity>
          <TouchableOpacity onPress={() => buttonHandler("WhatsApp")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginLeft:38,borderRadius:6}}><Image  source={require("./src/Image/whatsapp.png")} style={[styles.icons]}/></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}


export default BusinesCard;