import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PacienteForm from './Form';

export default function Edit({ auth, paciente, tiposDocumento, generos, departamentos, municipios }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Paciente</h2>}
        >
            <Head title="Editar Paciente" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <PacienteForm
                                paciente={paciente}
                                tiposDocumento={tiposDocumento}
                                generos={generos}
                                departamentos={departamentos}
                                municipios={municipios}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
