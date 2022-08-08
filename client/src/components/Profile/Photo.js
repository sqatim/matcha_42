import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { useDispatch } from "react-redux";
import { removePhoto } from "../../state/userSlice";
import axios from "axios";

const confirm = (setVisible, dispatch, element) => {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "Do you want to remove this picture!!!",
    okText: "Accept",
    cancelText: "Cancel",
    onOk() {
      console.log("Save");
      axios
        .delete(`http://localhost:3001/profile/me/photos/${element}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((value) => {
          dispatch(removePhoto(element));
          setVisible(false);
        });
    },
    onCancel() {
      console.log("Cancel");
      setVisible(false);
    },
  });
};

const DeleteModal = ({ element }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <DeleteModalStyle className="profilePhotos__deletemModal">
      <i
        className="fi fi-sr-cross-circle"
        onClick={() => confirm(setVisible, dispatch, element)}
      ></i>
    </DeleteModalStyle>
  );
};

export default function Photo({ element }) {
  const effectRun = useRef(true);
  // useEffect(() => {
  //   if(effectRun)
  //   {
  //     console.log(element);
  //     return () => {
  //       effectRun.current = false
  //     }
  //   }
  // },[])
  return (
    <div className="photo__card">
      <img src={`http://localhost:3001/upload/${element}`} />
      <DeleteModal element={element} />
    </div>
  );
}

const DeleteModalStyle = styled.div`
  width: auto;
  height: 21px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -60%);
  display: none;
  i {
    font-size: 150%;
    width: 21px;
    height: 21px;
    color: red;
  }
`;
