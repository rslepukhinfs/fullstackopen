import React from "react";

const Notification = ({ notification, notificationFlavor }) => {
  if (!notification) return null;

  return (
    <div className={`notification ${notificationFlavor}`}>{notification}</div>
  );
};

export default Notification;
