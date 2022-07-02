import React, { useEffect } from "react";
import { Modal } from "antd";
import { useState } from "react";
import {
  ModalStyle,
  NotFoundStyle,
  RecoverButtonStyle,
  RecoverStyle,
} from "./RecoverModal.style";

const NotFound = () => {
  return (
    <NotFoundStyle>
      <p className="notFound__title">No search results</p>
      <p className="notFound__text">
        Your search did not return any results. Please try again with other
        information.
      </p>
    </NotFoundStyle>
  );
};

export default function RecoverModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verified, setVerified] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <RecoverStyle>
      <p className="recover__resetPassword" onClick={showModal}>
        Reset password
      </p>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
        width={600}
      >
        <ModalStyle>
          <p className="recover__title">Recover your password</p>
          <hr />
          {!verified ? <NotFound /> : null}
          <p className="recover__text">
            Please enter your email address to search for your account.
          </p>
          <form>
            <input type="email" placeholder="Email address" required/>
          </form>
          <RecoverButtonStyle type={'submit'} value='Search'
            onClick={() => {
              setVerified(!verified);

              console.log("Recover Button");
            }}
          />
        </ModalStyle>
      </Modal>
    </RecoverStyle>
  );
}
