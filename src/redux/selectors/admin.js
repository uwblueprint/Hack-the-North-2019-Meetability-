const getSliceState = store => store.admin;

export const getSignUpFormData = store => getSliceState(store).sign_up_form;
        
