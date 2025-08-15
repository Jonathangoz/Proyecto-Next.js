import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main>
            <FaceFrownIcon className='w-10 text-gray400' />
            <h2 className='text-xl font-semibold'>404 Not Found</h2>
            <p>Factura No Encontrada</p>
            <Link 
                href="/dashboard/invoices"
                className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'>
                Regresar
            </Link>
        </main>
    )
}