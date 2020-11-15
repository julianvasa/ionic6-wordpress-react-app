import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
} from "@ionic/react";
import "./Search.css";

const Search: React.FC = () => {
  const [searchStr, setSearchStr] = useState<string>("");
  
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-grid-class">
          <IonRow className="ion-row-class">
            <IonItem>
              <IonInput 
              onIonChange={(e: any) => {setSearchStr(e.target.value)}}></IonInput>
            </IonItem>
            <p>
              <IonButton href={"/search/" + searchStr} expand="block" fill="outline">
                Search
              </IonButton>
            </p>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
