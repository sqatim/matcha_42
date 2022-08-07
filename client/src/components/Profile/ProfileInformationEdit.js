import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBiography,
  addFirstname,
  addGender,
  addLastname,
  addLookingFor,
  addUsername,
  setTags,
} from "../../state/userSlice";
import {
  ProfileInformationEditStyle,
  ProfileInformationInterestsStyle,
  ProfileInormationBiographyStyle,
} from "./ProfileContent.style";

export default function ProfileInformationEdit({ setEdit }) {
  const { firstname, lastname, username, gender, lookingFor, tags, biography } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstnameState, setFirstnameState] = useState(firstname);
  const [lastnameState, setLastnameState] = useState(lastname);
  const [usernameState, setUsernameState] = useState(username);
  const [genderState, setGenderState] = useState(gender);
  const [lookingForState, setLookingForState] = useState(lookingFor);
  const [tagsState, setTagsState] = useState(tags);
  const [tag, setTag] = useState("");
  const [biographyState, setBiographyState] = useState(biography);
  const tagDiv = useRef();

  const handleSave = () => {
    let data = {};
    if (firstname !== firstnameState)
      data = { ...data, firstname: firstnameState };
    if (lastname !== lastnameState) data = { ...data, lastname: lastnameState };
    if (username !== usernameState) data = { ...data, username: usernameState };
    if (gender !== genderState) data = { ...data, gender: genderState };
    if (lookingFor !== lookingForState)
      data = { ...data, lookingFor: lookingForState };
    if (biography !== biographyState)
      data = { ...data, biography: biographyState };
    if (tags.join() !== tagsState.join()) data = { ...data, tags: tagsState };
    axios
      .put("http://localhost:3001/profile/me/informations", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const data = response.data.user;
        for (const [key, value] of Object.entries(data)) {
          if (key === "firstname") dispatch(addFirstname(value));
          else if (key === "lastname") dispatch(addLastname(value));
          else if (key === "username") dispatch(addUsername(value));
          else if (key === "gender") dispatch(addGender(value));
          else if (key === "lookingFor") dispatch(addLookingFor(value));
          else if (key === "biography") dispatch(addBiography(value));
          else if (key === "tags") dispatch(setTags(value));
        }
        setEdit(false);
      });
  };

  useEffect(() => {
    tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
  }, []);
  return (
    <ProfileInformationEditStyle>
      <div className="details">
        <div className="details__info">
          <p>Firstname</p>
          <input
            value={firstnameState}
            onChange={(event) => setFirstnameState(event.target.value)}
          />
        </div>
        <div className="details__info">
          <p>Lastname</p>
          <input
            value={lastnameState}
            onChange={(event) => setLastnameState(event.target.value)}
          />
        </div>
        <div className="details__info">
          <p>Username</p>
          <input
            value={usernameState}
            onChange={(event) => setUsernameState(event.target.value)}
          />
        </div>
        <div className="details__info">
          <p>Gender</p>
          <select
            value={genderState}
            onChange={(event) => setGenderState(event.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="details__info">
          <p>Looking for</p>
          <select
            value={lookingForState}
            onChange={(event) => setLookingForState(event.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
      </div>
      <ProfileInormationBiographyStyle>
        <p className="profileInformation__biography">Biography</p>
        <textarea
          className="profileInformation__biography_area"
          value={biographyState}
          onChange={(event) => setBiographyState(event.target.value)}
        />
      </ProfileInormationBiographyStyle>
      <ProfileInformationInterestsStyle>
        <p className="profileInformation__tags">List of interests</p>
        <div
          ref={tagDiv}
          className="profileInformation__tags_div profileInformation__tags_edit"
        >
          {tagsState.map((element, key) => (
            <p key={key} className="profileInformation__tags_text">
              #{element}
            </p>
          ))}
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTagsState([...tagsState, tag]);
                setTag("");
                tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
              }
            }}
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          />
        </div>
      </ProfileInformationInterestsStyle>
      <div className="profileInformationEdit__saveButton">
        <button
          className="profileInformationEdit__saveButton_cancel"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
        <button
          className="profileInformationEdit__saveButton_save"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ProfileInformationEditStyle>
  );
}
