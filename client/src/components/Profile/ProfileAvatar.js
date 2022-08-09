import React, { useState } from "react";
import { ProfileAvatarStyle } from "./ProfileContent.style";
import AvatarModal from "../../components/AvatarModal";

export default function ProfileAvatar({ avatar }) {
  const [avatarModal, setAvatarModal] = useState(false);
  return (
    <ProfileAvatarStyle>
      {/* <AvatarModal/> */}
      <img src={avatar} />
      <div className="ProfileAvatar__edit" onClick={() => {setAvatarModal(true)}}>
        <i className="fi fi-rr-camera"></i>
      </div>
      {avatarModal && <AvatarModal editAvatar={true} setAvatarModal={setAvatarModal}/>}
    </ProfileAvatarStyle>
  );
}
