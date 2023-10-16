import { StyleSheet } from "react-native";
import { Colors } from "../../Themes/Colors";
import { Fonts } from "../../Themes/Fonts";


export const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor:'#FFFFFF',    
      },
      Header_Cont:{
     
       color:Colors.Grey9,
       padding:'3%',
       paddingBottom:'0%'
      },
      Header:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginVertical:'2%'
      },
      Go_Back_Icon:{
       width:20,height:20,
       marginHorizontal:'3%',
       resizeMode:"contain"
      },
      User_Cont:{
        flexDirection:"row",
        alignItems:"center"
      },
      User_name:{
       fontSize:14,color:'#000000',
       fontWeight:"bold"
      },
      Status:{
        fontSize:12,color:'#626262'
       },
      Bell_Icon:{
       width:35,height:35,tintColor:'#000000',
       resizeMode:"contain",
       marginRight:'1%'
      },
      UserImg:{
        width:30,height:30,
        marginRight:"5%"
      },
     
     
      footer: {
      
        height: 35,
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    
   
   
  
  mainContainer:{
    flex: 1,
     marginBottom: '1%'
  },
  Send_Image:{
     height: 50, 
     width: 50,
    
     },
  Circular_View:{
    height:65,
    width:'15%',
    top:'0%',
    paddingLeft:'2%',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:"10%",
    alignItems:'flex-end',
    marginRight:'5%'
    
  },
  Smile_Icon:{
    width:20,
    height:20,
  },
  IconImage:{
    width:15,
    height:15,
  },
  textInput:{
    
  },
  modalContainer: {
    flex: 1,
    width: '100%',
  
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginLeft:'5%',
    marginRight:"5%",
   alignSelf:'center'
  },
  modalChildContainer: {
    height:"8%",
    width: '35%',
     backgroundColor: Colors.White,
    borderRadius: 5,
    top:'7%',
   left:'10%',
   flexDirection:'row'
     
  },
  
  
  
  
  InputOuter_View: {
     flexDirection: 'row', 
     alignItems: 'center',
      height:20,
      width:"100%",
      backgroundColor:'#FFFFFF'
      
    
     },
  
  InputContainer:{
    flexDirection:'row',
    width:"75%",
    backgroundColor:'#F0F2FB',
    borderRadius:25,
    height:55,
    marginVertical:"2%",
    elevation:1,
    paddingHorizontal:'2%',
    marginLeft:"5%",
    
  },
  inputToolbar:{
    width:"100%",
    alignItems:"center"
  
  },
  VectorImage:{
  width:14.8,
  height:16, 
  alignSelf:'center',
  marginRight:10,
  resizeMode:'contain'
  },
  Textinputcontainer:{
  width:"70%",
  color:Colors.Black
  },
  Touch_Image:{
    alignSelf:'center',
   marginLeft:5,
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginBottom:'3%',
    width: '100%',
    paddingHorizontal: '2%',
    flexDirection:'row',
    alignItems:'center'
  },
  Product_Img: {
    width:110, height: 100,
     marginRight:'4%'
  },
  
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 18,
    color: Colors.Black,
    marginVertical: '4%',
    marginHorizontal: '4%'
  },
  MeetingPoint: {
    fontSize: 10,
    fontFamily: Fonts.SF_Regular,
    lineHeight: 15,
    color: Colors.Green,
    width:150,
    marginBottom: '2%',
    marginLeft: '4%',
    marginRight:'1%',
  },
  Price_Txt: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Black,
    marginBottom: '2%',
    marginHorizontal: '4%'
  },
  Total: {
    fontSize: 12,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 15,
    color: Colors.Green,
    marginBottom: '2%',
    marginRight: '4%'
  },
  From_Txt:{
    fontSize: 18,
    fontFamily: Fonts.SF_Medium,
    lineHeight: 22,
    color: Colors.Black,
    marginVertical: '3%',
   
  },
  });