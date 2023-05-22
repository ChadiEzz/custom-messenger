import React, { useCallback, useRef } from 'react';
import { useEffect, useState } from "react";
import { IonBackButton, IonButtons, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import { hideTabBar } from '../hooks/tabBarManager';
import './Chatroom.css';

const ChatRoom: React.FC = () => {
    var chatRoomId = window.location.pathname.split('/')[2];
    const [textList, setTextList] = useState([
        ["you", "Coucou !"],
        ["me", "Hey ! Tu vas bien ?"],
        ["you", "Super merci et toi ? :)"],
        ["me", ""]
    ]);

    var contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom = useCallback(() => {
        contentRef.current && contentRef.current.scrollToBottom(400);
    }, []);

    useEffect(() => {
        hideTabBar();
    }, []);

    useEffect(() => {
        setTimeout(scrollToBottom, 50);
    });

    return (
        <IonPage id="IonPage" className='ChatRoom'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab1" />
                    </IonButtons>
                    <IonTitle>{"ChatRoom ID " + chatRoomId}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent ref={contentRef} scrollEvents={true}>
                <IonGrid id="IonGrid" className="ChatGrid">
                    {
                        textList.map((content) => {
                            if (content.length > 0 && content[1].length > 0) {
                                return <ChatBubble who={content[0]} content={content[1]}/>;
                            } else return null;
                        })
                    }
                </IonGrid>
            </IonContent>
            <IonFooter className='ChatRoomFooter'>
                <ChatInput textList={textList} changeTextList={setTextList} />
            </IonFooter>
        </IonPage>
    );
};

export default ChatRoom;
