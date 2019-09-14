const getSliceState = store => store.ui;

export const getTitle = store => getSliceState(store).title;
        
export const getLoading = store => getSliceState(store).loading;

export const getWarning = store => getSliceState(store).warning;