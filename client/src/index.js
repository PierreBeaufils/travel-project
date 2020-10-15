// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from 'src/components/App';
// Store
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
