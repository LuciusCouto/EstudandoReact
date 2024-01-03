import Head from 'next/head'

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        },{
            params: {
                id: '3'
            }
        },{
            params: {
                id: '4'
            }
        },
        {
            params: {
                id: '5'
            }
        }],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}


export default function CursosId(props) {
    const id = String(props.id);

    return (
        <div>
            <Head>
                <title>Cursos/{id} | Next.js</title>
            </Head>
            <h1>Cursos | {id}</h1>
        </div>
    )
}