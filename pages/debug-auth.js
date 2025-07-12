import { useAuth } from '../context/AuthContext';

export default function DebugAuth() {
  const { user, role, loading } = useAuth();
  return (
    <div style={{ padding: 20, fontFamily: 'monospace' }}>
      <h1>🔍 Debug AuthContext</h1>
      <pre>{JSON.stringify({
        loading,
        user: user ? { uid: user.uid, email: user.email } : null,
        role
      }, null, 2)}</pre>
    </div>
  );
}
