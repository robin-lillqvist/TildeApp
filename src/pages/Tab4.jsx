import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Personer from '../components/Personer';
import './Tab3.css';

const Tab4 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Personer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Personer/>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
