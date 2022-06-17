import React from 'react';
import './ChatInput.css';
import { IonTextarea } from '@ionic/react';

interface ContainerProps {
    content: string;
}

const ChatInput: React.FC<ContainerProps> = ({ content }) => {
    return (
        <IonTextarea id="ChatInput" className="myChatInput" autoGrow={true} placeholder="Start chatting here..." value={content}/>
    );
};

export default ChatInput;