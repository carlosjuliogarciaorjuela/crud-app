<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        // Eliminar tablas existentes en orden inverso
        Schema::dropIfExists('paciente');
        Schema::dropIfExists('municipio');
        Schema::dropIfExists('departamento');
        Schema::dropIfExists('genero');
        Schema::dropIfExists('tipo_documento');

        // 1. Crear tabla tipo_documento
        Schema::create('tipo_documento', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });

        // Insertar tipos de documento básicos
        DB::table('tipo_documento')->insert([
            ['nombre' => 'Cédula de Ciudadanía'],
            ['nombre' => 'Tarjeta de Identidad'],
            ['nombre' => 'Cédula de Extranjería'],
            ['nombre' => 'Pasaporte'],
        ]);

        // 2. Crear tabla genero
        Schema::create('genero', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });

        // Insertar géneros básicos
        DB::table('genero')->insert([
            ['nombre' => 'Masculino'],
            ['nombre' => 'Femenino'],
            ['nombre' => 'Otro'],
        ]);

        // 3. Crear tabla departamento
        Schema::create('departamento', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });

        // Insertar departamentos
        DB::table('departamento')->insert([
            ['nombre' => 'Cundinamarca'],
            ['nombre' => 'Antioquia'],
            ['nombre' => 'Valle del Cauca'],
            ['nombre' => 'Atlántico'],
        ]);

        // 4. Crear tabla municipio
        Schema::create('municipio', function (Blueprint $table) {
            $table->id();
            $table->foreignId('departamento_id')->constrained('departamento');
            $table->string('nombre');
            $table->timestamps();
        });

        // Insertar municipios
        DB::table('municipio')->insert([
            ['departamento_id' => 1, 'nombre' => 'Bogotá'],
            ['departamento_id' => 1, 'nombre' => 'Soacha'],
            ['departamento_id' => 2, 'nombre' => 'Medellín'],
            ['departamento_id' => 2, 'nombre' => 'Envigado'],
            ['departamento_id' => 3, 'nombre' => 'Cali'],
            ['departamento_id' => 3, 'nombre' => 'Palmira'],
            ['departamento_id' => 4, 'nombre' => 'Barranquilla'],
            ['departamento_id' => 4, 'nombre' => 'Soledad'],
        ]);

        // 5. Crear tabla paciente
        Schema::create('paciente', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tipo_documento_id')->constrained('tipo_documento');
            $table->string('numero_documento')->unique();
            $table->string('nombre1');
            $table->string('nombre2')->nullable();
            $table->string('apellido1');
            $table->string('apellido2')->nullable();
            $table->foreignId('genero_id')->constrained('genero');
            $table->foreignId('departamento_id')->constrained('departamento');
            $table->foreignId('municipio_id')->constrained('municipio');
            $table->timestamps();
        });
    }

    public function down()
    {
        // Eliminar en orden inverso para respetar las claves foráneas
        Schema::dropIfExists('paciente');
        Schema::dropIfExists('municipio');
        Schema::dropIfExists('departamento');
        Schema::dropIfExists('genero');
        Schema::dropIfExists('tipo_documento');
    }
};
