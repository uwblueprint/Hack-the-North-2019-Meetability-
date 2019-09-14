const getSliceState = store => store.user;

export const getUser = store => getSliceState(store).user;
        
