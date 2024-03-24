import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"black",
        marginTop:20
    },

    mainContainer:{
        flex:1,
        margin:8,
        backgroundColor: "rgba(0, 0, 20, 0.6)",
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },

    imgContainer: {
      whitdth:376,
      height:280, 
      
    },

    infoContainer:{
        marginTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:"flex-start",
    },
    texts:{
        color: "white",
        fontSize: 15,
        
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
        alignItems:"center",
        paddingTop:15,
        paddingLeft:35,
        paddingRight:35,
        paddingBottom:15
    },

    navIcons:{
        backgroundColor:"rgba(0, 0, 20, 1)",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
    }
});

export default styles;