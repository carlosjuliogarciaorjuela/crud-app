import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';

export default function Register() {
  const {data, setData, post, processing, errors, reset} = useForm({
    name: '',
    document_number: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register"/>

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Nombre completo"/>

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2"/>
        </div>
        <div>
          <InputLabel htmlFor="document_number" value="Numero de documento"/>

          <TextInput
            id="document_number"
            name="document_number"
            type="number"
            value={data.document_number}
            className="mt-1 block w-full"
            autoComplete="document_number"
            isFocused={true}
            onChange={(e) => setData('document_number', e.target.value)}
            required
          />

          <InputError message={errors.document_number} className="mt-2"/>
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Contraseña"/>

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password', e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2"/>
        </div>

        <div className="mt-4">
          <InputLabel
            htmlFor="password_confirmation"
            value="Contraseña"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) =>
              setData('password_confirmation', e.target.value)
            }
            required
          />

          <InputError
            message={errors.password_confirmation}
            className="mt-2"
          />
        </div>

        <div className="mt-4 flex items-center justify-end">
          <Link
            href={route('login')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Ya resgistrado?
          </Link>

          <PrimaryButton className="ms-4" disabled={processing}>
            Registrarse
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
