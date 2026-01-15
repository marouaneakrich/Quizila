import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { loginApi, registerApi } from "../api/auth.api";
import { useEffect } from "react";

export const hydrateAuth = async (set: any) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    set({ token, isAuthenticated: true });
  }
};

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });
    const res = await loginApi(email, password);
    const token = res.data.token;

    await SecureStore.setItemAsync("token", token);
    set({ token, isAuthenticated: true, loading: false });
  },

  register: async (email, password) => {
    set({ loading: true });
    await registerApi(email, password);
    set({ loading: false });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null, isAuthenticated: false });
  },
}));
