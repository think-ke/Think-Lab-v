import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import VerificationCard from "./VerificationCard";
import { useState } from "react";
import { verificationTools } from "../../constants/VerificationTools";
const VerificationHub = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section
            id="hub"
            className="bg-[#fafafa] py-28"
        >
            <Container>
                <SectionHeading
                    badge="Hub"
                    title="Intelligent Verification Hub"
                    subtitle="Equip your organization with intelligent AI tools for verification, governance, and compliance."
                />

                {/* Tabs */}

                <div className="mx-auto mt-10 flex w-fit rounded-full bg-gray-100 p-1 shadow-md">
                    {verificationTools.map((tool, index) => (
                        <button
                            key={tool.title}
                            onClick={() => setActiveTab(index)}
                            className={`
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        ease-in-out

        ${activeTab === index
                                    ? "bg-white text-violet-700 shadow-lg"
                                    : "text-gray-500 hover:bg-white/70 hover:text-violet-600"
                                }
      `}
                        >
                            {tool.title}
                        </button>
                    ))}
                </div>

                <div className="mt-20">
                    <VerificationCard
                        tool={verificationTools[activeTab]}
                    />
                </div>
            </Container>
        </section>
    );
};

export default VerificationHub;