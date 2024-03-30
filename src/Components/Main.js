import { SafeAreaView, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import styles from "../Styles/Styles";

import MyImage from './image';
import MyName from './Name';
import TopLinks from './Toplinks';
import MyAbout from './About';
import BottomLinks from './Bottomlinks';

const MainComponent= () =>{
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            
            <View style={styles.mainContainer}>
                <MyImage />

            <View style={styles.infoContainer}>
                <MyName />

                <TopLinks />

                <MyAbout />
            </View>
        
            <BottomLinks />
            </View>
        </SafeAreaView>
    )
}

export default MainComponent;