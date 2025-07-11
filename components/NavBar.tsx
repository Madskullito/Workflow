import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function NavBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Workflow</div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <a className={`hover:text-primary ${
              router.pathname === '/dashboard' ? 'border-b-2 border-primary' : ''
            }`}>Inicio</a>
          </Link>
          {user && (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-2 focus:outline-none">
                {/* Avatar: si no tienes fotoURL, muestra inicial */}
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden sm:inline text-gray-700">Mi Perfil</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/profile">
                        <a
                          className={`block px-4 py-2 ${
                            active ? 'bg-gray-100' : ''
                          }`}
                        >
                          Perfil
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`w-full text-left px-4 py-2 ${
                          active ? 'bg-gray-100 text-red-600' : 'text-red-500'
                        }`}
                      >
                        Cerrar Sesión
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
    </nav>
  );
}
