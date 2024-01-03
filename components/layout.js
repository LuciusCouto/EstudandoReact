import Header from './Header'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>  
            <Head>
                <link rel='icon' href='/images/logo-couto-brasao.ico'/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}