import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Ardi's blog">
    <h1>Hello, I'm Ardi</h1>
  <p> 
    I write about software development, technology, and other things that interest me. 
  </p>
  <h2>
    My skills
  </h2>
  <ul>
    <li>TypeScript</li>
    <li>React</li>
    <li>Node.js</li>
    <li>Python</li>
    <li>Java</li>
    <li>CSS</li>
    <li>Git</li>
    <li>Linux</li>
    <li>Rust</li>
    <li>Go</li>
    <li>C#</li>
    <li>C</li>
    <li>C++</li>
    <li>Docker</li>
    <li>RabbitMQ</li>
    <li>SQL</li>
    <li>MySql</li>
  </ul>

  <h2>Latest posts</h2>
  <ul>
    <li>
      <Link href="/posts/first-post"/>
      <Link href="/posts/second-post"/>
    </li>
  </ul>
  <h2>Books I've read</h2>
  <ul>
    <li>
      <Link href="/books/first-book"/>
      <Link href="/books/second-book"/>
    </li>
  </ul>
  <h2>Papers I've read</h2>
  <ul>
    <li>
      <Link href="/papers/first-paper"/>
      <Link href="/papers/second-paper"/>
    </li>
  </ul>
  
    

  </Layout>
)

function 

export default IndexPage
