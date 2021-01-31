import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useCallback, useEffect } from 'react';
import {Bubble} from 'react-native-gifted-chat';


const styles = StyleSheet.create({
    chatContainer: {
        backgroundColor: "#FFFFFF"
    }

});

export function HabitGroupRoom() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 4,
                text: 'Nick was here',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Nick'
                }
            },
            {
                _id: 3,
                text: 'Whatz up',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'First Name'
                }
            },
            {
                _id: 2,
                text: 'Hello deveklofdser',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'First Name'
                }
            },
            {
                _id: 1,
                text: 'Hello develof',
                createdAt: new Date(),
                user: {
                    _id: 3,
                    name: 'Last Name'
                }
            }
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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