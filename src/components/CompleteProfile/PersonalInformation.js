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
      <div>
        <p>Gender</p>
        <Radio.Group options={genderOptions} onChange={onChange1} />
      </div>
      <div>
        <p>Looking for</p>
        <Radio.Group options={lookingForOptions} onChange={onChange1} />
      </div>
      <div>
        <p>Tags</p>
        <div>
          <input />
          <button>Add</button>
        </div>
      </div>
      <div>
        <p>Biography</p>
        <></>
      </div>
    </PersonalInformationStyle>
  );
}
