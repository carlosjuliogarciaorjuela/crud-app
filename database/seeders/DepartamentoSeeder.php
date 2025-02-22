<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Departamento;

class DepartamentoSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $departamentos = [
      ['nombre' => 'Cundinamarca'],
      ['nombre' => 'Antioquia'],
      ['nombre' => 'Valle del Cauca'],
      ['nombre' => 'Atlántico'],
    ];

    foreach ($departamentos as $departamento) {
      Departamento::create($departamento);
    }
  }
}
