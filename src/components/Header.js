import React from "react";
import { auth } from "../utils/firebase"; 
import { useNavigate } from "react-router-dom"; 
import {signOut, onAuthStateChanged, getAuth} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; 
import { useEffect } from "react"; 
import data from "../utils/constants"; 
const PROFILE = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browse")

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // unsubscribe when the component unmounts
    return () => unsubscribe();
  },[]) 

  return (
    <div className="flex justify-between absolute z-10 px-8 py-2 bg-gradient-to-b  from-black w-screen">
      <img
      className="w-44 "
        alt="logo"
        src={LOGO}
      />
      <div className="flex p-2 ">
        <img alt="usericon"className="w-12 h-12" src={PROFILE}/>
      <button onClick={handleSignOut} className="font-bold text-white">
        Sign Out
      </button>
      </div>
    </div>
  );
};

export default Header;
