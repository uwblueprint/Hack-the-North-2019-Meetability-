const getSliceState = store => store.ui;

export const getTitle = store => getSliceState(store).title;
        
