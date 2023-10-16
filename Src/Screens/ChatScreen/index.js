import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Modal, Text, StyleSheet, FlatList } from 'react-native';
import { GiftedChat, IMessage, Bubble } from 'react-native-gifted-chat';
import moment from 'moment';

import { styles } from './style';


const ChatScreen = ({ navigation, }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Nowadays i am focusing on study this semester to get good marksAshraf?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 1,
        text: 'I am great as well! Thanks',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 1,
        text: 'Nowadays i am focusing on study this semester to get good marksNowadays i am focusing',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 1,
        text: 'I am great as well! Thanks',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 2,
        text: 'Nowadays i am focusing on study this semester to get good marks',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 2,
        text: 'Hello! What’s up?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      {
        _id: 1,
        text: 'Hello! What’s up?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'You',
          avatar: require('./Images/user.png'), 
        },
        // sent: true,
        // received: true,
      },
      
    ]);
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#F3F5FE',
            padding: '3%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 20,
            marginBottom: '6%',
            alignItems: 'flex-start',
          },
          right: {
            backgroundColor: '#1D264D',
            padding: '3%',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 10,
            marginBottom: '6%',
            alignItems: 'flex-start',
          
          },
        }}
        textStyle={{
          left: {
            color: 'black',
            textAlign: 'left',
          },
          right: {
            color: '#FFFFFF',
            textAlign: 'justify',

          },
        }}
      ></Bubble>
    );
  };
  const renderTime = (props) => {
    const { currentMessage, position, messages } = props;
  
    if (position === 'right') {
      return (
        <Text
          style={{
            color: '#626262',
            position: 'absolute',
            right: -10,
            top: 14,
          }}
        >
          {moment(currentMessage.createdAt).format('hh:mm ')}
        </Text>
      );
    } else if (position === 'left') {
      let prevMessage = null;
  
      for (let i = messages - 1; i >= 0; i--) {
        if (messages[i]._id === currentMessage._id) {
          // Found the current message, break the loop.
          break;
        }
  
        if (currentMessage.createdAt - messages[i].createdAt <= 60 * 1000) {
          // Message is within 1 minute of the current message.
          prevMessage = messages[i];
          break;
        }
      }
  
      if (!prevMessage) {
        return (
          <Text
            style={{
              color: '#626262',
              position: 'absolute',
              right: -10,
              top: 14,
            }}
          >
            {moment(currentMessage.createdAt).format('hh:mm ')}
          </Text>
        );
      }
    }
  
    return null;
  };
  
  

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar {...props}>

        <TextInput
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={{ flex: 1, fontSize: 16, marginLeft: 10 }}
        />
      </InputToolbar>
    );
  };
  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: Math.round(Math.random() * 1000000).toString(),
        text: inputText.trim(),
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'User',
        },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header_Cont} >
        <View style={styles.Header} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <TouchableOpacity onPress={() => { navigation.navigate('Connection')}} >
              <Image source={require('./Images/go_back.png')} style={styles.Go_Back_Icon} />
            </TouchableOpacity>
            <View style={styles.User_Cont} >
              <Image style={styles.UserImg} source={require('./Images/user.png')} />
              <View style={styles.UserDetail} >
                <Text style={styles.User_name} >Maansvi Goya</Text>
                <Text style={styles.Status} >Online</Text>

              </View>
            </View>

          </View>
          <TouchableOpacity onPress={() => { }} >
            <Image source={require('./Images/bell.png')} style={styles.Bell_Icon} />
          </TouchableOpacity>
        </View>


      </View>
        <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderTime={renderTime}
      />
      <View style={styles.InputOuter_View}>
             <View style={{ backgroundColor: '#FFFFFF', marginBottom: "5%", flexDirection: 'row', width: '100%', paddingTop: '1%', justifyContent: 'space-between', }} >
             <View style={styles.InputContainer}>
             <TouchableOpacity style={styles.Touch_Image} onPress={() => { alert('Smile') }}>
             <Image source={require('./Images/smile.png')} style={styles.Smile_Icon} />
             </TouchableOpacity>
            <TextInput style={styles.Textinputcontainer}
              placeholder=" Write a message..."
              placeholderTextColor={'#979797'}
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
          </View>

              <View style={styles.Circular_View}>
              <TouchableOpacity onPress={handleSend}>
              <Image
                resizeMode='contain'
                style={styles.Send_Image}
                source={require('./Images/audio.png')}
              />
              </TouchableOpacity>
           </View>
           </View>

      </View>
    </View>
  );
};

export default ChatScreen;

