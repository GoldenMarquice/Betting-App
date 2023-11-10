import React, { useState, Component } from "react";
import "./forum.css";
import data from '../services/contestService'

function Forum({loadData}) {
  const initialFormData={
    title: '',
    content: ''
  }
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  } 
  const clearForm = ()=>{
    setFormData(initialFormData)
  }

  const handleSubmit =  async (e) => {
    e.preventDefault()
    try {
      const response = await data.saveBlogPost(formData);
      console.log(response)
      loadData()
      clearForm()
    }catch (error) {
      console.error(error)
    }
    //make a clearForm() function
    
  }
  return (
    <div className="forum page">
      <div className="panel panel-default post-editor">
        <form onSubmit={handleSubmit} className="panel-body border p-2 rounded shadow">
          <input
          type='text'
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="form-control"
          />
          <input 
          placeholder="Content"
          name="content"
          type="text"
          value={formData.content}
          onChange={handleInputChange}
          className="form-control"
          />
          <div className="w-75 d-flex justify-content-end">
          <button type="submit" className="btn btn-success">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forum;
