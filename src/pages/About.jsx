import coffeeMaking from "../assets/more/coffee-making2.png";
import coffeeMaking2 from "../assets/more/coffee-making.jpg";
const About = () => {
  return (
    <section className="bg-[#F4F3F0] text-[#331A15]">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={coffeeMaking}
          alt="About Espresso Emporium"
          className="w-full h-[250px] sm:h-[350px] md:h-[650px] object-fit brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#e0d2bc] px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-rancho">
            About Espresso Emporium
          </h1>
          <p className="mt-3 text-base sm:text-lg font-light max-w-2xl raleway">
            A perfect cup of coffee is more than a drink — it's an experience.
          </p>
        </div>
      </div>

      {/* About Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={coffeeMaking2}
            alt="Coffee making"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl font-rancho text-[#331A15]">
            Our Story
          </h2>
          <p className="text-[#1B1A1AB3] raleway leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#331A15]">
              Espresso Emporium
            </span>
            , we believe that coffee is not just a beverage — it’s a bond that
            connects people, ideas, and cultures. Since our beginning, our
            passion has been to deliver handcrafted brews made from the finest
            beans sourced globally.
          </p>
          <p className="text-[#1B1A1AB3] leading-relaxed raleway">
            Our baristas bring creativity and precision to every cup, ensuring
            that each sip carries the warmth, aroma, and authenticity that
            define our brand.
          </p>
          <p className="text-[#1B1A1AB3] leading-relaxed raleway">
            Whether you’re here for your morning espresso, an afternoon latte,
            or a peaceful evening brew — we promise an experience worth
            remembering.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#E3D8C1] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-rancho mb-4 text-[#331A15]">
              Our Mission
            </h3>
            <p className="text-[#1B1A1AB3] leading-relaxed raleway">
              To create a space where every coffee lover feels at home — through
              passion, craftsmanship, and a deep appreciation for the art of
              brewing.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-rancho mb-4 text-[#331A15]">
              Our Vision
            </h3>
            <p className="text-[#1B1A1AB3] leading-relaxed raleway">
              To become a globally recognized name in specialty coffee while
              staying rooted in warmth, community, and sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-rancho text-[#331A15] mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Mr. Nibra Sweden",
              role: "Head Barista",
              img: "https://i.ibb.co.com/wx6Nrrv/head-barista.jpg",
            },
            {
              name: "Sophia Latte",
              role: "Coffee Specialist",
              img: "https://i.ibb.co.com/4n1509Bm/coffee-specialist.webp",
            },
            {
              name: "Liam Roast",
              role: "Creative Brewer",
              img: "https://i.ibb.co.com/DH1kCj1v/creative-young-brewer-craft-beer-is-young-urban-fashionable-distinct-beer-culture-hipster-brutal-bea.jpg",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-[#F5EDE0] p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#D2B48C]"
              />
              <h4 className="mt-4 text-xl font-semibold text-[#331A15]">
                {member.name}
              </h4>
              <p className="text-[#1B1A1AB3]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
