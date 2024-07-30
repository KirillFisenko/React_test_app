import { useEffect, useState } from 'react'
import axios from 'axios'
import ContentItem from "./Components/ContentItem";
import FooterItem from "./Components/FooterItem";
import HeaderItem from "./Components/HeaderItem";

const baseeUrl = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
  const headerValue = "Текст header"
  const footerValue = "Текст footer"
  const [labels, setLabels] = useState([]);   

  useEffect(() => {
    axios.get(baseeUrl)
      .then(res => { 
        setLabels(res.data.slice(0, 5));
      });
  });  

  return (
    <div className="container col-10">
      <HeaderItem headerText={headerValue} />
      <ContentItem setOfLabels={labels} />
      <FooterItem footerText={footerValue} />      
    </div>
  );
}

export default HomePage;