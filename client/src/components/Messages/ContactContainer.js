import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import { ContactContainerStyle } from "./Styles/Messages.style";

export default function ContactContainerBar({ conversationsState }) {
  const { conversations } = useSelector((state) => state.messages);
  const [state, setState] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (conversationsState) {
      setLoader(false);
      const filterData = [...conversations].filter(
        (element) =>
          element.members[0].username.includes(conversationsState) ||
          element.members[1].username.includes(conversationsState)
      );
      console.log(filterData);
      setState(filterData);
      console.log("la gha dariyat");
    } else {
      console.log("wa drari wa dariyat");
      setState([...conversations]);
    }
    setLoader(true);
  }, [conversationsState]);
  return (
    <ContactContainerStyle>
      {state.map(
        (element, key) =>
          element.messages.length > 0 && (
            <Contact conversation={element} key={key} />
          )
      )}
    </ContactContainerStyle>
  );
}
