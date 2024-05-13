import Footer from "./Footer";
import Header from "./Header";
import { usePDF } from "react-to-pdf";

const App = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <button className="text-white" onClick={() => toPDF()}>
        Download PDF
      </button>
      <div className="a4 bg-white p-8 space-y-6" ref={targetRef}>
        <Header />
        <h1 className="text-center">E-Tickets</h1>
        <Footer />
      </div>
    </div>
  );
};

export default App;
