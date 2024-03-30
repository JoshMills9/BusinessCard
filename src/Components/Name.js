import { View, Text } from "react-native";
import styles from "../Styles/Styles";

const MyName = () =>{
    return(

            <View style={styles.name}>
                <Text style={[styles.texts, {fontSize:30,fontWeight:"bold"}]}>Joshua Mills</Text>

                <Text style={[styles.texts, {fontSize:14}]}>React Native Developer</Text>

                <Text style={[styles.texts, {fontSize:10, padding:8}]}>JAVASCRIPT | REACT-NATIVE | PYTHON</Text>
            </View>

     
    )
}


export default MyName;