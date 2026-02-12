'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import UserType from '@my-types/user.type';
import { DataGenreType } from '../types/datas.types';
import { getCollaborators } from '../functions';

type DatabaseContextData = {
  genres: DataGenreType[],
  fetchGenres: () => void;
  fetchCollaborators: () => void;
  collaborators: UserType[];
  isLoading: boolean;
}

const DatabaseContext = createContext<DatabaseContextData | undefined>(undefined);

export function DatabaseProvider({ children }: { children: ReactNode }) {

  const [genres, setGenres] = useState<DataGenreType[]>([]);
  const [collaborators, setCollaborators] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCollaborators() {
    setIsLoading(true)
    const data = await getCollaborators({});

    if (!data) {
      setIsLoading(false)
      return setCollaborators(collaborators);
    }

    setCollaborators(data);
    setIsLoading(false)
  }

  async function fetchGenres() {

  }

  useEffect(() => {
    fetchGenres();
    fetchCollaborators();
  }, []);


  return (
    <DatabaseContext.Provider value={{ genres, fetchGenres, fetchCollaborators, collaborators, isLoading }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export function useDatabase() {
  const context = useContext(DatabaseContext)

  if (!context) {
    throw new Error('useDatabase deve ser usado dentro de DatabaseProvider')
  }

  return context
}
