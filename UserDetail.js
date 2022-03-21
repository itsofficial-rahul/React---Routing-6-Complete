import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function UserDetail() {
  const { UserId } = useParams(); // param matlb waha se jo id aayegi {} distraching karke catch kar li usi naam se

  return <div> UserDetail {UserId} </div>;
}
