<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Municipio extends Model
{
  use HasFactory;

  protected $table = 'municipio';
  protected $fillable = ['nombre', 'departamento_id'];

  public function departamento()
  {
    return $this->belongsTo(Departamento::class);
  }

}
