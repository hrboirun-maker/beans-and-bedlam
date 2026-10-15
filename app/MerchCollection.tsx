const merchandise = [
  {
    name: "Haunt Mess Express",
    type: "Halloween Coffee Mug",
    description: "Spooky little sips for dog people, cat people, and their delightful chaos.",
    image: "/images/haunt-mess-express-mug.jpg",
    price: "$18.99",
    imageAlt: "Beans & Bedlam Haunt Mess Express Halloween dog and cat coffee mug",
    url: "https://www.etsy.com/listing/4595630880/halloween-dog-and-cat-coffee-mug-funny",
  },
  {
    name: "Three Cats & Chaos",
    type: "Halloween Cat Hoodie",
    description: "A cozy little tribute to the black cats and tuxedo cats who run the house.",
    image: "/images/three-cats-chaos-hoodie.jpg",
    price: "From $47.99",
    imageAlt: "White Beans & Bedlam Three Cats and Chaos Halloween hoodie",
    url: "https://www.etsy.com/listing/4595646754/halloween-cat-hoodie-black-cat-lover",
  },
];

export default function MerchCollection() {
  return (
    <section id="halloween" style={{ background: "#f1e7db", padding: "84px 24px" }}>
      <div style={{ maxWidth: 1164, margin: "0 auto" }}>
        <div style={{ color: "#b44c44", fontSize: 11, letterSpacing: 2, fontWeight: 900, marginBottom: 14 }}>
          A LITTLE SEASONAL BEDLAM
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", color: "#1c6266", fontSize: "clamp(38px, 4vw, 55px)", fontWeight: 400, lineHeight: 1.12, margin: "0 0 18px" }}>
          Cute stuff. <em style={{ color: "#b84c43" }}>Spooky season.</em>
        </h2>
        <p style={{ color: "#586f69", maxWidth: 640, lineHeight: 1.8, margin: "0 0 36px" }}>
          For the pets who make life delightfully chaotic — and the people who love them.
          Meet our Halloween mugs and comfy pet-inspired apparel, made to order and available on Etsy.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: 24, maxWidth: 810 }}>
          {merchandise.map((item) => (
            <article key={item.name} style={{ background: "#fffdf9", border: "1px solid #e8ded0", boxShadow: "0 8px 24px #574b3d19", minWidth: 0 }}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Shop ${item.name} on Etsy`} style={{ display: "block", aspectRatio: "1 / 1", overflow: "hidden", background: "#f7f2ec" }}>
                <img src={item.image} alt={item.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </a>
              <div style={{ padding: "24px" }}>
                <div style={{ color: "#b44c44", letterSpacing: 1.2, fontWeight: 800, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>{item.type}</div>
                <h3 style={{ fontFamily: "Georgia, serif", color: "#1c686c", fontSize: 26, fontWeight: 400, margin: "0 0 12px" }}>{item.name}</h3>
                <p style={{ color: "#687b73", fontSize: 13, lineHeight: 1.65, minHeight: 44, margin: "0 0 22px" }}>{item.description}</p>
                <div style={{ borderTop: "1px solid #ece4d9", paddingTop: 17, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 21, color: "#253d3a" }}>{item.price}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, fontSize: 12, color: "#b94c43", borderBottom: "1px solid #b94c43", paddingBottom: 5 }}>Shop on Etsy ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p style={{ color: "#817c70", fontSize: 12, marginTop: 25 }}>Made to order · Fulfilled through our production partners · Checkout securely on Etsy</p>
      </div>
    </section>
  );
}
