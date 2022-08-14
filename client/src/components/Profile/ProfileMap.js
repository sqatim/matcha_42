import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ProfileContentStyle } from "./ProfileContent.style";
import ProfileMapContent from "./ProfileMapContent";
import ProfileMapEdit from "./ProfileMapEdit";

export default function ProfileMap({ otherUser, userData }) {
  const [edit, setEdit] = useState(false);
  const { username } = useSelector((state) => state.user);

  return (
    <ProfileContentStyle>
      {otherUser == username && !edit && (
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
      {otherUser && !edit ? (
        <ProfileMapContent otherUser={otherUser} userData={userData} />
      ) : (
        <ProfileMapEdit setEdit={setEdit} />
      )}
    </ProfileContentStyle>
  );
}
