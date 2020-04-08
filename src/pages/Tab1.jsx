import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import SvenskaDjur from '../components/SvenskaDjur'
import './Tab1.css'

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Svenska djur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Svenska djur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SvenskaDjur />
      </IonContent>
    </IonPage>
  )
}

export default Tab1
