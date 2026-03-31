import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseById, deleteCourse } from '../api';
import toast from 'react-hot-toast';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        if (data) {
          setCourse(data);
        } else {
          toast.error("Course not found");
          navigate('/');
        }
      } catch (err) {
        toast.error("Failed to fetch course details");
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
        toast.success("Course deleted successfully");
        navigate('/');
      } catch (err) {
        toast.error("Error deleting course");
      }
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading course details...</div>;
  if (!course) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{course.title || course.name}</h2>
          <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
            {course.code}
          </span>
        </div>
        <div className="flex gap-3">
          <Link 
            to={`/edit-course/${course.id}`} 
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Edit
          </Link>
          <button 
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Course Details</h3>
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">
          {course.description || "No description provided."}
        </p>

        <div className="flex items-center text-gray-700 mt-6 bg-gray-50 p-4 rounded border">
          <span className="font-semibold mr-2">Credits:</span> 
          <span>{course.credits || "N/A"}</span>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium pb-1 border-b border-transparent hover:border-blue-600 transition-colors">
          &larr; Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
