import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import YoutubeEmbed from "../components/youtubeEmbed"

const Media = () => (
  <Layout>
    <SEO title="Dru Heller Media page" />
    <div>
      <h1>Media</h1>

      <div className="App">
        <YoutubeEmbed embedId="Z2jzvpaYNzI" />
        <YoutubeEmbed embedId="aKyPGGZHwgc" />
        <YoutubeEmbed embedId="6EcqXCND_6w" />
        <YoutubeEmbed embedId="hfmPjpAi0lI" />
        <YoutubeEmbed embedId="6eRG6_C3K-A" />

      </div>
    </div>
  </Layout>
)

export default Media
