import { View,Text, ScrollView } from "react-native";
import styles from "../Styles/Styles";


const MyAbout =() =>{
    return(
    
     
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
            
  
    )
};


export default MyAbout;