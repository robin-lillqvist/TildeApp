import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AmerikanskaDjur from '../components/AmerikanskaDjur';
import './Tab3.css';

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Amerikanska djur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Amerikanska djur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AmerikanskaDjur/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
