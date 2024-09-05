import React from 'react';

function ClienteAcademias() {
  const academias = [
    { id: 1, nome: 'Academia 1', endereco: 'Rua A, 123' },
    { id: 2, nome: 'Academia 2', endereco: 'Avenida B, 456' },
  ];

  return (
    <div className="container">
      <header>
        <h1>Academias Disponíveis</h1>
      </header>
      <ul className="academia-list">
        {academias.map((academia) => (
          <li key={academia.id}>
            <h2>{academia.nome}</h2>
            <p>{academia.endereco}</p>
          </li>
        ))}
      </ul>
      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default ClienteAcademias;
