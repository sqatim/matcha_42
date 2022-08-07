import React, { useState } from "react";
import { ProfileEditPasswordStyle } from "./ProfileContent.style";

export default function ProfileEditPassword({ setEdit }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  return (
    <ProfileEditPasswordStyle>
      <div className="details">
        <div className="details__info">
          <p>Current</p>
          <input
          placeholder="Set the current password"
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
          />
        </div>
        <div className="details__info">
          <p>New</p>
          <input
          placeholder="Set the new password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="details__info">
          <p>Retype new </p>
          <input
          placeholder="retry Password"
            value={retryPassword}
            onChange={(event) => setRetryPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="profileInformationEdit__saveButton">
        <button
          className="profileInformationEdit__saveButton_cancel"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
        <button
          className="profileInformationEdit__saveButton_save"
          // onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ProfileEditPasswordStyle>
  );
}
