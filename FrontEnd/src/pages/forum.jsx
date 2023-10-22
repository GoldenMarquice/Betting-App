import React, { Component } from "react";
import "./forum.css";

function Forum() {
  return (
    <div className="forum page">
      <div className="panel panel-default post-editor">
        <div className="panel-body">
          <textarea />
          <button className="btn btn-success">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Forum;
