import React, { useState } from "react";
import { ProfileContentStyle} from "./ProfileContent.style";
import ProfileMapContent from "./ProfileMapContent";
import ProfileMapEdit from "./ProfileMapEdit";


export default function ProfileMap() {
  const [edit, setEdit] = useState(false);

  return (
    <ProfileContentStyle>
      {!edit && (
        <div className="ProfileContent__edit">
          <div
            className="ProfileContent__edit_child"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            <p>Change Position</p>
            <i className="fi fi-rs-settings"></i>
          </div>
        </div>
      )}
      {!edit ? <ProfileMapContent /> : <ProfileMapEdit setEdit={setEdit}/>}
    </ProfileContentStyle>
  );
}
