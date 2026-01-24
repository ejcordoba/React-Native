import { create } from "zustand";


interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    };
    // Define actions
    // Methods in Zustand are asyncronous
    login: (email: string, password: string) => void;
    logout: () => void;
}
// Memory space to save the state, like a custom hook which saves the state
// (set) defines new state
// This sets up a global state, with Zustand we don't need to provide it at components
export const useAuthStore = create<AuthState>()( (set)=> ({
    status: 'checking',
    token: undefined,
    user: undefined,
    // Define methods
    login: (email: string, password: string) => {
        set ({
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'John Doe',
                email: email,
            }
        });
    },
    logout: () => {
        set ({
            status: 'unauthenticated',
            token: undefined,
            user: undefined
        });
    },
})
);