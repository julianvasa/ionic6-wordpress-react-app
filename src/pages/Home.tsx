import React from "react"
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import "./Home.css"
import Posts from "../components/Posts"

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recent posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recent posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <Posts />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
