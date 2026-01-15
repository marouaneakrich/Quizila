import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { loginApi, registerApi } from "../api/auth.api";

const secureStorage = {
  getItem: (name: string) =>
    SecureStore.getItemAsync(name),
  setItem: (name: string, value: string) =>
    SecureStore.setItemAsync(name, value),
  removeItem: (name: string) =>
    SecureStore.deleteItemAsync(name),
};

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
export const hydrateAuth = async (set: any) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    set({ token, isAuthenticated: true });
  }
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      loading: false,

      login: async (email, password) => {
        set({ loading: true });
        const res = await loginApi(email, password);
        set({
          token: res.data.token,
          isAuthenticated: true,
          loading: false,
        });
      },

      register: async (email, password) => {
        set({ loading: true });
        await registerApi(email, password);
        set({ loading: false });
      },

      logout: async () => {
        set({ token: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      storage: secureStorage as any,
    }
  )
);
