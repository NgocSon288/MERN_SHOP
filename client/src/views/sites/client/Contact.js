import React, { useEffect } from "react";

import ClientContact from "./../../../components/sites/client/ClientContact";

export default function Contact({ title }) {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <ClientContact />
    </div>
  );
}
