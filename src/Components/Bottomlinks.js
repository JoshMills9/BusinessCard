import { View, Linking, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/Styles";


const BottomLinks = () =>{

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
    
            <View style={styles.navIcons}> 
                <TouchableOpacity onPress={() => buttonHandler("Twitter")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center",width:35, height:35,marginRight:38,borderRadius:6}}><Image  source={require("../Image/twitter.png")} style={[styles.icons ]}/></TouchableOpacity>
                <TouchableOpacity onPress={() => buttonHandler("Telegram")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginRight:38,borderRadius:6}}><Image  source={require("../Image/telegram.png")} style={[styles.icons ]}/></TouchableOpacity>
                <TouchableOpacity onPress={() => buttonHandler("Github")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,borderRadius:6}}><Image  source={require("../Image/github.png")} style={[styles.icons]}/></TouchableOpacity>
                <TouchableOpacity onPress={() => buttonHandler("WhatsApp")} style={{backgroundColor:"white",justifyContent:"center", alignItems:"center", width:35, height:35,marginLeft:38,borderRadius:6}}><Image  source={require("../Image/whatsapp.png")} style={[styles.icons]}/></TouchableOpacity>
            </View>

      
    )
};

export default BottomLinks;