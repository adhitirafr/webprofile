import Link from 'next/link'

const NotFound = () => {

    return ( 
        <div className="w-full text-center  mt-3">
            <div className="text-6xl mb-10">Oopss.. </div>
            <div className="mb-5">It seems that page cannot be found</div>
            <p className="text-blue-400"> <Link href="/">Go back to homepage</Link> </p>
        </div>
    );
}
 
export default NotFound;