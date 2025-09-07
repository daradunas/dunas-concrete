"use client"

import Script from "next/script"

export default function GTranslateWidget() {
    return (
        <>
            <div className="gtranslate_wrapper flex gap-2"></div>
            <Script id="gtranslate-config">
                {`
                    window.gtranslateSettings = {
                        default_language: "en",
                        native_language_names: true,
                        languages: ["en","es"],
                        wrapper_selector: ".gtranslate_wrapper",
                        "alt_flags":{"en":"usa"}
                    };
                `}
            </Script>
            <Script
                src="https://cdn.gtranslate.net/widgets/latest/flags.js"
                strategy="afterInteractive"
                defer
            />
        </>
    )
}
