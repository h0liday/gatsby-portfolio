import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Bio will be here</p>
            <Link to="/contact"> Want to work with me? </Link>
        </Layout>
    )
}

export default AboutPage