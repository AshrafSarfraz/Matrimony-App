import { View, Text,ScrollView,StyleSheet,Image, TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import { ConnectionData } from './DummyData'
import { styles } from './style'


const Connection = ({navigation}) => {
  const [BtnState,setBtnState]=useState(0)


  const renderItem= ({ item }) => (
    <TouchableOpacity onPress={() => { navigation.navigate('Chat') }}>
    <View style={styles.Cart}>
        <View style={styles.Item_Detail} >
        <Image source={item.Image1} style={styles.User_Img} resizeMode='cover' />
        <View style={{marginLeft:"6%"}} >
        <Text style={styles.UserName}>{item.UserName}</Text>
        <View style={{ flexDirection: 'row',marginTop:"3%"  }}>
          <Text style={styles.Profession}>{item.Profession}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop:"3%" }}>
          <Text style={styles.Detail}>{item.Detail}</Text>
        </View>
        </View>
        </View>
      <Text style={styles.Timing} >11:30</Text>
    </View>
    <View style={{width:'80%',height:1,backgroundColor:'#EBEBEB'}} />
    </TouchableOpacity>
  )

  return (
   <ScrollView contentContainerStyle={styles.Main_Cont} >
    <View  style={styles.Header_Cont} >
      <TouchableOpacity  onPress={()=>{navigation.goBack()}} >
      <Image source={require('./Images/back.png')}  style={styles.Go_Back} />
      </TouchableOpacity>
      <Text  style={styles.Header_Txt}>Connections</Text>
      <TouchableOpacity  onPress={()=>{}} >
      <Image source={require('./Images/bell.png')}  style={styles.Bell} />
      </TouchableOpacity>
    </View>
    <View  style={styles.Btn_Container} >
    <TouchableOpacity onPress={()=>{setBtnState(0)}}  style={[styles.Switch,BtnState===0?styles.Active_Btn:null]}  >
    <Text style={[styles.Btn_Txt,BtnState===0?styles.Active_Txt:null]} >Accpected</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setBtnState(1)}}  style={[styles.Switch,BtnState===1?styles.Active_Btn:null]}  >
    <Text style={[styles.Btn_Txt,BtnState===1?styles.Active_Txt:null]} >Request</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setBtnState(2)}}  style={[styles.Switch,BtnState===2?styles.Active_Btn:null]}  >
    <Text style={[styles.Btn_Txt,BtnState===2?styles.Active_Txt:null]} >Pending</Text>
    </TouchableOpacity>
    </View>

    {BtnState===0? 
        <View>
           <FlatList
           data={ConnectionData}
           renderItem={renderItem}
           /> 
           </View>
           :null
         
       } 
       

   </ScrollView>
  )
}

export default Connection
