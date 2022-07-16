import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: "",
  lookingFor: "",
  tags: [],
  biography: "",
  photos: [],
  position: null,
  dataMissing: false
};

export const completeProfileSlice = createSlice({
  name: "completeProfile",
  initialState,
  reducers: {
    addGender: (state, action) => {
      state.gender = action.payload;
    },
    addLookingFor: (state, action) => {
      state.lookingFor = action.payload;
    },
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      return {
        ...state,
        tags: [...state.tags].filter((tag) => {
          return tag != action.payload;
        }),
      };
    },

    addBiography: (state, action) => {
      state.biography = action.payload;
    },
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
    removePhoto: (state, action) => {
      return {
        ...state,
        photos: [...state.photos].filter((photo) => {
          return photo != action.payload;
        }),
      };
    },
    addPosition: (state, action) => {
      state.position = action.payload;
    },
    dataMissingTrue: (state) => {
      state.dataMissing = true;
    },
    dataMissingFalse: (state,action) => {
      state.dataMissing = false;
    }
  },
});

export const {
  addGender,
  addLookingFor,
  addTag,
  removeTag,
  addBiography,
  addPhoto,
  removePhoto,
  addPosition,
  dataMissingTrue,
  dataMissingFalse,
} = completeProfileSlice.actions;

// export default completeProfileSlice.reducer;
