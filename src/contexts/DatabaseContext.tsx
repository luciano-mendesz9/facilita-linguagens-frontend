'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import UserType from '@my-types/user.type';
import { DataGenreType } from '../types/datas.types';
import { getCollaborators, getGenres } from '../functions';
import toast from 'react-hot-toast';

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
    const toastId = toast.loading('Sincronizando Colaboradores...');
    const data = await getCollaborators({});

    if (!data) {
      setIsLoading(false)
      toast.dismiss(toastId);
      return setCollaborators(collaborators);
    }

    setCollaborators(data);
    setIsLoading(false)
    toast.dismiss(toastId);
  }

  async function fetchGenres() {
    const toastId = toast.loading('Sincronizando Gêneros...');
    const data = await getGenres({});

    if (!data) {
      setIsLoading(false)
      toast.dismiss(toastId);
      return setGenres(genres);
    }

    setGenres(data);
    toast.dismiss(toastId);
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
