import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';


import React, { Component } from 'react';
import axios from 'axios';

import './Tab1.css';
import Home from './Home';
class Inicio extends Component {
  API_KEY = '<your api key here/>';
  API_URL = `http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${this.API_KEY}`

  state = {
    items: []
  }

  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
      .then((data) => {
        this.setState({ items: data.articles })
        console.log(this.state.items)
      })
  }
  render() {
    return (
      <IonApp>

        <IonContent>
 <Home/>
          {this.state.items.map((item: any) => (
            <IonCard>
              <img src={item.urlToImage} />
              <IonCardHeader>

                <IonCardTitle>
                  {item.title}

                </IonCardTitle>
                <IonCardSubtitle>
                  {item.author}
                </IonCardSubtitle>

              </IonCardHeader>
              <IonCardContent>
                <p>{item.content}</p>
                <IonButton href={item.url}>
Read</IonButton>
              </IonCardContent>
            </IonCard>

          ))}

        </IonContent>
      </IonApp>

    );
  }
}

export default Inicio;
