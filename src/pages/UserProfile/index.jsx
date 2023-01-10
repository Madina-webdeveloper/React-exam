import React , {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../../api';
import "./index.css"
const index = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
      api.getUser().then((user) => {
        setUser(user);
      }, []);
    });
    return (
        <>
            <div className="user">
          <img src={user.avatar_url} alt="user" className="user_image" />

          <p className="user_name">{user.login}</p>
          <button>Edit profil</button>

          <div className="user_followers">
            <p className="user_follow">
              <NavLink to="/followers">
                {" "}
                <span>{user.followers} </span> followers
              </NavLink>
            </p>
            <p className="user_follow">
           <NavLink to="/following">   {" "}
              <span>{user.following}</span>following</NavLink>
            </p>
          </div>
        </div>
        </>
    );
};

export default index;