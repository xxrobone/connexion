import React from 'react';

const inputStyles = 'p-8 bg-white shadow-md border-[1px] rounded-sm mb-8';

const AddUserPage: React.FC = () => {
  const addUser = ''; // Replace with your actual URL for form action

  return (
    <div className='p-20 rounded-xl'>
      <form action={addUser} className='flex flex-wrap justify-between'>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="tel" placeholder="phone" name="phone" className={inputStyles} />
        <select name="isAdmin" id="isAdmin">
          <option value={'false'}>
            role?
          </option>
          <option value={'Teacher'}>Teacher</option>
          <option value={'Student'}>Student</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={'true'}>
            Is Active?
          </option>
          <option value={'Yes'}>Yes</option>
          <option value={'No'}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
