<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Paciente;

class Genero extends Model
{
  use HasFactory;

  protected $table = 'genero';

  protected $fillable = ['nombre'];

  public function pacientes()
  {
    return $this->hasMany(Paciente::class);
  }
}
