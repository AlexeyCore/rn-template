import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';

import sagas from './sagas';
import reducers from './reducers';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const middleware = [sagaMiddleware];
  if (__DEV__) {
    middleware.push(logger);
  }
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate()
    )
  );
  sagaMiddleware.run(sagas);
  persistStore(store, { storage: AsyncStorage, blacklist: ['loginModals'] });
  return store;
};

export default configureStore();