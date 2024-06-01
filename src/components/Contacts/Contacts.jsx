import { useEffect, useState } from "react";
import { getContacts } from "../../api/userApi";

export function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => console.log(res));
  }, []);

  return <>Hello</>;
}
