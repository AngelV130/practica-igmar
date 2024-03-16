import { useEffect, useRef, useState } from 'react';
import { usePage, Head, Link, useForm } from '@inertiajs/react';

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Captcha from '@/Components/Captcha'
import ErrorPage from '@/Components/Errors'

export default function Register() {
    const [statusErros, setStatusError] = useState('')
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        captchaResponse:''
    });
    const [recaptchaResponse, setRecaptchaResponse] = useState(data.captchaResponse);
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
    useEffect(() => {
        setData('captchaResponse',recaptchaResponse)
    }, [recaptchaResponse]);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'),{
            onError: (err)=>{
                err.status != statusErros ? setStatusError(err.status) : setStatusError('') 
            },
        });
    };
    const captcha = <Captcha error={statusErros} setData={setRecaptchaResponse}></Captcha>

    return (
        <GuestLayout>
            <Head title="Register" />
            {statusErros && <ErrorPage status={statusErros}/>}
            <form onSubmit={submit} captcha='true'>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

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

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

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

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                <div className="mt-4">
                    {captcha}

                    <InputError message={errors.captchaResponse} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrarse
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
