import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutUI from './components/LayoutUI';
import Marquee from './components/Marquee';
import Loading from './components/Loading';
import { pagesNames, getLink } from './components/LayoutUI';
import RouteComponents from './components/RouteComponents';
import { AnimatePresence } from 'framer-motion';
import useNavScroll from './hooks/useNavScroll';

export const routes = pagesNames.map((page) => ( { path: getLink(page), name: page, Component: Marquee} ))

export interface page {
  title: string,
  slug: string,
  blocks: {
    type: string,
    headline: string,
    subhead: string,
    cta: string,
    background: string,
  }[]
}

function App() {
  const [pages, setPages] = useState<{ content: page[] }>({content: []});

  useEffect(() => {
    async function fetchData(){
      const content = await fetch('content.json');
      const pages = ( await content.json() ).pages
      setPages({content: pages})
    }
    
    fetchData();
  }, [])

  const showNav = useNavScroll();

  return (
      <BrowserRouter>
      <LayoutUI showNav={showNav}/>

        {
          pages.content.length > 0
        ? ( 
          <>
            <AnimatePresence exitBeforeEnter>
              <RouteComponents pages={pages.content}/>
            </AnimatePresence>
          </>
        )
        : <Loading/>
        }
      </BrowserRouter>
  );
}

export default App;
