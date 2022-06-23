import React, { useEffect } from 'react';
import './ChatBubble.css';
import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';

interface ContainerProps {
  content: string;
  who: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ content, who }) => {

  useEffect(() => {
  }, []);

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
      <IonRow className="yourBubbleContainer">
        <IonCol>
          <IonCard className="yourBubble">
            <IonCardContent>
              {content}
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
  );
};

export default ChatBubble;
