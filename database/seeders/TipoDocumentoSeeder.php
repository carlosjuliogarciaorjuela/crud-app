<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TipoDocumento;

class TipoDocumentoSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $tipos = [
      ['nombre' => 'Cédula de Ciudadanía'],
      ['nombre' => 'Tarjeta de Identidad'],
    ];

    TipoDocumento::insert($tipos);
  }
}
