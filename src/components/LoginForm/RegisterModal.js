import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import {
  DateOfBirthStyle,
  ModalStyle,
  RegisterButtonStyle,
  RegisterStyle,
  TitleStyle,
} from "./RegisterModal.style";
import DateSelect from "./DateSelect";
import RegisterForm from "./RegisterForm";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.value);
}

export default function RegisterModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <RegisterStyle>
      <p className="register__signUp" onClick={showModal}>
        Sign Up
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
          <TitleStyle>
            <p className="register__title">Register</p>
            <p className="register__title_description">Easy and Fast</p>
          </TitleStyle>
          <hr />
          <RegisterForm/>
        </ModalStyle>
      </Modal>
    </RegisterStyle>
  );
}
