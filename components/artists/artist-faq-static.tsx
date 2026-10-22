"use client";

import { useState } from "react";
import { useLang } from "@/components/i18n/LanguageProvider";

const FAQ_ITEMS_EN = [
  {
    q: "What are your normal set lengths?",
    a: "Our standard set lengths are typically 60-90 minutes, but we can customize the duration based on your event needs. We're flexible and can accommodate shorter or longer sets as required.",
  },
  {
    q: "Do you have different line-up options?",
    a: "Yes, we offer various line-up configurations. You can choose from solo performances, duos, or full band setups. We'll work with you to create the perfect musical arrangement for your event.",
  },
  {
    q: "Do you provide your own sound & lighting equipment? What is it or what's included in the price?",
    a: "We bring professional-grade sound equipment including speakers, microphones, mixers, and amplifiers. Basic lighting is included in our standard package. Premium lighting options are available for an additional fee. All equipment is fully insured and maintained to the highest standards.",
  },
  {
    q: "Do you provide a laptop playlist / DJ service in between and after your live sets?",
    a: "Absolutely! We provide continuous music coverage throughout your event. Between live sets, we offer DJ services with curated playlists that match your event's atmosphere. This ensures there's never a moment of silence.",
  },
  {
    q: "What time do you normally arrive at the venue to set up?",
    a: "We typically arrive 2-3 hours before the event start time. This allows us ample time to set up equipment, perform sound checks, and ensure everything is perfect before your guests arrive.",
  },
  {
    q: "How long does it take for you to set up, sound check etc?",
    a: "Setup and sound check usually takes approximately 60-90 minutes. This includes equipment installation, cable management, sound balancing, and a brief performance test to ensure optimal audio quality.",
  },
  {
    q: "Can you learn song requests (e.g. a first dance)?",
    a: "Yes, we're happy to learn specific songs for special moments like first dances, ceremony music, or other significant parts of your event. Please provide song requests at least 2 weeks in advance to ensure we can prepare them properly.",
  },
  {
    q: "How much space do you need for your performance area?",
    a: "We typically need a minimum of 3x3 meters (10x10 feet) for our performance area. However, we can adapt to smaller spaces if needed. For larger setups with full bands, we'll discuss space requirements during the planning phase.",
  },
  {
    q: "Are you comfortable performing outdoors or in unusual settings (e.g. barns, beaches)?",
    a: "Yes, we're experienced in performing in various settings including outdoor venues, barns, beaches, and other unique locations. We have weather-resistant equipment and can adapt our setup to accommodate different environments. Additional considerations may apply for outdoor events.",
  },
];

const FAQ_ITEMS_HR = [
  {
    q: "Koliko obično traju vaši setovi?",
    a: "Standardni set obično traje 60 do 90 minuta, ali trajanje prilagođavamo prema potrebama vašeg događaja. Fleksibilni smo i možemo izvesti kraće ili duže setove prema dogovoru.",
  },
  {
    q: "Imate li različite opcije postava?",
    a: "Da, nudimo različite postave. Možete birati između solo nastupa, duo postave ili punog benda. Zajedno biramo idealnu glazbenu kombinaciju za vaš događaj.",
  },
  {
    q: "Donosite li vlastiti razglas i rasvjetu? Što je uključeno u cijenu?",
    a: "Donosimo profesionalni razglas: zvučnike, mikrofone, miksete i pojačala. Osnovna rasvjeta je uključena u standardni paket. Premium rasvjeta dolazi uz doplatu. Sva oprema je osigurana i redovito održavana po najvišim standardima.",
  },
  {
    q: "Pružate li DJ uslugu i između i nakon live setova?",
    a: "Naravno. Pokrivamo cijeli događaj kontinuiranom glazbom. Između live setova nastavljamo s DJ servisom i prilagođenim playlistama koje prate atmosferu večeri. Bez trenutaka tišine.",
  },
  {
    q: "U koje vrijeme obično dolazite na lokaciju za postavljanje?",
    a: "Obično dolazimo 2 do 3 sata prije početka događaja. To nam daje dovoljno vremena za postavljanje opreme, sound check i pripremu prije dolaska gostiju.",
  },
  {
    q: "Koliko traje postavljanje i sound check?",
    a: "Postavljanje i sound check obično traju 60 do 90 minuta. Uključuje instalaciju opreme, raspored kabela, balansiranje zvuka i kratki test izvedbe za optimalnu kvalitetu.",
  },
  {
    q: "Možete li naučiti pjesmu po želji (npr. prvi ples)?",
    a: "Da, rado učimo specifične pjesme za posebne trenutke poput prvog plesa, glazbe za ceremoniju ili druge važne dijelove događaja. Molimo da nam zahtjev za pjesmu pošaljete barem 2 tjedna unaprijed da je dobro pripremimo.",
  },
  {
    q: "Koliko prostora treba za vaš nastup?",
    a: "Najčešće trebamo minimalno 3x3 metra prostora za nastup. Ako je prostor manji, prilagodimo se. Za veće postave s punim bendom dogovaramo prostor tijekom planiranja.",
  },
  {
    q: "Nastupate li i na otvorenom ili u neuobičajenim prostorima (štale, plaže)?",
    a: "Da, imamo iskustvo s nastupima na otvorenom, u štalama, na plažama i drugim specifičnim lokacijama. Imamo opremu otpornu na vremenske uvjete i prilagođavamo postavu okruženju. Za vanjske događaje vrijede dodatni uvjeti.",
  },
];

export function ArtistFaqStatic() {
  const { lang } = useLang();
  const isHr = lang === "hr";
  const items = isHr ? FAQ_ITEMS_HR : FAQ_ITEMS_EN;
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  return (
    <div className="artist-faq-section">
      <h2 className="faq-title">{isHr ? "Česta pitanja" : "FAQs"}</h2>
      <div className="faq-list">
        {items.map((item, idx) => {
          const open = activeIdx === idx;
          return (
            <button
              key={item.q}
              type="button"
              className={open ? "faq-item active" : "faq-item"}
              onClick={() => setActiveIdx(open ? null : idx)}
              aria-expanded={open}
            >
              <p className="faq-question">{item.q}</p>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
