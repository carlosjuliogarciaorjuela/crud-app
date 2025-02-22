<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Paciente;
use App\Models\TipoDocumento;
use App\Models\Genero;
use App\Models\Departamento;
use App\Models\Municipio;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    /**
     * Show the dashboard with patients list.
     */
    public function index()
    {
        if (!Auth::user()->is_admin) {
            return redirect('/')->with('error', 'Acceso no autorizado.');
        }

        $pacientes = Paciente::with(['tipo_documento', 'genero', 'departamento', 'municipio'])->get();
        $tiposDocumento = TipoDocumento::all();
        $generos = Genero::all();
        $departamentos = Departamento::all();
        $municipios = Municipio::all();
        
        return Inertia::render('Dashboard', [
            'pacientes' => $pacientes,
            'tiposDocumento' => $tiposDocumento,
            'generos' => $generos,
            'departamentos' => $departamentos,
            'municipios' => $municipios
        ]);
    }
}
