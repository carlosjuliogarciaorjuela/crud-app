<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departamento extends Model
{
  use HasFactory;

  protected $table = 'departamento';
  protected $fillable = ['nombre'];

  public function municipios()
  {
    return $this->hasMany(Municipio::class);
  }
}
