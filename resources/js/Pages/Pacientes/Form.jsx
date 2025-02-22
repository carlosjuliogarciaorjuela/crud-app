import { useForm } from "@inertiajs/react";

export default function PacienteForm({
  paciente = null,
  tiposDocumento = [],
  generos = [],
  departamentos = [],
  municipios = [],
}) {
  const { data, setData, post, put, processing, errors } = useForm({
    tipo_documento_id: paciente?.tipo_documento_id || "",
    numero_documento: paciente?.numero_documento || "",
    nombre1: paciente?.nombre1 || "",
    nombre2: paciente?.nombre2 || "",
    apellido1: paciente?.apellido1 || "",
    apellido2: paciente?.apellido2 || "",
    genero_id: paciente?.genero_id || "",
    departamento_id: paciente?.departamento_id || "",
    municipio_id: paciente?.municipio_id || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paciente) {
      put(route("pacientes.update", paciente.id));
    } else {
      post(route("pacientes.store"));
    }
  };

  const filteredMunicipios = data.departamento_id
    ? municipios.filter(
        (m) => m.departamento_id === Number(data.departamento_id)
      )
    : [];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Tipo de Documento:</label>
          <select
            value={data.tipo_documento_id}
            onChange={(e) => setData("tipo_documento_id", e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Seleccione...</option>
            {tiposDocumento.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
          {errors.tipo_documento_id && (
            <div className="text-red-500">{errors.tipo_documento_id}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Número de Documento:</label>
          <input
            type="text"
            value={data.numero_documento}
            onChange={(e) => setData("numero_documento", e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.numero_documento && (
            <div className="text-red-500">{errors.numero_documento}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Primer Nombre:</label>
          <input
            type="text"
            value={data.nombre1}
            onChange={(e) => setData("nombre1", e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.nombre1 && (
            <div className="text-red-500">{errors.nombre1}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Segundo Nombre:</label>
          <input
            type="text"
            value={data.nombre2}
            onChange={(e) => setData("nombre2", e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.nombre2 && (
            <div className="text-red-500">{errors.nombre2}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Primer Apellido:</label>
          <input
            type="text"
            value={data.apellido1}
            onChange={(e) => setData("apellido1", e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.apellido1 && (
            <div className="text-red-500">{errors.apellido1}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Segundo Apellido:</label>
          <input
            type="text"
            value={data.apellido2}
            onChange={(e) => setData("apellido2", e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.apellido2 && (
            <div className="text-red-500">{errors.apellido2}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Género:</label>
          <select
            value={data.genero_id}
            onChange={(e) => setData("genero_id", e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Seleccione...</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.nombre}
              </option>
            ))}
          </select>
          {errors.genero_id && (
            <div className="text-red-500">{errors.genero_id}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Departamento:</label>
          <select
            value={data.departamento_id}
            onChange={(e) => {
              setData("departamento_id", e.target.value);
              setData("municipio_id", "");
            }}
            className="w-full p-2 border rounded"
          >
            <option value="">Seleccione...</option>
            {departamentos.map((departamento) => (
              <option key={departamento.id} value={departamento.id}>
                {departamento.nombre}
              </option>
            ))}
          </select>
          {errors.departamento_id && (
            <div className="text-red-500">{errors.departamento_id}</div>
          )}
        </div>

        <div>
          <label className="block mb-2">Municipio:</label>
          <select
            value={data.municipio_id}
            onChange={(e) => setData("municipio_id", e.target.value)}
            className="w-full p-2 border rounded"
            disabled={!data.departamento_id}
          >
            <option value="">Seleccione...</option>
            {filteredMunicipios.map((municipio) => (
              <option key={municipio.id} value={municipio.id}>
                {municipio.nombre}
              </option>
            ))}
          </select>
          {errors.municipio_id && (
            <div className="text-red-500">{errors.municipio_id}</div>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="submit"
          disabled={processing}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {paciente ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}
