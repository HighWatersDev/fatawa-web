import React, { useEffect, useRef } from "react";

function DetailsLink({ id, children }) {
  const detailsRef = useRef(null);

  useEffect(() => {
    const decodedHash = decodeURIComponent(window.location.hash.slice(1));
    const matchingDetails = document.getElementById(decodedHash);
    console.log(matchingDetails)
    if (matchingDetails) {
      matchingDetails.setAttribute("style", "background-color: #70a7a8")
    }
  }, []);

  return (
    <div ref={detailsRef}>
      <a href={`#${encodeURIComponent(id)}`} style={{ textDecoration: "none", color: "inherit" }}>
        {children}
      </a>
    </div>
  );
}

export default DetailsLink;
