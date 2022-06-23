import React from 'react';
import './ChatInput.css';
import { IonGrid, IonTextarea, IonIcon, IonRow, IonCol } from '@ionic/react';
import { sendOutline } from 'ionicons/icons';

interface ContainerProps {
    textList: string[]
    changeTextList: (textInput: string[]) => void;
}

const ChatInput: React.FC<ContainerProps> = ({ textList, changeTextList }) => {
    var inputContent = "";

    return (
        <IonGrid>
            <IonRow>
                <IonCol className="inputCol">
                    <IonTextarea
                        id="ChatInput"
                        className="myChatInput"
                        autoGrow={true}
                        placeholder="Start chatting here..."
                        value={inputContent}
                        onIonChange={(e) => {
                            if (e.detail.value) {
                                inputContent = e.detail.value;
                            }
                        }} />
                </IonCol>
                <IonCol className="buttonCol">
                    <IonIcon icon={sendOutline} onClick={() => {
                        changeTextList([...textList, inputContent]);
                    }} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ChatInput;