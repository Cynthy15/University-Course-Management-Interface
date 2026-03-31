import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../api';
import toast from 'react-hot-toast';

const CreateCourse = () => {
  const [course, setCourse] = useState({
    title: '',
    code: '',
    description: '',
    credits: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Manual validation
    if (!course.title || !course.code) {
      toast.error("Title and Code are required.");
      return;
    }

    setIsLoading(true);
    try {
      await createCourse(course);
      toast.success("Course created successfully!");
      navigate('/');
    } catch (err) {
      toast.error("Failed to create course");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Course</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Course Title *</label>
          <input 
            type="text" 
            name="title" 
            value={course.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Introduction to Computer Science"
          />
        </div>
        
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block text-gray-700 mb-2 font-medium">Course Code *</label>
            <input 
              type="text" 
              name="code" 
              value={course.code}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. CS101"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 mb-2 font-medium">Credits</label>
            <input 
              type="number" 
              name="credits" 
              value={course.credits}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="3"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Description</label>
          <textarea 
            name="description" 
            value={course.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Course description..."
          ></textarea>
        </div>
        
        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={() => navigate('/')}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? 'Creating...' : 'Create Course'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
