import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            
            <div className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
                <h3 className="text-xl font-medium">Cyber Crime Helpline</h3>
                <p>📞 Helpline: 1930</p>
                <p>🌐 <Link href="https://cybercrime.gov.in" className="text-blue-500 hover:underline">Cyber Crime Portal</Link></p>
            </div>
            
            <div className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
                <h3 className="text-xl font-medium">Ragging (Anti-Ragging Helpline)</h3>
                <p>📞 Helpline: 1800-180-5522 (Toll-Free)</p>
                <p>📩 Email: <a href="mailto:helpline@antiragging.in" className="text-blue-500 hover:underline">helpline@antiragging.in</a></p>
                <p>🌐 <Link href="http://www.antiragging.in" className="text-blue-500 hover:underline">www.antiragging.in</Link></p>
            </div>
            
            <div className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
                <h3 className="text-xl font-medium">Domestic Violence (Women’s Helpline & NALSA)</h3>
                <p>📞 National Women’s Helpline: 181</p>
                <p>📞 National Legal Services Authority (NALSA): 15100</p>
                <p>📞 Police Helpline: 112</p>
                <p>🌐 <Link href="https://ncwapps.nic.in" className="text-blue-500 hover:underline">NCW (National Commission for Women)</Link></p>
            </div>
            
            <div className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
                <h3 className="text-xl font-medium">Bullying (Child Helpline & Cyberbullying)</h3>
                <p>📞 Child Helpline (for school bullying & abuse): 1098</p>
                <p>📞 Cyber Crime Helpline (for online bullying): 1930</p>
                <p>🌐 <Link href="https://cybercrime.gov.in" className="text-blue-500 hover:underline">Cyber Crime Portal</Link></p>
            </div>
        </div>
    );
}
