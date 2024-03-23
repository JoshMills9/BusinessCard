import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"gray",
        marginTop:20
    },

    mainContainer:{
        flex:1,
        margin:8,
        backgroundColor: "rgba(0, 0, 20, 0.97)",
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },

    imgContainer: {
      whitdth:376,
      height:280, 
      
    },

    infoContainer:{
        marginTop:30,
        flex:2,
        alignItems:'center',
        justifyContent:"flex-start",
 
    },
    texts:{
        color: "white",
        fontSize: 15
    },

    topButtons:{
        width:"100%",
        flexDirection:"row",
        padding:15,
        justifyContent:"center",
   
    },

    icons:{
        width:20,
        height:20
    },

    para: {
        justifyContent:"center",
        padding:20
    },

    navIcons:{
        backgroundColor:"rgba(0, 0, 20, 1)",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:10
    }
});

export default styles;