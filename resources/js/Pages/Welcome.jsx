import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const buttonBaseClasses = "w-full rounded-md px-6 py-3 text-center ring-1 ring-transparent transition-all duration-300 focus:outline-none focus-visible:ring-2";
  const primaryButtonClasses = `${buttonBaseClasses} bg-[#FF2D20] text-white hover:bg-[#FF3D30] dark:bg-white dark:text-black dark:hover:bg-gray-200`;
  const secondaryButtonClasses = `${buttonBaseClasses} border-2 border-[#FF2D20] text-[#FF2D20] hover:bg-[#FF2D20]/10 dark:border-white dark:text-white dark:hover:bg-white/10`;

  return (
    <>
      <Head title="Welcome" />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-zinc-900 min-h-screen flex items-center justify-center p-4">
        <div className="container mx-auto max-w-md">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl shadow-black/10 dark:shadow-white/5 ring-1 ring-white/10 dark:ring-zinc-800 p-8 transition-all duration-300 hover:shadow-3xl hover:shadow-black/20 dark:hover:shadow-white/10">
            <main className="space-y-4 mb-8">
              <div className="flex flex-col space-y-3">
                <Link href={route('login')} className={primaryButtonClasses}>
                  Iniciar Sesión
                </Link>
                <Link href={route('register')} className={secondaryButtonClasses}>
                  Registrarse como Usuario
                </Link>
              </div>
            </main>
              <div className="text-center text-sm text-gray-400 mb-4">
                ¿Acceso administrativo?{' '}
                <Link
                  href={route('admin.login')}
                  className="text-purple-500 hover:underline"
                  preserveState
                >
                  Click aquí
                </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
