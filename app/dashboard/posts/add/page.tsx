import React from 'react';
import { addPost } from '@/lib/actions/postActions';

const AddPost: React.FC = () => {
  return (
    <div className='max-w-sm mx-auto '>
      <form action={addPost} className='mb-5'>
        <div className='mb-5'>
          <label
            htmlFor='title'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            title
          </label>
          <input
            type='text'
            placeholder='title'
            name='title'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='link'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            link
          </label>
          <input
            type='text'
            placeholder='username'
            name='link'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        
        <div className='mb-5'>
          <label
            htmlFor='body'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            What are we sharing today?
          </label>
          <textarea
            rows={5}
            placeholder='body'
            name='body'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;