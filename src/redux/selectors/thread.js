const getSliceState = store => store.thread;

export const getThreads = store => getSliceState(store).threads;

export const getThread = store => getSliceState(store).thread;
        
export const getMessages = store => getSliceState(store).thread.messages;
