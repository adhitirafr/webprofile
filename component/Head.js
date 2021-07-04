import Head from 'next/head'

const HeadMeta= ({
    title, description
}) => {

    return (
        <>
           <Head>
                <title> .NIT | {title} </title>
                <meta name="description" content={description}></meta>
                <meta name="keywords" content="react, laravel, vue, framework7, create"></meta>
                <meta name="author" content="Adhitira F Ramadhan"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head> 
        </>
    );
}
 
export default HeadMeta;