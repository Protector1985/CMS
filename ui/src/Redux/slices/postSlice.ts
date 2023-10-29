// features/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface PostState {
    mainHeadline: string;
    postBody: string;
    slug: string;
  }
  
  const initialState: PostState = {
    mainHeadline: "",
    postBody: "",
    slug: "",
  };

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setHeadline: (state: PostState, action) => {
        state.mainHeadline = action.payload
    },
    setBody: (state: PostState, action) => {
        state.postBody = action.payload
    },
    setSlug: (state: PostState, action) => {
        state.slug = action.payload
    }
  
    
  },
});

export const { setHeadline, setBody, setSlug } = postSlice.actions;

export default postSlice.reducer;