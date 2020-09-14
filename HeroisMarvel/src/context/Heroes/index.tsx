import React, { createContext, useCallback, useState, useEffect } from 'react';

interface HeroesCardsInterface {
  avatar: string;
  defesa: number;
  fraqueza: number;
  id: number;
  poder: number;
  recuperacao: number;
  title: string;
}

interface ContextParametersInterface {
  heroisFavoritos: HeroesCardsInterface[];
  setHeroisFavoritos(data: HeroesCardsInterface): void;
  deleteHeroisFavoritos(id: number): void;
}

export const HeroesContext = createContext<ContextParametersInterface>(
  {} as ContextParametersInterface,
);

export const HeroesProvides: React.FC = ({ children }) => {
  const [favoritos, setFavoritos] = useState([] as HeroesCardsInterface[]);
  const setHeroisFavoritos = useCallback(
    data => {
      setFavoritos([...favoritos, data]);
    },
    [favoritos],
  );
  const deleteHeroisFavoritos = useCallback(
    id => {
      const filterHeroes = favoritos.filter(h => h.id != id);
      setFavoritos([]);
      console.log('Herois filtrados Delete', filterHeroes);

      filterHeroes.map(h => setHeroisFavoritos(h));
    },
    [favoritos, setHeroisFavoritos, setFavoritos],
  );
  return (
    <HeroesContext.Provider
      value={{
        heroisFavoritos: favoritos,
        setHeroisFavoritos,
        deleteHeroisFavoritos,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
