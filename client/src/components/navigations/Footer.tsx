import { Nav } from "@/style/globalStyles";

const Footer = () => {
  return (
    <Nav stickyPosition="bottom">
      <p>&copy; {new Date().getFullYear()} DNASeq-Explorer. Developed by Bryan C. All rights reserved.</p>
    </Nav>
  )
}

export default Footer;