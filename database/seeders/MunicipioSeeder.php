<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Municipio;

class MunicipioSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $municipios = [
      ['departamento_id' => 1, 'nombre' => 'Bogotá'],
      ['departamento_id' => 1, 'nombre' => 'Soacha'],
      ['departamento_id' => 2, 'nombre' => 'Medellín'],
      ['departamento_id' => 2, 'nombre' => 'Envigado'],
      ['departamento_id' => 3, 'nombre' => 'Cali'],
      ['departamento_id' => 3, 'nombre' => 'Palmira'],
      ['departamento_id' => 4, 'nombre' => 'Barranquilla'],
      ['departamento_id' => 4, 'nombre' => 'Soledad'],
    ];

    foreach ($municipios as $municipio) {
      Municipio::create($municipio);
    }
  }
}
