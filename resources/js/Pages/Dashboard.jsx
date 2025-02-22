import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import { useState } from "react";
import PacienteForm from "@/Pages/Pacientes/Form";

export default function Dashboard({
  auth,
  pacientes,
  tiposDocumento,
  generos,
  departamentos,
  municipios,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(null); // 'create', 'edit', or null
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  const handleDelete = (id) => {
    if (confirm("¿Está seguro de que desea eliminar este paciente?")) {
      router.delete(route("pacientes.destroy", id));
    }
  };

  const openCreateModal = () => {
    setModalMode("create");
    setSelectedPaciente(null);
    setIsModalOpen(true);
  };

  const openEditModal = (paciente) => {
    setModalMode("edit");
    setSelectedPaciente(paciente);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMode(null);
    setSelectedPaciente(null);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Lista de Pacientes</h3>
                <button
                  onClick={openCreateModal}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Crear Paciente
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Nombres</th>
                      <th className="px-4 py-2 border">Apellidos</th>
                      <th className="px-4 py-2 border">Documento</th>
                      <th className="px-4 py-2 border">Tipo Doc.</th>
                      <th className="px-4 py-2 border">Género</th>
                      <th className="px-4 py-2 border">Departamento</th>
                      <th className="px-4 py-2 border">Municipio</th>
                      <th className="px-4 py-2 border">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pacientes.map((paciente) => (
                      <tr key={paciente.id}>
                        <td className="px-4 py-2 border">
                          {paciente.nombre1} {paciente.nombre2}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.apellido1} {paciente.apellido2}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.numero_documento}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.tipo_documento?.nombre}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.genero?.nombre}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.departamento?.nombre}
                        </td>
                        <td className="px-4 py-2 border">
                          {paciente.municipio?.nombre}
                        </td>
                        <td className="px-4 py-2 border">
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() => openEditModal(paciente)}
                              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDelete(paciente.id)}
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={isModalOpen} onClose={closeModal} maxWidth="2xl">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            {modalMode === "create" ? "Crear Paciente" : "Editar Paciente"}
          </h2>
          <div className="mt-4">
            <PacienteForm
              paciente={selectedPaciente}
              tiposDocumento={tiposDocumento}
              generos={generos}
              departamentos={departamentos}
              municipios={municipios}
              onSuccess={closeModal}
            />
          </div>
        </div>
      </Modal>
    </AuthenticatedLayout>
  );
}
