const getSliceState = store => store.user;

export const getUser = store => getSliceState(store).user;
        
export const getFriends = store => getSliceState(store).friends;
        
export const getFollowers = store => getSliceState(store).followers;