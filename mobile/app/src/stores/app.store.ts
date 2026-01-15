import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,

  login: async (token) => {
    await SecureStore.setItemAsync("token", token);
    set({ token, isAuthenticated: true });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null, isAuthenticated: false });
  },
}));
