import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  dateOfBirth: null,
  gender: "",
  lookingFor: "",
  tags: [],
  biography: "",
  position: null,
  profileCompleted: false,
  avatar: null,
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    addLastname: (state, action) => {
      state.lastname = action.payload;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPassword: (state, action) => {
      state.password = action.payload;
    },
    addDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    addGender: (state, action) => {
      state.gender = action.payload;
    },
    addLookingFor: (state, action) => {
      state.lookingFor = action.payload;
    },
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    setTags: (state, action) => {
      return {
        ...state,
        tags: [...action.payload],
      };
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
    setPhotos: (state, action) => {
      return {
        ...state,
        photos: [action.payload],
      };
    },
    // removePhoto: (state, action) => {
    //   return {
    //     ...state,
    //     photos: [...state.photos].filter((photo) => {
    //       return photo != action.payload;
    //     }),
    //   };
    // },
    addPosition: (state, action) => {
      state.position = action.payload;
    },
    addProfileCompleted: (state, action) => {
      state.profileCompleted = action.payload;
    },
    addAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    userLogged: (state) => {
      state.logged = true;
    },
  },
});

export const {
  addFirstname,
  addLastname,
  addUsername,
  addEmail,
  addPassword,
  addDateOfBirth,
  addGender,
  addLookingFor,
  addTag,
  removeTag,
  addBiography,
  addPosition,
  addProfileCompleted,
  addAvatar,
  setTags,
  setPhotos,
  userLogged,
} = userSlice.actions;

// export default userSlice.reducer;
