import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseById, updateCourse } from '../api';
import toast from 'react-hot-toast';

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: '',
    code: '',
    description: '',
    credits: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        if (data) {
          setCourse({
            title: data.title || data.name || '',
            code: data.code || '',
            description: data.description || '',
            credits: data.credits || ''
          });
        }
      } catch (err) {
        toast.error("Failed to fetch course details");
        navigate('/');
      } finally {
        setIsFetching(false);
      }
    };
    fetchCourse();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!course.title || !course.code) {
      toast.error("Title and Code are required.");
      return;
    }

    setIsLoading(true);
    try {
      await updateCourse(id, course);
      toast.success("Course updated successfully!");
      navigate('/');
    } catch (err) {
      toast.error("Failed to update course");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) return <div className="text-center py-10">Loading course...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Course</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Course Title *</label>
          <input 
            type="text" 
            name="title" 
            value={course.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
