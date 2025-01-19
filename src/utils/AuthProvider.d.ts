import { ReactNode } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

declare const AuthProvider: React.FC<AuthProviderProps>;
export default AuthProvider;
