import { Mail, MapPin, Phone } from "lucide-react";
import FooterBackground from "../../assets/images/footer-bg.png";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGlobe,
} from "react-icons/fa6";

import Container from "../common/Container";

const Footer = () => {
    return (
        <footer
            className="relative overflow-hidden py-20 text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${FooterBackground})`,
            }}
        >

            <Container>
                <div className="grid gap-20 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-black">
                            LAB.
                        </h2>

                        <p className="mt-8 max-w-lg text-gray-300 leading-8">
                            THiNK Lab is the testing and quality assurance arm of THiNK, ensuring AI systems are safe, trustworthy, and deployment-ready. We provide independent testing, validation, and continuous monitoring of AI solutions against internationally recognised standards, including ISO/IEC 42001, ISO/IEC 23894, KS 3007 (Kenyan Code of Practice for AI), and applicable Data Protection Act (DPA) requirements, enabling organisations to build and deploy responsible AI with confidence.
                        </p>

                        <p className="mt-6 text-sm text-gray-400">
                            © THINK LAB. All Rights Reserved.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">
                            Get In Touch
                        </h3>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} />

                                Mirage Towers, Nairobi, Kenya
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} />

                                +254 759 759311
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} />

                                lab@think.ke
                            </div>
                        </div>

                        <div className="mt-10 flex gap-5">
                            <a
                                href="https://www.facebook.com/TechInnovatorsNetwork/"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://think.ke"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
                            >
                                <FaGlobe />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/think-ke/posts/?feedView=all"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;