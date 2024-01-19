import React from 'react';
import { addUser } from '@/lib/actions/userActions';

const AddUser: React.FC = () => {
  return (
    <div className='max-w-sm mx-auto '>
      <form action={addUser} className='mb-5'>
        <div className='mb-5'>
          <label
            htmlFor='fullname'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='fullname'
            name='fullname'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='username'
            name='username'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='email'
            name='email'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Password
          </label>
          <input
            type='password'
            placeholder='password'
            name='password'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='role'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Role
          </label>
          <select
            name='role'
            id='role'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={'false'}>role?</option>
            <option value={'Teacher'}>Teacher</option>
            <option value={'Student'}>Student</option>
          </select>
        </div>
        {/*  <div className='mb-5'>
          <label
            htmlFor='isActive'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Is Active?
          </label>
          <select
            name='isActive'
            id='isActive'
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value={'true'}>Is Active?</option>
            <option value={'Yes'}>Yes</option>
            <option value={'No'}>No</option>
          </select>
        </div> */}
        <div className='mb-5'>
          <label
            htmlFor='desc'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Desc
          </label>
          <textarea
            rows={5}
            placeholder='desc'
            name='desc'
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

export default AddUser;
