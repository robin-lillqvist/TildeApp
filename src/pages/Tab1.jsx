import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Animals from '../components/Animals'
import './Tab1.css'

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Djur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Djur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Animals />
      </IonContent>
    </IonPage>
  )
}

export default Tab1
