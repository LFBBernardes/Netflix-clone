import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  background-color: #141414;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333;
  color: white;

  &::placeholder {
    color: #bbb;
  }
`;

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/home')}>Netflix</Logo>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </NavbarContainer>
  );
};

export default Navbar;
