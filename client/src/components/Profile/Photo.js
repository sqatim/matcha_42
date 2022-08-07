import React, { useState } from "react";
import styled from "styled-components";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const confirm = () => {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "Bla bla ...",
    okText: "确认",
    cancelText: "取消",
    onOk:{},
    onCancel:{}
  });
};

const DeleteModal = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <DeleteModalStyle className="profilePhotos__deletemModal">
      <i className="fi fi-sr-cross-circle" onClick={confirm}></i>
    </DeleteModalStyle>
  );
};

export default function Photo({ element }) {
  return (
    <div className="photo__card">
      <img src={`http://localhost:3001/upload/${element}`} />
      <DeleteModal />
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
