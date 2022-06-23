import React, { useEffect } from 'react';
import { IonAvatar, IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRippleEffect } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import { showTabBar } from '../hooks/tabBarManager';
import './Tab1.css';

const Tab1: React.FC = () => {

  useEffect(() => {
    showTabBar();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Discussions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem className="ion-activatable ripple-parent" href="/chat/1442323">
            <IonAvatar>
              <img alt="" src="./elisa.jpeg" />
            </IonAvatar>
            <IonLabel>
              <h2>Elisa</h2>
              <p>omg born to be alive j'y crois pas</p>
            </IonLabel>
            <IonRippleEffect></IonRippleEffect>
          </IonItem>
          <IonItem className="ion-activatable ripple-parent" href="/chat/1442323">
            <IonAvatar>
              <img alt="" src="./elisa.jpeg" />
            </IonAvatar>
            <IonLabel>
              <h2>Maman</h2>
              <p>Elisa range ta chambre sinon...</p>
            </IonLabel>
            <IonRippleEffect></IonRippleEffect>
          </IonItem>
          <IonItem className="ion-activatable ripple-parent" href="/chat/1442323">
            <IonAvatar>
              <img alt="" src="./elisa.jpeg" />
            </IonAvatar>
            <IonLabel>
              <h2>Papa</h2>
              <p>J'ai reservé tes billets pour...</p>
            </IonLabel>
            <IonRippleEffect></IonRippleEffect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
