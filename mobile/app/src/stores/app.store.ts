import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  loadToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  loading: true,

  login: async (token) => {
    await SecureStore.setItemAsync("token", token);
    set({ token, isAuthenticated: true });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null, isAuthenticated: false });
  },

  loadToken: async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      set({ token, isAuthenticated: true, loading: false });
    } else {
      set({ token: null, isAuthenticated: false, loading: false });
    }
  },
}));
