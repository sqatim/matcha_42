import React, { useEffect } from "react";
import BrowseContent from "../../components/Browse/BrowseContent";
import { BrowseStyle } from "./Browse.style";

export default function Browse({ setName }) {
  useEffect(() => {
    setName("Browse");
  }, []);
  return (
    <BrowseStyle>
      <BrowseContent />
    </BrowseStyle>
  );
}
