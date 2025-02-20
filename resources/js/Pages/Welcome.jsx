import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  // Clases reutilizables para los botones
  const buttonBaseClasses = "w-full rounded-md px-6 py-3 text-center ring-1 ring-transparent transition-all duration-300 focus:outline-none focus-visible:ring-2";
  const primaryButtonClasses = `${buttonBaseClasses} bg-[#FF2D20] text-white hover:bg-[#FF3D30] dark:bg-white dark:text-black dark:hover:bg-gray-200`;
  const secondaryButtonClasses = `${buttonBaseClasses} border-2 border-[#FF2D20] text-[#FF2D20] hover:bg-[#FF2D20]/10 dark:border-white dark:text-white dark:hover:bg-white/10`;

  return (
    <>
      <Head title="Welcome" />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-zinc-900 min-h-screen flex items-center justify-center p-4">
        <div className="container mx-auto max-w-md">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl shadow-black/10 dark:shadow-white/5 ring-1 ring-white/10 dark:ring-zinc-800 p-8 transition-all duration-300 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-white/10">


            <header className="flex flex-col items-center space-y-4 mb-8">
              <svg
                className="h-20 w-20 text-[#FF2D20] animate-pulse"
                viewBox="0 0 62 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF2D20] to-[#FF6D63] bg-clip-text text-transparent">
                Bienvenido a Mi CRUD
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Gestiona tus recursos de forma eficiente
              </p>
            </header>

            <main className="space-y-4 mb-8">
              {!auth.user && (
                <div className="flex flex-col space-y-3">
                  <Link href={route('login')} className={primaryButtonClasses}>
                    Iniciar Sesión
                  </Link>
                  <Link href={route('register')} className={secondaryButtonClasses}>
                    Registrarse
                  </Link>
                </div>
              )}

              {auth.user && (
                <Link href={route('dashboard')} className={primaryButtonClasses}>
                  Acceder al Dashboard
                </Link>
              )}
            </main>

            <footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-zinc-700 pt-4">
              <div className="flex justify-center space-x-4">
                <span>Laravel v{laravelVersion}</span>
                <span className="text-[#FF2D20]">•</span>
                <span>PHP v{phpVersion}</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
