import React from 'react';
import Layout from '../components/layout.js';
import SEO from '../components/seo.js';

const Contact = () => (
    <Layout>
        <SEO title='Dru Heller Contact page'/>
        <div>
            <h1>Contact Dru</h1>
            {/* need to create a mail form, but this will work for the moment. */}
            <a href="mailto:druheller@gmail.com">druheller@gmail.com</a>
        </div>
    </Layout>
)

export default Contact;