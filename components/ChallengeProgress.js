import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Button } from 'react-native';
import * as Progress from 'react-native-progress';
import * as firebase from 'firebase';
import "firebase/database";

export function ChallengeProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        console.log("ready to listen");
        var ref = firebase.database().ref('test/');
        ref.on('value', (snapshot) => {
        const data = snapshot.val();
        setProgress(data);
        });
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 15 }}>Complete some task here fdak ladsfk dslaf klasdf kdlsafk kflakl kflakl kflakl kflakl kflakl  kflakl</Text>
            <Progress.Bar progress={progress} width={200} />
        </View>
    );
}