import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between mt-8">
      <div className="text-left md:text-center md:mr-8">
        <h1 className="text-3xl md:text-4xl font-bold">Página não encontrada :(</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
