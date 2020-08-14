import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Vehicles from '../components/Vehicles'
import './Tab2.css'

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fordon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Fordon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Vehicles />
      </IonContent>
    </IonPage>
  )
}

export default Tab2
