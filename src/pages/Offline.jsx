// src/components/OfflinePage.jsx
import Navbar from "../component/Navbar";

const OfflinePage = () => {
  return (
    <>
      <Navbar />
      <div className="text-center p-8">
        <h1 className="text-2xl font-semibold">😕 You're Offline</h1>
        <p>Please check your internet connection.</p>
      </div>
    </>
  );
};

export default OfflinePage;
