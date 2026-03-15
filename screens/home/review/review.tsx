"use client";

import { Heading } from '@/components/typography'
import React from 'react'
import cn from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Rəng paleti - avatar olmayan rəylər üçün
const colors = ["#E67E22", "#9B59B6", "#27AE60", "#3498DB", "#E74C3C", "#1ABC9C", "#2980B9", "#8E44AD"];

// Fallback data — API çalışmasa bunlar göstərilir
const fallbackReviews = [
    {
        id: 1,
        name: "Kurt W.",
        date: "12 months ago",
        text: "Herr Mammadov hat unseren Laminat im Wohnzimmer nach einem kleinen Wasserschaden sehr fachmännisch erneuert...",
        initial: "K",
        rating: 5,
        avatar: null
    },
    {
        id: 2,
        name: "Sheng Xing",
        date: "1 year ago",
        text: "Die Arbeit ist exzellent. Nur zu empfehlen.",
        initial: "S",
        rating: 5,
        avatar: null
    },
    {
        id: 3,
        name: "Jochen G.",
        date: "1 year ago",
        text: "Herr Mammadov war sehr gewissenhaft und zuverlässig. Er liefert sehr gute Qualität zu einem fairen Preis...",
        initial: "J",
        rating: 5,
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWOjRngX5H2iNnQQK4y2qE8D1IeDk8gJ3-jZ8A0-21hNw=s40-c-c0x00000000-cc-rp-mo-br100"
    },
];

interface Review {
    id: number;
    name: string;
    date: string;
    text: string;
    rating: number;
    avatar: string | null;
    initial: string;
}

interface ReviewData {
    reviews: Review[];
    rating: number;
    totalReviews: number;
    businessName: string;
}

interface ReviewSectionProps {
    data: ReviewData | null;
}

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <span>
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: i < rating ? "#F1C40F" : "#ddd" }}>★</span>
            ))}
        </span>
    );
};

const ReviewSection = ({ data }: ReviewSectionProps) => {
    const reviews = data?.reviews?.length ? data.reviews : fallbackReviews;
    const overallRating = data?.rating ?? 5;
    const totalReviews = data?.totalReviews ?? reviews.length;
    const [expandedId, setExpandedId] = React.useState<number | null>(null);

    const handleToggle = (id: number) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    // Reytinq mətni
    const getRatingText = (rating: number) => {
        if (rating >= 4.5) return "EXCELLENT";
        if (rating >= 4.0) return "GREAT";
        if (rating >= 3.5) return "GOOD";
        return "GOOD";
    };

    return (
        <section className={cn("section")} style={{ backgroundColor: "#F9F9F9", padding: "80px 0" }}>
            <div className={cn("container")}>
                {/* Başlıq Hissəsi */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Heading type="heading-6">
                        Was sagen unsere Kunden?
                    </Heading>
                    <div style={{ marginTop: "10px" }}>
                        <Heading type="heading-3">
                            Die Menschen wählen uns, weil wir bewiesen haben, die Besten zu sein!
                        </Heading>
                    </div>
                </div>

                {/* Google Alt Struktur */}
                <div style={{
                    display: "flex",
                    gap: "40px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>

                    {/* Sol: Google Ümumi Reytinq */}
                    <div style={{ textAlign: "center", minWidth: "180px", paddingTop: "20px", alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <h3 className={cn("subheading-x-large")}>{getRatingText(overallRating)}</h3>
                        <div style={{ color: "#F1C40F", fontSize: "35px", margin: "0px 0" }}>
                            <StarRating rating={Math.round(overallRating)} />
                        </div>
                        <p className={cn("subheading-small")}>Based on <b className='font-extrabold'>{totalReviews} reviews</b></p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            style={{ width: "120px", marginTop: "15px" }}
                        />
                    </div>

                    {/* Sağ: Rəy Kartları Container */}
                    <div style={{
                        flex: 1,
                        minWidth: "300px",
                        maxWidth: "100%",
                        position: "relative"
                    }}>

                        {/* Custom Navigation */}
                        <div className="swiper-button-prev review-nav-prev" style={{
                            position: "absolute",
                            left: "-20px",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            zIndex: 10,
                            color: "#666",
                            border: "1px solid #eaeaea"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </div>

                        <div className="swiper-button-next review-nav-next" style={{
                            position: "absolute",
                            right: "-20px",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            zIndex: 10,
                            color: "#666",
                            border: "1px solid #eaeaea"
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </div>

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.review-nav-prev',
                                nextEl: '.review-nav-next',
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                }
                            }}
                            style={{ paddingBottom: "20px", padding: "0 5px" }}
                        >
                            {reviews.map((rev, index) => (
                                <SwiperSlide key={rev.id} style={{ display: 'flex', alignItems: 'flex-start', padding: "10px 0" }}>
                                    <ReviewCard rev={rev} index={index} expanded={expandedId === rev.id} onToggle={() => handleToggle(rev.id)} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* CSS override to hide default Swiper arrows */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .review-nav-prev::after, .review-nav-next::after {
                        display: none;
                    }
                `}} />
            </div>
        </section>
    )
}

const TEXT_LIMIT = 120;

const ReviewCard = ({ rev, index, expanded, onToggle }: { rev: Review; index: number; expanded: boolean; onToggle: () => void }) => {
    const isLong = rev.text.length > TEXT_LIMIT;
    const displayText = expanded || !isLong ? rev.text : rev.text.slice(0, TEXT_LIMIT) + "...";

    return (
        <div style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #eee",
            height: expanded ? "auto" : "220px",
            overflow: "hidden",
            transition: "height 0.3s ease",
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    {rev.avatar ? (
                        <img src={rev.avatar} alt={rev.name} referrerPolicy="no-referrer" style={{
                            width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0
                        }} />
                    ) : (
                        <div style={{
                            width: "40px", height: "40px", borderRadius: "50%",
                            backgroundColor: colors[index % colors.length], color: "#fff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontWeight: "bold", fontSize: "16px",
                            flexShrink: 0
                        }}>{rev.initial}</div>
                    )}
                    <div>
                        <div className={cn("subheading-medium")}>{rev.name}</div>
                        <div className={cn("paragraph-small")} style={{ color: "#8a8a8a" }}>{rev.date}</div>
                    </div>
                </div>
                <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="G" style={{ width: "24px" }} />
            </div>
            <div style={{ fontSize: "20px", marginBottom: "10px", marginTop: "12px" }}>
                <StarRating rating={rev.rating} />
            </div>
            <p className={cn("paragraph-small")} style={{ flexGrow: 1 }}>
                {displayText}
            </p>
            {isLong && (
                <button
                    onClick={onToggle}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        marginTop: "10px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        color: "#555",
                        fontSize: "13px",
                        fontWeight: 500,
                    }}
                >
                    {expanded ? "Weniger" : "Mehr lesen"}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transition: "transform 0.3s ease",
                            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ReviewSection;