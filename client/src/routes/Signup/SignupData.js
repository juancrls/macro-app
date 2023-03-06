import { useAuth } from '../../contexts/AuthContext';

export default function SignupData() {
  const { signup } = useAuth();

  return { signup }
};
