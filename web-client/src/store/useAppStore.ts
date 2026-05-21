import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  isAuth: boolean;
  token: string | null;
  setAuth: (token: string | null) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isAuth: false,
      token: null,
      setAuth: (token) => set({ isAuth: !!token, token }),
      logout: () => set({ isAuth: false, token: null }),
    }),
    {
      name: 'chevera-v2-storage',
    }
  )
);
