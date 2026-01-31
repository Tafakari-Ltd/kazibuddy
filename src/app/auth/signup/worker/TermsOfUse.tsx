// components/Authentication/TermsOfUseModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { X, Check, AlertCircle, FileText, Shield, Users, Phone, Mail } from "lucide-react";

interface TermsOfUseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    userType?: "worker" | "employer";
}

export const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({
    isOpen,
    onClose,
    onAccept,
    userType = "employer",
}) => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [acceptedCode, setAcceptedCode] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleAccept = () => {
        if (acceptedTerms && acceptedPrivacy && acceptedCode) {
            onAccept();
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const getWelcomeMessage = () => {
        if (userType === "worker") {
            return "Welcome to KaziBuddy - Your Partner in Finding Dignified Work";
        }
        return "Welcome to KaziBuddy - Connecting You with Qualified Workers";
    };

    const getResponsibilities = () => {
        if (userType === "worker") {
            return [
                "Provide accurate information about your skills and experience",
                "Maintain professionalism in all interactions",
                "Deliver services as agreed upon with employers",
                "Respect employers' property and privacy",
                "Report any issues or conflicts through proper channels",
                "Arrive on time for scheduled work",
                "Use appropriate safety equipment when required",
                "Keep your profile and availability updated",
            ];
        }
        return [
            "Provide accurate job descriptions and requirements",
            "Treat all workers with respect and dignity",
            "Pay agreed wages promptly and fairly",
            "Provide safe working conditions",
            "Communicate clearly about job expectations",
            "Respect agreed working hours and conditions",
            "Provide necessary tools and equipment when required",
            "Give clear instructions and feedback",
        ];
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={handleBackdropClick}
            >
                {/* Modal Container */}
                <div className="bg-white rounded-sm shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="p-6 pb-0 pt-4 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <p className="text-lg font-medium text-gray-700 font-bold">
                                    {getWelcomeMessage()}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors rounded-sm"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>

                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="space-y-8">
                            {/* Introduction */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Introduction
                                </h3>
                                <p className="text-gray-700 mb-2">
                                    Welcome to KaziBuddy ("Platform"), operated by Tafakari Ltd.
                                    By registering as a {userType}, you agree to these Terms of Use,
                                    which constitute a legally binding agreement between you and Tafakari Ltd.
                                </p>
                                <p className="text-gray-700">
                                    KaziBuddy is committed to connecting {userType === "worker" ? "skilled workers" : "employers"}
                                    {" "}with {userType === "worker" ? "employment opportunities" : "qualified workers"} in Kenya's informal settlements,
                                    promoting fair labor practices and economic empowerment.
                                </p>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Eligibility */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Eligibility
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>You must be at least 18 years old</li>
                                    <li>You must provide accurate and complete information</li>
                                    <li>You must have legal capacity to enter into contracts</li>
                                    <li>
                                        {userType === "worker"
                                            ? "You must have the necessary skills and authorization to work in Kenya"
                                            : "You must have legitimate employment needs and capacity to hire"}
                                    </li>
                                    {userType === "worker" && (
                                        <li>You must have valid identification documents</li>
                                    )}
                                </ul>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Account Responsibilities */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Your Responsibilities
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {getResponsibilities().map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                    <li>Maintain the confidentiality of your account credentials</li>
                                    <li>Update your profile information as needed</li>
                                    <li>Report any suspicious activity immediately</li>
                                    {userType === "worker" && (
                                        <>
                                            <li>Communicate professionally with employers</li>
                                            <li>Complete assigned tasks to the best of your ability</li>
                                            <li>Give reasonable notice if unable to fulfill commitments</li>
                                        </>
                                    )}
                                </ul>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Platform Rules */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Platform Rules
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-yellow-800 mb-2">
                                            Prohibited Activities
                                        </h4>
                                        <ul className="list-disc pl-5 text-yellow-700 text-sm space-y-1">
                                            <li>Sharing false or misleading information</li>
                                            <li>Discrimination based on gender, ethnicity, religion, or disability</li>
                                            <li>Harassment or abusive behavior</li>
                                            <li>Circumventing the platform's payment system</li>
                                            <li>Sharing contact information before job confirmation</li>
                                            <li>Using the platform for illegal activities</li>
                                            {userType === "worker" && (
                                                <>
                                                    <li>Accepting jobs without intention to complete them</li>
                                                    <li>Damaging employer property</li>
                                                    <li>Disclosing confidential employer information</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <h4 className="font-semibold text-blue-800 mb-2">
                                            Safety Guidelines
                                        </h4>
                                        <ul className="list-disc pl-5 text-blue-700 text-sm space-y-1">
                                            <li>Meet in public places for initial interviews</li>
                                            <li>Verify identities before proceeding with work arrangements</li>
                                            <li>Use the platform's communication tools initially</li>
                                            <li>Report any safety concerns immediately</li>
                                            <li>Trust your instincts - if something feels wrong, disengage</li>
                                            {userType === "worker" && (
                                                <>
                                                    <li>Inform someone about your work location</li>
                                                    <li>Carry identification at all times</li>
                                                    <li>Use safe transportation to and from work</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Payment Terms */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Payment Terms
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {userType === "worker" ? (
                                        <>
                                            <li>
                                                <strong>Fair Payment:</strong> You have the right to receive agreed-upon wages
                                            </li>
                                            <li>
                                                <strong>Timely Payment:</strong> Expect payment upon completion of work
                                            </li>
                                            <li>
                                                <strong>Payment Disputes:</strong> Report any payment issues within 24 hours
                                            </li>
                                            <li>
                                                <strong>Service Fees:</strong> KaziBuddy may deduct a nominal service fee (currently waived)
                                            </li>
                                            <li>
                                                <strong>Receipts:</strong> Always request payment receipts
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <strong>Fair Wages:</strong> Employers must pay at least the agreed-upon rate
                                            </li>
                                            <li>
                                                <strong>Timely Payment:</strong> Payment should be made upon completion of work
                                            </li>
                                            <li>
                                                <strong>Dispute Resolution:</strong> Payment disputes should be reported within 24 hours
                                            </li>
                                            <li>
                                                <strong>Service Fees:</strong> KaziBuddy may charge a nominal service fee (currently waived)
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Privacy Section */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Privacy & Data Protection
                                </h3>
                                <p className="text-gray-700 mb-3">
                                    We are committed to protecting your privacy in accordance with Kenya's Data Protection Act.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>We collect only necessary information for platform functionality</li>
                                    <li>Your data is stored securely and not shared without consent</li>
                                    <li>You have the right to access, correct, or delete your data</li>
                                    <li>We use SMS notifications only for essential communications</li>
                                    <li>Profile information is visible only to relevant parties</li>
                                    <li>Your contact details are protected until job confirmation</li>
                                </ul>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Code of Conduct */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    KaziBuddy Community Code of Conduct
                                </h3>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <p className="text-green-800 mb-3">
                                        We believe in creating a respectful, fair, and supportive community. As a member:
                                    </p>
                                    <ul className="list-disc pl-5 text-green-700 space-y-2">
                                        <li>Treat everyone with dignity and respect</li>
                                        <li>Communicate clearly and honestly</li>
                                        <li>Respect cultural differences and diversity</li>
                                        <li>Help build trust in our community</li>
                                        <li>Support fellow community members</li>
                                        <li>Provide constructive feedback</li>
                                        {userType === "worker" && (
                                            <>
                                                <li>Take pride in your work and skills</li>
                                                <li>Be reliable and punctual</li>
                                                <li>Contribute positively to the community</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </section>

                            <div className="h-px bg-gray-200" />

                            {/* Worker Rights Section (Worker-specific) */}
                            {userType === "worker" && (
                                <>
                                    <section>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            Your Rights as a Worker
                                        </h3>
                                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                            <ul className="list-disc pl-5 text-purple-700 space-y-2">
                                                <li>Right to fair and timely payment</li>
                                                <li>Right to safe working conditions</li>
                                                <li>Right to be treated with respect and dignity</li>
                                                <li>Right to clear job expectations and instructions</li>
                                                <li>Right to report concerns without fear of retaliation</li>
                                                <li>Right to refuse unsafe work</li>
                                                <li>Right to privacy and data protection</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <div className="h-px bg-gray-200" />
                                </>
                            )}

                            {/* Disclaimer */}
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Important Disclaimers
                                </h3>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <p className="text-red-700 text-sm">
                                        <strong>Note:</strong> KaziBuddy is a connecting platform. While we verify users,
                                        we do not guarantee the quality of work or employment. Users should conduct their
                                        own due diligence. KaziBuddy is not liable for disputes between users.
                                        We facilitate connections but users enter into agreements at their own risk.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Footer with Checkboxes */}
                   
                </div>
            </div>
        </>
    );
};