import React from "react";

export default function Alert({ alert }) {
  if (alert === null) {
    return <div></div>;
  } else {
    return (
      <div className={`alert alert-${alert.clas}`}>
        <i class="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    );
  }
}
