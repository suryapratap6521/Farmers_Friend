import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers:[],
    messages: [],
    loading: false,
}

const communitySlice = createSlice({
    name: "community",
    initialState: initialState,
    reducers: {
        setMessages(state, action) {
            state.messages = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setAllUsers(state,action){
            state.allUsers=action.payload;
        }
    },
});

export const { setMessages, setLoading,setAllUsers } = communitySlice.actions;
export default communitySlice.reducer;
