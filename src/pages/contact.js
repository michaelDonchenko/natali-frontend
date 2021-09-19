import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../css/contact.css"

const contact = () => {
  return (
    <Layout>
      <Seo title="צור קשר" />
      <section className="section main-section">
        <section className="section-center">
          <h2>רוצים להיות בקשר?</h2>

          <ContactForm />
        </section>
      </section>
    </Layout>
  )
}

export default contact
