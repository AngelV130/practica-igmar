import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">

            <div className="relative w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md sm:rounded-lg pt-7">
                <div className="absolute -top-16 w-full left-0 flex justify-center">
                    <Link href="/">
                        <div>
                            <ApplicationLogo className="w-24 h-24 fill-current border rounded-full bg-slate-900 bg-opacity-90" />
                        </div>
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
