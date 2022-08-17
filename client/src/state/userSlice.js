import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  directLoginRequest,
  loginRequest,
  setPositionRequest,
} from "../utils/fetchData";

const initialState = {
  id: null,
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
  firstTimeLogged: true,
  positionSelected: false,
  status: null,
  rating: 0,
};

export const postLogin = createAsyncThunk("user/postLogin", async (infos) => {
  if (infos.request == "Post")
    return await loginRequest(infos.username, infos.password);
  return await directLoginRequest();
});

export const changePositionRequest = createAsyncThunk(
  "user/changePosition",
  async (position, positionSelected) => {
    return await setPositionRequest(position, positionSelected);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.id = action.payload;
    },
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
          return tag !== action.payload;
        }),
      };
    },

    addBiography: (state, action) => {
      state.biography = action.payload;
    },
    addRating: (state, action) => {
      state.rating = action.payload;
    },
    setPhotos: (state, action) => {
      return {
        ...state,
        photos: [...action.payload],
      };
    },
    removePhoto: (state, action) => {
      return {
        ...state,
        photos: state.photos.filter((element) => element !== action.payload),
      };
    },
    addPosition: (state, action) => {
      return {
        ...state,
        position: [...action.payload],
      };
    },
    removePosition: (state) => {
      state.position = null;
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
    addFirstTimeLogged: (state, action) => {
      state.firstTimeLogged = action.payload;
    },
    setPositionSelected: (state, action) => {
      state.positionSelected = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    resetUser: () => initialState,
  },
  extraReducers: {
    [postLogin.pending]: (state, action) => {
      state.status = "pending";
    },
    [postLogin.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [postLogin.fulfilled]: (state, action) => {
      if (action.payload.state === "failed") {
        state.status = "failed";
        return;
      }
      if(action.payload.jwt)
      localStorage.setItem("token", action.payload.jwt);
      state = Object.assign(state, action.payload.user, { status: "success" });
    },
    [changePositionRequest.pending]: (state, action) => {
      state.status = "pending";
    },
    [changePositionRequest.fulfilled]: (state, action) => {
      state = Object.assign(state, {
        position: [...action.payload.position],
        status: "success",
        positionSelected: action.payload.positionSelected,
      });
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
  removePosition,
  addProfileCompleted,
  addAvatar,
  setTags,
  setPhotos,
  userLogged,
  addFirstTimeLogged,
  resetUser,
  setPositionSelected,
  removePhoto,
  addRating,
  setStatus,
  addId,
} = userSlice.actions;

// export default userSlice.reducer;
