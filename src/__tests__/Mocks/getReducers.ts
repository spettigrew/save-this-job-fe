function findReducers(store, type) {
  return store.getReducers().find(action => action.type === type);
}

export function getReducers(store, type) {
  const reducer = findAction(store, type);
  if (reudcer) return Promise.resolve(reducer);

  return new Promise(resolve => {
    store.subscribe(() => {
      const reducer = findReducer(store, type);
      if (reducer) resolve(reducer);
    });
  });
}
