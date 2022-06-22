import React, {useEffect} from 'react';
import './ChatBubble.css';
import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';

interface ContainerProps {
  content: string;
  who: string;
  scrollToBottom(): void
}

const ChatBubble: React.FC<ContainerProps> = ({ content, who, scrollToBottom }) => {

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    who === "me" ?
      <IonRow className="myBubbleContainer">
        <IonCol>
          <IonCard className="myBubble" color="success">
            <IonCardContent>
              {content}
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      :
      <IonRow className="yourBubble">
        <IonCard>
          <IonCardContent>
            {content}
          </IonCardContent>
        </IonCard>
      </IonRow>
  );
};

export default ChatBubble;
