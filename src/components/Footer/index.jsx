import React from "react";
import "./index.css";
const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <hr className="line" />

          <div className="footer">
            <a href="/" className="git footer_g">
              <i className="bi bi-github  footer_git"></i>
            </a>

            <div className="footer_s">
              <p className="copyright">
                <span>&#169;</span>
                {new Date().getFullYear()}
                GitHub , Inc.
              </p>
              <ul className="footer_ul">
                <li className="footer_ul_li">
                  <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" className="footer_ul_li_link">Terms</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="footer_ul_li_link">Privacy</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://github.com/security" className="footer_ul_li_link">Security</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://www.githubstatus.com/" className="footer_ul_li_link">Status</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://docs.github.com/en" className="footer_ul_li_link">Docs</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://support.github.com/" className="footer_ul_li_link">Contact GitHub</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://github.com/pricing" className="footer_ul_li_link">Pricing</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://docs.github.com/en" className="footer_ul_li_link">API</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://github.com/services/" className="footer_ul_li_link">Training</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://github.blog/" className="footer_ul_li_link">Blog</a>
                </li>
                <li className="footer_ul_li">
                  <a href="https://github.com/about" className="footer_ul_li_link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
