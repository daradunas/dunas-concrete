"use client"

export default function GoogleMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.2874248392916!2d-118.38032180741389!3d34.23387249881171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29550b419aad1%3A0x954b8c528674cd00!2sLas%20dunas%20concrete%20transport%20inc.!5e0!3m2!1ses-419!2spe!4v1755959564220!5m2!1ses-419!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
        title="Las Dunas Concrete location on Google Maps"
      />
    </div>
  )
}