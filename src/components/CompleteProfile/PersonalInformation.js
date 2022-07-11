import React from "react";
import { PersonalInformationStyle } from "./Content.style";
import { Radio } from "antd";

const genderOptions = ["Male", "Female", "Other"];
const lookingForOptions = ["Male", "Female", "Both"];

const onChange1 = ({ target: { value } }) => {
  console.log("radio1 checked", value);
  // setValue1(value);
};

export default function PersonalInformation() {
  return (
    <PersonalInformationStyle>
      <div className="personnalInformation__gender">
        <p>Gender</p>
        <Radio.Group
          className="personnalInformation__radio"
          options={genderOptions}
          onChange={onChange1}
        />
      </div>
      <div>
        <p>Looking for</p>
        <Radio.Group
          className="personnalInformation__radio"
          options={lookingForOptions}
          onChange={onChange1}
        />
      </div>
      <div className="personnalInformation__tags">
        <p>Tags</p>
        <div className="personnalInformation__tags_input">
          <input />
          <button className="personnalInformation__button_add">ADD</button>
        </div>
      </div>
      <div>
        <p className="personnalInformation__biography_text">Biography</p>
        <div className="personnalInformation__biography_textarea">
          <textarea name="comment"></textarea>
          <button className="personnalInformation__button_add">ADD</button>
        </div>
      </div>
    </PersonalInformationStyle>
  );
}
