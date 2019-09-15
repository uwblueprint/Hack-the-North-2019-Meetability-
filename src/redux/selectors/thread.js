const getSliceState = store => store.thread;

export const getThreads = store => getSliceState(store).threads;

export const getThreadId = store => getSliceState(store).thread_id || '';

export const getThread = store => getThreads(store)[getThreadId(store)];
        
export const getMessages = store => getThreads(store)[getThreadId(store)] ? getThreads(store)[getThreadId(store)].messages : [];
