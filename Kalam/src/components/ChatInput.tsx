import React, { MutableRefObject } from 'react';
import './ChatInput.css';
import { IonGrid, IonTextarea, IonIcon, IonRow, IonCol } from '@ionic/react';
import { sendOutline } from 'ionicons/icons';

interface ContainerProps {
    textList: string[]
    changeTextList: (textInput: string[]) => void;
    contentRef: MutableRefObject<HTMLIonContentElement | null>;
}

const ChatInput: React.FC<ContainerProps> = ({ textList, changeTextList, contentRef }) => {
    var inputContent = "";

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
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
                <IonCol>
                    <IonIcon icon={sendOutline} onClick={() => {
                        changeTextList([...textList, inputContent]);
                    }} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ChatInput;