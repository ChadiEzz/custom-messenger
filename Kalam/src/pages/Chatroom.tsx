import React from 'react';
import { useEffect } from "react";
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import { hideTabBar } from '../hooks/hideTabBar';
import { newLineText } from '../hooks/textParcing';
import './ChatRoom.css';

const ChatRoom: React.FC = () => {
    var chatRoomId = window.location.pathname.split('/')[2];
    var textInput = ""

    useEffect(() => {
        hideTabBar();
    }, []);

    return (
        <IonPage className='ChatRoom'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{"ChatRoom ID " + chatRoomId}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ChatBubble content={"J'adore les poneys"} who={"you"} />
                <ChatBubble content={"Moi aussi !"} who={"me"} />
            </IonContent>
            <IonFooter className='ChatRoomFooter'>
                <ChatInput content={textInput} />
            </IonFooter>
        </IonPage>
    );
};

export default ChatRoom;
