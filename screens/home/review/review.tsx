"use client";

import { Heading } from '@/components/typography'
import React from 'react'
import cn from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
    {
        id: 1,
        name: "Kurt W.",
        date: "12 months ago",
        text: "Herr Mammadov hat unseren Laminat im Wohnzimmer nach einem kleinen Wasserschaden sehr fachmännisch erneuert...",
        initial: "K",
        color: "#E67E22",
        avatar: null
    },
    {
        id: 2,
        name: "Sheng Xing",
        date: "1 year ago",
        text: "Die Arbeit ist exzellent. Nur zu empfehlen.",
        initial: "S",
        color: "#9B59B6",
        avatar: null
    },
    {
        id: 3,
        name: "Jochen G.",
        date: "1 year ago",
        text: "Herr Mammadov war sehr gewissenhaft und zuverlässig. Er liefert sehr gute Qualität zu einem fairen Preis...",
        initial: "J",
        color: "#27AE60",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWOjRngX5H2iNnQQK4y2qE8D1IeDk8gJ3-jZ8A0-21hNw=s40-c-c0x00000000-cc-rp-mo-br100"
    },
    {
        id: 4,
        name: "Müller T.",
        date: "2 years ago",
        text: "Sehr professionelles Team, schnelle und saubere Arbeit. Wir sind mit dem Ergebnis rundum zufrieden.",
        initial: "M",
        color: "#3498DB",
        avatar: null
    },
    {
        id: 5,
        name: "Anna S.",
        date: "6 months ago",
        text: "Tolle Beratung und perfekte Ausführung. Preis-Leistungs-Verhältnis stimmt absolut. Gerne wieder!",
        initial: "A",
        color: "#E74C3C",
        avatar: null
    },
    {
        id: 6,
        name: "Frank L.",
        date: "5 months ago",
        text: "Pünktlich, freundlich und arbeiten sehr präzise. Kann die Firma MR uneingeschränkt empfehlen.",
        initial: "F",
        color: "#1ABC9C",
        avatar: null
    }
];

const ReviewSection = () => {
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
                        <h3 className={cn("subheading-x-large")}>EXCELLENT</h3>
                        <div style={{ color: "#F1C40F", fontSize: "35px", margin: "0px 0" }}>★★★★★</div>
                        <p className={cn("subheading-small")}>Based on <b className='font-extrabold'>7 reviews</b></p>
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
                        position: "relative" // For positioning navigation arrows
                    }}>

                        {/* Custom Navigation Attributes - Swiper will attach to these */}
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
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
                            style={{ paddingBottom: "20px", padding: "0 5px" }} // Added horizontal padding to prevent shadow clipping on cards
                        >
                            {reviews.map((rev) => (
                                <SwiperSlide key={rev.id} style={{ display: 'flex', height: 'auto', padding: "10px 0" }}>
                                    <div style={{
                                        background: "#fff",
                                        padding: "25px",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        border: "1px solid #eee"
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                                {rev.avatar ? (
                                                    <img src={rev.avatar} alt={rev.name} style={{
                                                        width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0
                                                    }} />
                                                ) : (
                                                    <div style={{
                                                        width: "40px", height: "40px", borderRadius: "50%",
                                                        backgroundColor: rev.color, color: "#fff",
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
                                        <div style={{ color: "#F1C40F", fontSize: "20px", marginBottom: "10px", marginTop: "12px" }}>★★★★★</div>
                                        <p className={cn("paragraph-small")} style={{ flexGrow: 1 }}>
                                            {rev.text}
                                        </p>
                                        <div className={cn("paragraph-small")} style={{ marginTop: "15px", color: "#888", cursor: "pointer", textDecoration: "underline" }}>
                                            Read more
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* CSS override to hide default Swiper arrows since we use our custom content */}
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

export default ReviewSection;