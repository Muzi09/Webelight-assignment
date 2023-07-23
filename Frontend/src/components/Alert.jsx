import React, { useState, useEffect } from "react";

function Alert({ message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {show && (
        <h3 className="alert alert-success m-auto" role="alert" style={{width: "50%", textAlign: "center"}}>
          {message}
        </h3>
      )}
    </div>
  );
}

export default Alert;


