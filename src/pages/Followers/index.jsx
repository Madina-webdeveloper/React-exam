import React  ,{useState,useEffect} from 'react';
import { api } from '../../api';
import "./index.css"
const index = () => {

    const [followers,setFollowers]=useState([]);

    useEffect(() => {
        api.getFollowers().then((followers) => {
          setFollowers(followers);
        }, []);
      });
    return (
        <>
        <div className="followers">
          {followers.length > 0 ? (
            followers.map((el, index) => (
              <div className="followers-c" key={index}>
              <div className="followers-box">
                <img
                  src={el.avatar_url}
                  alt="user"
                  title="user"
                  className="followers-box__img"
                />
                <div className="followers-box-content">
                  <div className="followers-box-titles">
                    <a target="_blank" href={el.html_url} className="followers-container-box__login">
                      {el.login}
                    </a>
                  </div>
                  <a target="_blank" href={el.html_url} className="followers-box__btn">
                Follow
              </a>
                </div>
              
              </div>
            
              <hr className='fLine' />
            </div>
           
            ))
          ) : (
            <h3>You don't have any followers yet</h3>
          )}
        </div>
      </>
    );
};

export default index;