import { createContext, useContext, useState, ReactNode } from 'react';

interface MangaContextType {
  mangaId: string | null;
  chapterId: string | null;
  setIds: (mangaId: any, chapterId: string) => void;
}

const MangaContext = createContext<MangaContextType | undefined>(undefined);

interface MangaProviderProps {
  children: ReactNode;
}

export const MangaProvider = ({ children }: MangaProviderProps) => {
  const [mangaId, setMangaId] = useState<string | null>(null);
  const [chapterId, setChapterId] = useState<string | null>(null);

  const setIds = (mId: string, cId: string) => {
    setMangaId(mId);
    setChapterId(cId);
    localStorage.setItem('mangaId', mId);
    localStorage.setItem('chapterId', cId);
  };

  return (
    <MangaContext.Provider value={{ mangaId, chapterId, setIds }}>
      {children}
    </MangaContext.Provider>
  );
};

export const useManga = () => {
  const context = useContext(MangaContext);
  if (!context) {
    throw new Error('useManga must be used within a MangaProvider');
  }
  return context;
};
