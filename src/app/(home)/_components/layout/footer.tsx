"use client"

import { products } from "@/data/products-data"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { H4, TypographyMuted } from "@/components/typography"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const socialIcons = [
    {
        id: 1,
        icon: <FaInstagram className="w-5 h-5 text-[var(--text-primary)]" />,
        label: "Instagram",
        link: "",
    },
    {
        id: 2,
        icon: <FaWhatsapp className="w-5 h-5 text-[var(--text-primary)]" />,
        label: "WhatsApp",
        link: `https://wa.me/18184382654?text=${encodeURIComponent(
            "Hello! I'm interested in your concrete services."
        )}`,
    },
]

export function Footer() {
    const telf = process.env.NEXT_PUBLIC_CONTACT_PHONE || ""
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ""
    return (
        <footer className="relative overflow-hidden py-16" style={{ background: "var(--brand-footer-bg)" }}>
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-1">
                            <div className="w-12 h-12 bg-[var(--brand-footer-accent)] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" translate="no">
                                <span className="text-[var(--text-primary)] font-bold text-xl notranslate">DC</span>
                            </div>
                            <span className="text-2xl font-bold" style={{ color: "var(--brand-footer-text-primary)" }}>
                                Las Dunas Concrete
                            </span>
                        </div>
                        <Separator className="my-3 max-w-[400px]" style={{ backgroundColor: "var(--brand-footer-accent)" }} />
                        <p className="leading-relaxed mb-6" style={{ color: "var(--brand-footer-text-secondary)" }}>
                            Family business specializing in high-quality concrete. <br />
                            Committed to excellence and personalized service.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map(({ id, icon, label, link }) => (
                                <a
                                    key={id}
                                    href={link}
                                    target="_blank"
                                    aria-label={label}
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
                                    style={{ backgroundColor: "var(--brand-footer-accent)" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "var(--brand-footer-accent-hover)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "var(--brand-footer-accent)")
                                    }
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <H4 style={{ color: "var(--brand-footer-text-primary)" }}>Products</H4>
                        <Separator className="my-6 max-w-[300px]" style={{ backgroundColor: "var(--brand-footer-accent)" }} />
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product.id}>
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="cursor-pointer transition-all duration-300 hover:translate-x-2 block"
                                        style={{ color: "var(--brand-footer-text-secondary)" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-footer-accent)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-footer-text-secondary)")}
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <H4 style={{ color: "var(--brand-footer-text-primary)" }}>Contact</H4>
                        <Separator className="my-6 max-w-[300px]" style={{ backgroundColor: "var(--brand-footer-accent)" }} />

                        <div className="flex flex-col space-y-4">
                            <a
                                href={`tel:${telf}`}
                                className="transition-all duration-300 hover:translate-x-2"
                                style={{ color: "var(--brand-footer-text-secondary)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-footer-accent)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-footer-text-secondary)")}
                            >
                                {telf}
                            </a>

                            <a
                                href={`mailto:${email}`}
                                className="transition-all duration-300 hover:translate-x-2"
                                style={{ color: "var(--brand-footer-text-secondary)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-footer-accent)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brand-footer-text-secondary)")}
                            >
                                {email}
                            </a>

                            <div className="space-y-1">
                                <p className="transition-all duration-300" style={{ color: "var(--brand-footer-text-secondary)" }}>
                                    9048 Bradley Ave
                                </p>
                                <p style={{ color: "var(--brand-footer-text-muted)" }}>Sun Valley, CA 91352</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <H4 style={{ color: "var(--brand-footer-text-primary)" }}>Our location</H4>
                        <Separator className="my-6 max-w-[300px]" style={{ backgroundColor: "var(--brand-footer-accent)" }} />

                        <div className="flex flex-col space-y-4 h-60">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.2874248392916!2d-118.38032180741389!3d34.23387249881171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29550b419aad1%3A0x954b8c528674cd00!2sLas%20dunas%20concrete%20transport%20inc.!5e0!3m2!1ses-419!2spe!4v1755959564220!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
                <Separator className="my-8" style={{ backgroundColor: "var(--brand-footer-border)" }} />
                <TypographyMuted className="text-center text-base" style={{ color: "var(--brand-footer-text-muted)" }}>
                    &copy; {new Date().getFullYear()} Las Dunas Concrete. All rights reserved.
                </TypographyMuted>
            </div>
        </footer>
    )
}
