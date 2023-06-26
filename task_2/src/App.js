import "./App.css";
import Content from "./components/Content";
import FooterOptions from "./components/FooterOptions";
import Header from "./components/Header";
import OverlayMenu from "./components/OverlayMenu";

function App() {
    return (
        <div className='w-screen h-screen app'>
            <Header />
            <OverlayMenu />
            <Content />
            <FooterOptions />
        </div>
    );
}

export default App;
