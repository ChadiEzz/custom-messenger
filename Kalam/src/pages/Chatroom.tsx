import React, { useCallback, useRef } from 'react';
import { useEffect, useState } from "react";
import { IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import { hideTabBar } from '../hooks/hideTabBar';
import './ChatRoom.css';

const ChatRoom: React.FC = () => {
    var chatRoomId = window.location.pathname.split('/')[2];
    const [textList, setTextList] = useState(['']);
    const contentRef = useRef<HTMLIonContentElement | null>(null);

    const scrollToBottom = useCallback(() => {
        contentRef.current && contentRef.current.scrollToBottom(0);
    }, []);

    useEffect(() => {
        hideTabBar();
    }, []);

    useEffect(() => {
    });

    return (
        <IonPage id="IonPage" className='ChatRoom'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{"ChatRoom ID " + chatRoomId}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent ref={contentRef} scrollEvents={true}>
                <IonGrid id="IonGrid" className="ChatGrid">
                    {
                        textList.map(entry => {
                            if (entry !== "") {
                                return <ChatBubble content={entry} who={"me"} scrollToBottom={scrollToBottom}
                                />;
                            } else return null;
                        })
                    }
                </IonGrid>
            </IonContent>
            <IonFooter className='ChatRoomFooter'>
                <ChatInput textList={textList} changeTextList={setTextList} contentRef={contentRef} />
            </IonFooter>
        </IonPage>
    );
};

export default ChatRoom;
