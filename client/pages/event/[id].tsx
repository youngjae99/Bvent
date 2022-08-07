import React from "react";
import { useRouter } from "next/router";

import { Container, Header, Main, Footer, Cards } from "@components";

const Event: React.FC = () => {
    const router = useRouter();
    const id = router.query.id as string;
    console.log(router.query.id);
    return (
        <Container>
            <Header />
            {id}
        </Container>
    );
};

export default Event;
