import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Error404 = () => {
  return (
    <Layout>
      <Seo title="העמוד לא נמצא" />
      <section className="section section-center">
        <h1>404</h1>
        <h2>העמוד לא קיים</h2>
      </section>
    </Layout>
  )
}

export default Error404
