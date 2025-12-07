import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "@/styles/all-courses.css";
import "@/styles/see-courses.css";
import "@/styles/whatch-courses.css";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return(
  <Layout> 
    <Component {...pageProps} />
  </Layout>);
}
