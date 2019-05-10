import React from "react"

import Layout from "../components/layout"
import { Link } from 'gatsby';
import Head from '../components/head';

const NotFoundPage = () => (
  <Layout>
  <Head title="Not Found"/>
    <h1> Page not found :( </h1>
    <p><Link to="/"> Head Home </Link></p>
  </Layout>
)

export default NotFoundPage
