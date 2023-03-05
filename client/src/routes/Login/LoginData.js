import { useAuth } from '../../contexts/AuthContext';

export default function LoginData() {
  const { login } = useAuth();

  return { login }
};
