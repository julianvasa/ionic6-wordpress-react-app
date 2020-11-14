import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import PostsContainer from "../components/PostsContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true} mode="ios">
        <IonToolbar>
          <IonTitle>Recent posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recent posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <PostsContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
