import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="" srcSet="" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pequisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/6005658?s=460&u=fb81da823b66c87d38d58bbfddebc571f3fc140d&v=4"
            alt="Italo Fernandes"
          />
          <div>
            <strong>Rocketseat / unform</strong>
            <p>Performance-focused API for React forms </p>
          </div>

          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
