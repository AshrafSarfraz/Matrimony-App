import {StyleSheet} from 'react-native'
export const styles=StyleSheet.create({
    Main_Cont:{
     backgroundColor:'#FFFFFF',
     padding:'3%'
    },
    Header_Cont:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'space-between'
    },
    Go_Back:{
      width:40,height:40,
      resizeMode:"contain"
    },
    Header_Txt:{
      fontSize:18,
      fontWeight:'bold',
      fontFamily:'poppin',
      color:'#000000'
    },
    Bell:{
      width:35,height:35,
      resizeMode:"contain"
    },
    Btn_Container:{
      flexDirection:"row",
      backgroundColor:'#F3F5FE',
      padding:'1%',
      marginTop:"5%",
      alignItems:"center",
      justifyContent:"space-between"
    },
    Switch:{
      padding:"3%",
      width:'30%',
      alignItems:"center"
    },
    Btn_Txt:{
      fontSize:14,
      fontWeight:'600',
      color:'#000000'
    },
    Active_Btn:{
      backgroundColor:'#F97B22',
      borderRadius:5
    },
    Active_Txt:{
      color:'#FFFFFF'
    },
  
  
    Cart: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginTop:"4%",
      width: '100%',
    
      padding: '2%',
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:"space-between"
    },
    Item_Detail:{
      flexDirection:"row",
      alignItems:"center",
    },
    ScanImg:{
      width:25,height:25,
      bottom:'2%',
      right:'15%'
    },
    User_Img: {
      width: 50, height: 50,
      borderRadius:10    
    },
  
    UserName: {
      fontSize: 16,
      lineHeight: 18,
      color: '#1D264D',
      fontWeight:"700"
      
     
    },
    Profession: {
      fontSize: 14,
      lineHeight: 16,
      color: '#000000', 
    },
    Detail: {
      fontSize: 14,
      lineHeight: 16,
      marginBottom: '2%', 
      color: '#626262', 
    },
  
    Timing:{
      color:'#777777',
      fontSize:12,
      fontWeight:'bold',
       bottom:'15%',
       right:"10%"
    },
  
  
  })