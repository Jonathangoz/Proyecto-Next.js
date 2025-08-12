import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/Fonts';

export default function Page() {
    return (
        <>
            <h1 className={`${lusitana.className} text-3xl font-bold tracking-tight text-gray-900 mb-2`}>Customers</h1>
            <CustomersTable customers={[]} />
        </>
    )
}