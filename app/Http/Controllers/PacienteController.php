<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Models\TipoDocumento;
use App\Models\Genero;
use App\Models\Departamento;
use App\Models\Municipio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PacienteController extends Controller
{
    private function getCommonData()
    {
        return [
            'tiposDocumento' => TipoDocumento::all(),
            'generos' => Genero::all(),
            'departamentos' => Departamento::all(),
            'municipios' => Municipio::all(),
        ];
    }

    /**
     * Mostrar la lista de pacientes.
     */
    public function index()
    {
        $pacientes = Paciente::with(['tipoDocumento', 'genero', 'departamento', 'municipio'])->get();

        return Inertia::render('Dashboard', [
            'pacientes' => $pacientes,
        ]);
    }

    /**
     * Mostrar el formulario para crear un nuevo paciente.
     */
    public function create()
    {
        return Inertia::render('Pacientes/Create', $this->getCommonData());
    }

    /**
     * Guardar un nuevo paciente en la base de datos.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tipo_documento_id' => 'required|exists:tipo_documento,id',
            'numero_documento' => 'required|unique:paciente,numero_documento',
            'nombre1' => 'required|string|max:255',
            'nombre2' => 'nullable|string|max:255',
            'apellido1' => 'required|string|max:255',
            'apellido2' => 'nullable|string|max:255',
            'genero_id' => 'required|exists:genero,id',
            'departamento_id' => 'required|exists:departamento,id',
            'municipio_id' => 'required|exists:municipio,id',
        ]);

        Paciente::create($validated);

        return redirect()->route('dashboard')->with('success', 'Paciente creado exitosamente.');
    }

    /**
     * Mostrar el formulario para editar un paciente.
     */
    public function edit(int $paciente_id)
    {
        return Inertia::render('Auth/Register', array_merge(
            ['paciente' => $paciente_id],
            $this->getCommonData()
        ));
    }

    /**
     * Actualizar un paciente en la base de datos.
     */
    public function update(Request $request, Paciente $paciente)
    {
        $validated = $request->validate([
            'tipo_documento_id' => 'required|exists:tipo_documento,id',
            'numero_documento' => 'required|unique:paciente,numero_documento,'.$paciente->id,
            'nombre1' => 'required|string|max:255',
            'nombre2' => 'nullable|string|max:255',
            'apellido1' => 'required|string|max:255',
            'apellido2' => 'nullable|string|max:255',
            'genero_id' => 'required|exists:genero,id',
            'departamento_id' => 'required|exists:departamento,id',
            'municipio_id' => 'required|exists:municipio,id',
        ]);

        $paciente->update($validated);

        return redirect()->route('dashboard')->with('success', 'Paciente actualizado exitosamente.');
    }

    /**
     * Eliminar un paciente de la base de datos.
     */
    public function destroy(Paciente $paciente)
    {
        $paciente->delete();
        return redirect()->route('dashboard')->with('success', 'Paciente eliminado exitosamente.');
    }
}
