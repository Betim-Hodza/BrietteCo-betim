// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ServicesPage from './pages/ServicesPage';
import GalleriesPage from './pages/GalleriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FamilyGallery from './pages/FamilyGallery';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Routes>
                    {/* Home Route */}
                   
                    <Route path="/" element={
                        <>
                        <div className="background-container">
                        </div>
                            <section className="hero-section">
                            </section>

                            <section className="content-section">
                                <div className="gallery">
                                    <ImageGallery />
                                </div>
                            </section>
                        </>
                    } />

                    {/* Page Routes */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/galleries" element={<GalleriesPage />} />
                    <Route path="/aboutme" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/family" element={<FamilyGallery />} />
                </Routes>
            </div>

        </Router>
    );
}

export default App;
