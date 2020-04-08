import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import AfrikanskaDjur from '../components/AfrikanskaDjur'
import './Tab2.css'

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Afrikanska djur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Afrikanska djur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AfrikanskaDjur />
      </IonContent>
    </IonPage>
  )
}

export default Tab2
