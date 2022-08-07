import React from "react";
import Image from "next/image";
import styled from "styled-components";

// export const Logo: React.FC = () => {
//     return (
//         <Image
//             src="/icons/bvent_logo.png"
//             alt="nextjs"
//             width="200"
//             layout="fill"
//         />
//     );
// };

export const Logo = styled.img`
    background-image: url('/icons/bvent_logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 100px;
`