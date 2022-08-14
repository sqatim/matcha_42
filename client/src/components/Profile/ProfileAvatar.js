import React, { useEffect, useState } from "react";
import {
  ProfileAvatarStatusStyle,
  ProfileAvatarStyle,
} from "./ProfileContent.style";
import AvatarModal from "../../components/AvatarModal";

export default function ProfileAvatar({ avatar, otherUser, status, username }) {
  const [avatarModal, setAvatarModal] = useState(false);
  return (
    <ProfileAvatarStyle>
      {/* <AvatarModal/> */}
      <img src={avatar} />
      {otherUser == username ? (
        <div
          className="ProfileAvatar__edit"
          onClick={() => {
            setAvatarModal(true);
          }}
        >
          <i className="fi fi-rr-camera"></i>
        </div>
      ) : (
        <ProfileAvatarStatusStyle status={status}>
          <div></div>
        </ProfileAvatarStatusStyle>
      )}
      {avatarModal && (
        <AvatarModal editAvatar={true} setAvatarModal={setAvatarModal} />
      )}
    </ProfileAvatarStyle>
  );
}
