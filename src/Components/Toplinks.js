import { View, Text, Image,TouchableOpacity } from "react-native";
import styles from "../Styles/Styles";



const TopLinks = () =>{
    return(
      
                <View style={styles.topButtons}>
                    <TouchableOpacity onPress={()=> buttonHandler("Email")} style={{flexDirection:"row",backgroundColor:"white", width:130,borderRadius:6,justifyContent:"center", alignItems:'center', marginRight:20}}>
                    <Image source={require("../Image/email.png")} style={[styles.icons, {alignSelf:"center",}]}/><Text style={{fontSize:18,paddingLeft:10,fontWeight:"bold",}}>Email</Text></TouchableOpacity>

                    <TouchableOpacity  onPress={()=> buttonHandler("LinkedIn")} style={{flexDirection:"row",backgroundColor:"#4169e1", width:130,height:40,borderRadius:6,justifyContent:"center", alignItems:'center',marginLeft:20}}>
                    <Image  source={require("../Image/social.png")} style={[styles.icons, {tintColor:"white",alignSelf:"center"}]}/><Text  style={{fontSize:18,paddingLeft:10, fontWeight:"bold", color:"white"}}>LinkedIn</Text></TouchableOpacity>
                </View>
      
    )
}

export default TopLinks;