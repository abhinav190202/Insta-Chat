import React, { useContext, useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./button.css"; 

export const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();

  const handleLogin = () => {
    localStorage.setItem("chat-username", username);

    history.push("/chat");
  };

return (
   
    <div
      className=" d-flex align-items-center "
      style={{
        height: "100vh",
        backgroundImage: `url("https://picsum.photos/id/16/1536/735")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className = "container">
      <div className="container mar-b form-group  d-flex align-items-center justify-content-center" >
        <h1>INSTA CHAT</h1>
      </div>
      <div className="container form-group mar-t w-50 d-flex align-items-center justify-content-center gap-2">
        <input
          type="text"
          name=""
          id=""
          className="rounded-3 form-control"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key == "Enter" || e.key == 13) handleLogin();
          }}
        />
        <button type="button" value={"Connect"} onClick={handleLogin}>
          <span>Connect</span>
        </button>
      </div>
      </div>
    </div>
  );
}
