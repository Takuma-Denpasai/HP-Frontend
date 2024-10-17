import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const Loading = () => {
    return (
      <div className="container mx-auto px-3">
          <div className="w-full m-auto px-4 py-4 bg-white rounded-lg inline-block">
            <p className="text-sm my-1.5"><FontAwesomeIcon icon={faSpinner} /> Loading...</p>
          </div>
      </div>
    );
};
