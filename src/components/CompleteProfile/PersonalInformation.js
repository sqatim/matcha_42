import React, { useEffect } from "react";
import { PersonalInformationStyle } from "./Content.style";
import { Radio, Tag } from "antd";
import { useState } from "react";
import { useRef } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addBiography,
  addGender,
  addLookingFor,
  addTag,
  removeTag,
} from "../../state/completeProfileSlice";

const genderOptions = ["Male", "Female", "Other"];
const lookingForOptions = ["Male", "Female", "Both"];

const handleBiography = (event, setBiography) => {
  setBiography(event.target.value);
};

export default function PersonalInformation() {
  const dispatch = useDispatch();
  const { gender, lookingFor, tags, biography } = useSelector(
    (state) => state.completeProfile
  );
  const [biographyState, setBiographyState] = useState(biography);
  const [tag, setTag] = useState("");
  const tagDiv = useRef();
  const input = useRef();

  useEffect(() => {
    tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
  }, []);
  useEffect(() => {
    console.log("hiii");
    console.log(tags);
  }, [tags]);
  return (
    <PersonalInformationStyle>
      <div className="personnalInformation__gender">
        <p>Gender</p>
        <Radio.Group
          className="personnalInformation__radio"
          options={genderOptions}
          onChange={(event) => {
            dispatch(addGender(event.target.value));
          }}
          value={gender}
        />
      </div>
      <div>
        <p>Looking for</p>
        <Radio.Group
          className="personnalInformation__radio"
          options={lookingForOptions}
          onChange={(event) => dispatch(addLookingFor(event.target.value))}
          value={lookingFor}
        />
      </div>
      <div className="personnalInformation__tags">
        <p>Tags</p>
        <div className="personnalInformation__tags_input">
          <div ref={tagDiv} className="personnalInformation__tags_input_tags">
            {tags.map((element, key) => (
              <div key={key} className="personnalInformation__tags_tag">
                <p>{element}</p>
                <CloseOutlined
                  style={{ fontSize: "100%", color: "#B8B8B8" }}
                  onClick={() => {
                    dispatch(removeTag(element));
                  }}
                />
              </div>
            ))}
            <input
              ref={input}
              value={tag}
              onChange={(event) => {
                setTag(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  dispatch(addTag(event.target.value));
                  setTag("");
                  tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
                }
              }}
            />
          </div>
          <button
            className="personnalInformation__button_add"
            onClick={() => {
              dispatch(addTag(tag));
              setTag("");
              input.current.focus();
              tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
            }}
          >
            ADD
          </button>
        </div>
      </div>
      <div>
        <p className="personnalInformation__biography_text">Biography</p>
        <div className="personnalInformation__biography_textarea">
          <textarea
            value={biographyState}
            onChange={(event) => handleBiography(event, setBiographyState)}
            name="comment"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                dispatch(addBiography(event.target.value));
                tagDiv.current.scrollLeft = tagDiv.current.scrollWidth;
              }
            }}
          ></textarea>
          <button
            className="personnalInformation__button_add"
            onClick={() =>
              dispatch(addBiography(biographyState))
            }
          >
            ADD
          </button>
        </div>
      </div>
    </PersonalInformationStyle>
  );
}
