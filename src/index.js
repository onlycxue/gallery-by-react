import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import RootRouter from './config/Route-Config'

require('./styles/App.css')
require('./styles/ShopItem.css')
require('./styles/ShopItemAdd.css')


// Render the main component into the dom
ReactDOM.render(<div>
    {RootRouter}
</div>, document.getElementById('app'));
