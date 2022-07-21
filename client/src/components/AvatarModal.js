import { Modal } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAvatar, addFirstTimeLogged } from "../state/userSlice";
import Avatar from "react-avatar-edit";
import styled from "styled-components";

export default function AvatarModal() {
  console.log("fatim zahra");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { avatar } = useSelector((state) => state.user);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios
      .put(
        "http://localhost:3001/profile/me/Avatar",
        {
          avatar: preview,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((value) => {
        dispatch(addAvatar(preview));
        setIsModalVisible(false);
        dispatch(addFirstTimeLogged(false));
      });
  };

  const handleCancel = () => {
    setPreview(avatar);
    setIsModalVisible(false);
    dispatch(addFirstTimeLogged(false));
  };

  const onClose = () => {
    setPreview(avatar);
    dispatch(addFirstTimeLogged(false));
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  useEffect(() => {
    axios
      .put(
        "http://localhost:3001/profile/me/firstTimeLogged",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((value) => {
        // dispatch(addFirstTimeLogged(value.data.user.firstTimeLogged));
        // console.log("user: ", value.data.user);
      });
  }, []);
  return (
    <Modal
      title="Choose avatar"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      // footer={[]}
      width={600}
      // height={600}
    >
      <ContentStyle className="fatimezzahra">
        <Avatar
          width={500}
          height={500}
          onCrop={onCrop}
          onClose={onClose}
          src={src}
        />
      </ContentStyle>
    </Modal>
  );
}

const ContentStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red !important; */
  }
`;
