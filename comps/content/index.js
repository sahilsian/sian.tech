import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 50px;
`

const Content = ({children }) => {
    
    


    return (
        
        <Container>
                {children}
        </Container>
        
    )
}

// export async function getStaticProps() {

//     const res = await fetch('https://api.dismegle.com/user?id=555221466522714113', {
//         method: 'GET',
//         headers: { 
//             'Authorization': 'MjAyMEBDaGF0QW5kU2hhcmU=', 
//             'Content-Type': 'application/json', 
//             'Access-Control-Allow-Origin':'*' 
//         }
//     });
//     const user = await res.json();

//     return { //  done 
//       props: {
//         user,
//       },
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every second
//       revalidate: 10, // In seconds
//     } // can u see what posts is defined as
// }


export default Content;