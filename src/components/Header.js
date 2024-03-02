import React from "react";
import { auth } from "../utils/firebase"; 
import { useNavigate } from "react-router-dom"; 
import {signOut, onAuthStateChanged, getAuth} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; 
import { useEffect } from "react"; 
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { LOGO, PROFILE } from "../utils/constants";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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
  },[]);
  
  const handleButtonSearch = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView())
  } 

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="flex justify-between absolute z-10 px-8 py-2 bg-gradient-to-b  from-black w-screen">
      <img
      className="w-44 "
        alt="logo"
        src={LOGO}
      />
      <div className="flex p-2 ">
        {showGptSearch && (<select className="p-2 bg-gray-900 text-white m-2" onChange={handleLangChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
)}
        </select>)}
        <button className="py-2 px-4 m-2 bg-purple-600 text-white rounded-lg mx-4 mb-4" onClick={handleButtonSearch}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img alt="usericon"className="w-12 h-12" src={PROFILE}/>
      <button onClick={handleSignOut} className="font-bold text-white">
        Sign Out
      </button>
      </div>
    </div>
  );
};

export default Header;
