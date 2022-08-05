import Layout from "@theme/Layout";
import * as React from "react";
import HomePage from "../components/HomePage";
import classes from "./index.module.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


// markup
const IndexPage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
      <main>
        <div className={classes.Background} >
            <HomePage />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
