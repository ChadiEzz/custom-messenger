import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChatBubble from '../components/ChatBubble';
import './Chatroom.css';

const Chatroom: React.FC = () => {
    var chatroomId = window.location.pathname.split('/')[2];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{"Chatroom ID " + chatroomId}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ChatBubble content={"J'adore les poneys"} who={"you"} />
                <ChatBubble content={"Moi aussi !"} who={"me"} />
            </IonContent>
        </IonPage>
    );
};

export default Chatroom;
