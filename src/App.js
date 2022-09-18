
import {First} from './Components/Element/First'
import {Content} from './Components/Content/Content'
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
    <First/>
    <main className='main' style={{marginTop: '100px'}}>
      <Content/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
