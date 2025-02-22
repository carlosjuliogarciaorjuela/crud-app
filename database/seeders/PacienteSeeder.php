<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Paciente;

class PacienteSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $paciente = [
      ['tipo_documento_id' => 1, 'numero_documento' => '1000001', 'nombre1' => 'Carlos', 'nombre2' => 'Andrés', 'apellido1' => 'Gómez', 'apellido2' => 'Pérez', 'genero_id' => 1, 'departamento_id' => 1, 'municipio_id' => 1],
      ['tipo_documento_id' => 2, 'numero_documento' => '1000002', 'nombre1' => 'María', 'nombre2' => 'Fernanda', 'apellido1' => 'López', 'apellido2' => 'Rodríguez', 'genero_id' => 2, 'departamento_id' => 2, 'municipio_id' => 3],
      ['tipo_documento_id' => 1, 'numero_documento' => '1000003', 'nombre1' => 'Juan', 'nombre2' => 'David', 'apellido1' => 'Martínez', 'apellido2' => 'Torres', 'genero_id' => 1, 'departamento_id' => 3, 'municipio_id' => 5],
      ['tipo_documento_id' => 2, 'numero_documento' => '1000004', 'nombre1' => 'Ana', 'nombre2' => 'Isabel', 'apellido1' => 'Ramírez', 'apellido2' => 'García', 'genero_id' => 2, 'departamento_id' => 4, 'municipio_id' => 7],
      ['tipo_documento_id' => 1, 'numero_documento' => '1000005', 'nombre1' => 'José', 'nombre2' => 'Luis', 'apellido1' => 'Hernández', 'apellido2' => 'Díaz', 'genero_id' => 1, 'departamento_id' => 1, 'municipio_id' => 2],
    ];

    foreach ($paciente as $data) {
      Paciente::create($data);
    }
  }
}
