import React, { useState, useEffect } from "react";
import "./index.css";
import { api } from "../../api";

const index = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        api.getUser().then((user) => {
            setUser(user)
        },[]);
    })


    return (
        <>
            <header>
                <div className="container">
                    <div className="nav">
                        <a href="/" className="git">
                            <i className="bi bi-github"></i>
                        </a>

                        <input
                            type="text"
                            placeholder="Search or jump to ..."
                            className="nav_input"
                        />

                        <ul className="nav_ul">
                            <li className="nav_ul_li">
                                <a href="" className="nav_ul_li_a">
                                    Pull requests
                                </a>
                            </li>
                            <li className="nav_ul_li">
                                <a href="" className="nav_ul_li_a">
                                    Issues
                                </a>
                            </li>
                            <li className="nav_ul_li">
                                <a href="" className="nav_ul_li_a">
                                    Codespaces
                                </a>
                            </li>
                            <li className="nav_ul_li">
                                <a href="" className="nav_ul_li_a">
                                    Marketplace
                                </a>
                            </li>
                            <li className="nav_ul_li">
                                <a href="" className="nav_ul_li_a">
                                    Explore
                                </a>
                            </li>
                        </ul>
                        <div className="nav_social">
                            <a href="/" className="bell">
                                <i className="bi bi-bell"></i>
                            </a>
                            <button className="btn">
                                <i class="bi bi-plus-lg"></i>
                            </button>
                           
                           <div className="avatar">
                            <img src={user.avatar_url} alt="avatar" className="avatar_image" />
                            <sup className="avatar_sup"></sup>
                           </div>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default index;
