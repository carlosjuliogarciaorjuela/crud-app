import { Link } from '@inertiajs/react';

export default function UserLayout({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Header */}
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-gray-800 dark:text-white">
                                Bienvenido, {user.name}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Cerrar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        © 2025 Tu Aplicación. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
