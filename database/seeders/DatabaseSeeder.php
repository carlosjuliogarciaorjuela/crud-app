<?php

namespace Database\Seeders;

use App\Models\User;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            DepartamentoSeeder::class,
            MunicipioSeeder::class,
            TipoDocumentoSeeder::class,
            GeneroSeeder::class,
            PacienteSeeder::class,
        ]);

        // Crear usuario administrador
        User::factory()->create([
            'name' => 'Admin',
            'document_number' => '123456789',
            'password' => bcrypt('1234567890'),
            'is_admin' => true
        ]);
    }
}
