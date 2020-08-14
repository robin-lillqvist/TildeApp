import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Animals from '../components/Animals'
import './Tab3.css'

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Amerikanska djur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Amerikanska djur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Animals />
      </IonContent>
    </IonPage>
  )
}

export default Tab3
