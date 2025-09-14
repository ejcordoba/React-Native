import { create } from "zustand";


interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }
}
// Memory space to save the state, like a custom hook which saves the state
// (set) defines new state
export const useAuthStore = create<AuthState>()( (set)=> ({
    status: 'checking',
    token: undefined,
    user: undefined,
})
);