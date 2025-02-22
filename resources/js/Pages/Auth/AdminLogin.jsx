import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminLogin({ status, canResetPassword }) {
  const [userType, setUserType] = useState('Admin');
  const { data, setData, post, processing, errors, reset } = useForm({
    user_type: 'Admin',
    document_number: '',
    password: '',
    remember: false,

  });

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.login'), {
      onFinish: () => reset(),
    });
  };

  return (
    <GuestLayout>
      <Head title="Bienvenido, Administrador" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {status}
        </div>
      )}

      <div className="mb-4 text-center text-2xl font-bold">
        Bienvenido, Administrador
      </div>

      <form onSubmit={submit}>
        {/* Tipo de usuario (Texto) */}
        <div className="mt-4">
          <InputLabel htmlFor="user_type" value="Tipo de Usuario" />
          <TextInput
            id="user_type"
            type="text"
            name="user_type"
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value);
              setData('user_type', e.target.value);
            }}
            className="mt-1 block w-full"  // Estilos
            placeholder="Tipo de usuario (admin o user)" // Placeholder más claro
          />
          <InputError message={errors.user_type} className="mt-2" />
        </div>



        {/* Número de documento */}
        <div className="mt-4">
          <InputLabel htmlFor="document_number" value="Numero de documento" />
          <TextInput
            id="document_number"
            type="number"
            name="document_number"
            value={data.document_number}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('document_number', e.target.value)}
            placeholder="Número de documento"
          />
          <InputError message={errors.document_number} className="mt-2" />
        </div>

        {/* Contraseña */}
        <div className="mt-4">
          <InputLabel htmlFor="password" value="Contraseña" />
          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
            placeholder="Contraseña"
          />
          <InputError message={errors.password} className="mt-2" />
        </div>

        {/* Recordar */}
        <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600">
              Recordar
            </span>
          </label>
        </div>

        {/* Botones */}
        <div className="mt-4 flex items-center justify-end">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Olvidaste tu contraseña?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Iniciar
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
