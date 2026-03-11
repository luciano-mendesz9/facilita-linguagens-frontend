'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import UserType from '@my-types/user.type';
import { DataGenreType, DataTextType } from '../types/datas.types';
import { getCollaborators, getGenres, getTexts } from '../functions';
import toast from 'react-hot-toast';

type DatabaseContextData = {
  genres: DataGenreType[],
  fetchGenres: () => void;
  fetchTexts: () => void;
  fetchCollaborators: () => void;
  texts: DataTextType[];
  collaborators: UserType[];
  isLoading: boolean;
}

const DatabaseContext = createContext<DatabaseContextData | undefined>(undefined);

export function DatabaseProvider({ children }: { children: ReactNode }) {

  const [genres, setGenres] = useState<DataGenreType[]>([]);
  const [texts, setTexts] = useState<DataTextType[]>([]);
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

  async function fetchTexts() {
    const toastId = toast.loading('Sincronizando Textos...');
    const data = await getTexts({});

    if (!data) {
      setIsLoading(false)
      toast.dismiss(toastId);
      return setTexts(texts);
    }

    setTexts(data);
    toast.dismiss(toastId);
  }

  useEffect(() => {
    fetchGenres();
    fetchCollaborators();
    fetchTexts();
  }, []);


  return (
    <DatabaseContext.Provider value={{ genres, fetchGenres, texts, fetchTexts, fetchCollaborators, collaborators, isLoading }}>
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
