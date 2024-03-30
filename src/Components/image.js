import { View, Image} from "react-native";

import styles from "../Styles/Styles";

const MyImage = () => {
    return(
            <View style={styles.imgContainer}>
                <Image style={{width:376, height:280,alignSelf:"center",  borderTopRightRadius:15,
                borderTopLeftRadius:15}} source={require("../Image/me.jpeg")}/>
            </View>
       
    )
}

export default MyImage;