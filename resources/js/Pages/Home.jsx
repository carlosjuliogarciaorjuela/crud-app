import UserLayout from "@/Layouts/UserLayout";
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
  return (
    <UserLayout user={auth.user}>
      <Head title="Home" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Panel de Usuario
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Bienvenido a tu panel de usuario
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Acciones Disponibles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Citas
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gestiona tus citas
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Mi Perfil
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gestiona tu información personal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
