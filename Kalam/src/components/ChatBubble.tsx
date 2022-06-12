import React from 'react';
import './ChatBubble.css';
import { IonCard, IonCardContent } from '@ionic/react';

interface ContainerProps {
  content: string;
  who: string;
}

const ChatBubble: React.FC<ContainerProps> = ({ content, who }) => {
  return (
    who === "me" ?
      <IonCard className="myBubble tail-bottom-right" color="success">
          <IonCardContent>
              {content}
          </IonCardContent>
      </IonCard>
      :
      <IonCard className="yourBubble">
          <IonCardContent>
              {content}
          </IonCardContent>
      </IonCard>
  );
};

export default ChatBubble;
