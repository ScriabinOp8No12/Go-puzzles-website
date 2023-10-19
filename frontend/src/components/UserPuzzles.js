import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { openModal } from "../store/modal";
import { fetchAllUserPuzzlesThunk } from "../store/userPuzzles";
import "./styles/UserPuzzles.css";

const UserPuzzles = () => {
  const dispatch = useDispatch()
  // state.slicename.property (state.reducer.publicPuzzles array)
  const userPuzzles = useSelector((state) => state.userPuzzles.userPuzzles);

  useEffect(() => {
    dispatch(fetchAllUserPuzzlesThunk())
  }, [dispatch])

  return (
    <>
    <h1>test</h1>
    </>

  )
}

export default UserPuzzles;
