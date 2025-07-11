import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, roles }) {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.push('/auth/login');
      else if (roles && !roles.includes(role)) router.push('/dashboard?role=' + role);
    }
  }, [user, role, loading]);

  if (loading || !user || (roles && !roles.includes(role))) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }
  return <>{children}</>;
}
