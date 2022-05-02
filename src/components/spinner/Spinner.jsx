import React from 'react';
import { FiLoader } from 'react-icons/fi';

const Spinner = () => {
  return (
    <div className="flex justify-center items pt-20">
      <FiLoader size={50} className="animate-spin" />
    </div>
  );
};

export default Spinner;
