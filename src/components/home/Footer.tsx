import { Mail, MapPin, Phone } from "lucide-react";
import FooterBackground from "../../assets/images/footer-bg.png";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
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
                            Our AI forum offers networking opportunities, knowledge sharing, professional
                            development, collaboration prospects, access to resources, contributions to the
                            advancement of AI in Africa, and a supportive community.
                            The AI CoP is convened by the Tech Innovators Network Think Tank, a not-for-profit
                            organisation limited by guarantee.
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

                                cop@think.ke
                            </div>
                        </div>

                        <div className="mt-10 flex gap-5">
                            <a
                                href="#"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
                            >
                                <FaXTwitter />
                            </a>

                            <a
                                href="#"
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