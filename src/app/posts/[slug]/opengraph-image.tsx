// import { ImageResponse } from 'next/og'
// import { getPost } from './page'
 
// export const runtime = 'edge'
 
// export const alt = 'About Acme'
// export const size = {
//   width: 1200,
//   height: 630,
// }
// export const contentType = 'image/png'
 
// export default async function Image({ params }: { params: { slug: string } }) {
//   const postData = await getPost({params});
//   return new ImageResponse(
//     (
//       <div style={{ display: 'flex' }}>
//         <h1>{postData.title}</h1>
//       </div>
//     ),
//     {
//       ...size,
//     },
//   );
// }