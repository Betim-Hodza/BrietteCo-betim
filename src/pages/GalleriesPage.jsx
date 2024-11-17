//src/pages/GalleriesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GalleriesPage.css';
import GraduationCarousel from '../components/GraduationCarousel';
import SoloPortraitCarousel from '../components/SoloPortraitCarousel';
import FamilyCarousel from '../components/FamilyCarousel';

function GalleriesPage() {
    const galleryData = [
        {
            title: 'Graduation',
            description: 'Celebrate your academic achievements with a memorable graduation photoshoot.',
            link: '/graduation',
            carousel: <GraduationCarousel />,
        },
        {
            title: 'Solo Portraits',
            description: 'Capture your individuality and style with personalized solo portrait sessions.',
            link: '/solo-portraits',
            carousel: <SoloPortraitCarousel />,
        },
        {
            title: 'Family & Couples',
            description: 'Cherish your special moments with family and couple photography.',
            link: '/family',
            carousel: <FamilyCarousel />,
        },
    ];

    return (
        <div className="galleries-page">
            <h1>Our Galleries</h1>
            <p>Explore different types of photoshoots and select the one that suits you best!</p>
            <div className="gallery-cards">
                {galleryData.map((gallery, index) => (
                    <div key={index} className="gallery-card">
                        <div className="gallery-carousel">{gallery.carousel}</div>
                        <div className="gallery-details">
                            <h2>{gallery.title}</h2>
                            <p>{gallery.description}</p>
                            <Link to={gallery.link} className="gallery-link">
                                View {gallery.title} Gallery
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleriesPage;