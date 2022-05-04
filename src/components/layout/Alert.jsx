import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div
        className={`w-72 h-14 flex justify-start items-center pl-3 animate-bounce fixed top-5 right-5 bg-purple-800 text-white`}
      >
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
