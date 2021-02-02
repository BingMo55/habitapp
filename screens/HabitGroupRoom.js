import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useCallback, useEffect } from 'react';
import {Bubble} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import "firebase/database";


const styles = StyleSheet.create({
    chatContainer: {
        backgroundColor: "#FFFFFF"
    }

});

function convertFirebaseDataToMessageList(obj) {
    let sortedKeys = Object.keys(obj).sort();
    let result = [];
    for (let i = 0; i < sortedKeys.length; i++) {
        let o = obj[sortedKeys[i]];
        console.log("o", o);
        result.push({
            _id: o._id,
            text: o.text,
            createdAt: o.createdAt,
            user: {
                _id: o.user._id,
                name: o.user.name
            }
        });
    }
    return result.reverse();
}

export function HabitGroupRoom() {
    useEffect(() => {
        console.log("ready to listen in HabitGroupRoom");
        var ref = firebase.database().ref('messages/');
        ref.on('value', (snapshot) => {
        const data = snapshot.val();
        setMessages(convertFirebaseDataToMessageList(data));
        });
    }, []);

    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 4,
    //             text: 'Nick was here',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 1,
    //                 name: 'Nick'
    //             }
    //         },
    //         {
    //             _id: 3,
    //             text: 'Whatz up',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'First Name'
    //             }
    //         },
    //         {
    //             _id: 2,
    //             text: 'Hello deveklofdser',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'First Name'
    //             }
    //         },
    //         {
    //             _id: 1,
    //             text: 'Hello develof',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 3,
    //                 name: 'Last Name'
    //             }
    //         }
    //     ])
    // }, [])

    const onSend = useCallback((messages = []) => {
        console.log("mess", messages);
        firebase.database().ref('messages/').push({
            _id: 1,
            text: 'Hello!',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'Test User'
            }
        });
        
    }, [])

    return (
            <GiftedChat
                renderUsernameOnMessage = {true}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                style={styles.chatContainer}
            />
    );
}