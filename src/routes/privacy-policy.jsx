/**
 * @fileoverview Privacy Policy component with proper policy content
 * @desc Full privacy policy page with comprehensive data collection and usage information
 */

import React from "react";

// SEO metadata
export const meta = () => {
  return [
    { title: "Privacy Policy | Dash Realty" },
    { name: "description", content: "Dash Realty's comprehensive privacy policy detailing how we collect, use, and protect your personal information." },
    { name: "keywords", content: "privacy policy, data protection, personal information, real estate privacy" }
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center bg-base-200 min-h-screen pt-8 px-4 w-full">
      <h1 className="text-center text-5xl font-bold mt-12 mb-4">Privacy Policy</h1>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="dom-wrap f-col bg-base-100 rounded-lg p-8 shadow-lg">
          <div>
            <div className="mb-6 text-center">
              <p className="text-lg font-medium text-primary mb-2">Dash Realty</p>
              <span className="inline-block text-sm font-semibold bg-base-200 text-base-content rounded px-3 py-1">Last Updated: June 12, 2025</span>
            </div>
            
            <h2 className="mt-8 text-2xl font-bold border-b border-base-300 pb-2">Last Updated: June 12, 2025</h2>
            <p className="mb-6">When you use Services (including our website and mobile apps) on this website and any subdomains of this website (collectively, the "Website") to find, buy, rent, or sell real estate or connect with mortgage lenders or other real estate professionals, you are providing us with your data. This policy explains what information we collect, how we use it, and who we share it with, along with the rights and choices you may have with respect to your information. This policy applies to any of our websites or apps that link to this Privacy Policy.</p>
            <p className="mb-6">Read the <a href="#us-regional-privacy-notice" rel="noopener noreferrer" className="link link-primary">United States Regional Privacy Notice</a> for more details about how we handle Personal Information and how to exercise your rights.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Terms of Service</h2>
            <p className="mb-6">This Privacy Policy is governed by the <a href="/terms-of-service" rel="noopener noreferrer" className="link link-primary">Terms of Service</a>, which includes all disclaimers of warranties and limitations of liabilities. All terms not defined separately in this Privacy Policy shall maintain the definition given to them in the Terms of Service.</p>
            <p className="mb-6">To review other applicable terms and conditions that apply to this Privacy Policy, including, without limitation, intellectual property rights, representations and warranties, disclaimer of warranties, limitation of liability and resolving disputes, please review the Terms of Service.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Information Collected</h2>
            <p className="mb-6">When you use our Services, we collect a variety of information from and about you and your device(s). Some of this information identifies you directly (such as your name or email address), while some of it is associated with you through your account, profile, or device (like the homes you choose to save or your location data).</p>
            <p className="mb-6">When you use aspects of our Services (such as creating an account), we may ask you for information about yourself, such as your name, email address, and phone number. If you use any mortgage tools included on our websites or apps, we might ask you for more sensitive information, such as your income and credit score. Additionally, if you voluntarily contribute any information, such as agent reviews or any comments you provide on a "request information" form, we'll store that data as well. The sections below more fully describe what information we collect in connection with your use of our different Services.</p>
            <p className="mb-6">You may also provide information about other people through our Services. For example, if you share a home listing with someone, we may collect that person's email address as part of your account information.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Information You Provide</h2>
            <p className="mb-6">Home Search: We may provide several tools to help you find a home to buy or rent. If you provide any search criteria when using our home search tools, such as the type of home or number of bedrooms, we save that information so that we can tailor your search results to what you're looking for.</p>
            <p className="mb-6">We also help you connect with local real estate agents, property managers, mortgage loan officers, and other real estate professionals. If you choose to contact one of these individuals through our platform, we may ask for your name, email address, and phone number so that we can reach you and connect you with the right person.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Information We Collect Automatically</h2>
            <p className="mb-6">In addition to the information you give us directly, we collect certain information automatically as you use our services.</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Activity Information:</strong> We collect information about how you use our websites and mobile apps, such as your home search history, homes you view, what you've clicked on and other uses of our features, and the amount of time you spend looking at different parts of our websites.</li>
              <li><strong>Device Information:</strong> We collect data about the browsers and devices you use to access our websites and apps. The data we collect includes browser or device model and settings, operating system, unique identifiers (including device ID), and the version of the app you're using.
                <ul className="list-disc pl-6 mt-2">
                  <li>We also collect data about how your browsers and devices interact with our services, including IP address, crash reports, system activity, and the date and time. You can control our collection of certain data, such as your mobile device model or the language your mobile device uses, by adjusting the privacy and security settings on your mobile device.</li>
                </ul>
              </li>
              <li><strong>Location Information:</strong> If you enable location services on your mobile device, we may collect the location of your device. We use your location to provide you with location-based information, like homes and real estate professionals in your area, and to offer location-based services. If you don't want to use these features, you can turn off location services on your device.
                <ul className="list-disc pl-6 mt-2">
                  <li>We also collect location information for similar purposes from your browser. You can disable browser location services through your browser settings.</li>
                </ul>
              </li>
              <li><strong>Cookies and Other Tracking Tech:</strong> We may use various tools (including cookies, pixel tags, web beacons and other similar technologies) to gather information about how you view and use our sites and apps and to enhance your experience with our services. For example, many of our web pages use cookies to help us understand site usage, improve the content and offerings on our websites and apps, or personalize your experience. The use of cookies helps us serve you better by understanding what you're interested in, tracking trends, saving your preferences, and storing information you may want to retrieve on a regular basis, such as your favorite homes. We also allow specific, approved partners to collect data from your browser or device for advertising and measurement purposes using their own cookies or similar tools. For further information about how we use cookies, please access our <a href="/site/privacy-terms#cookie-policy" rel="noopener noreferrer" className="link link-primary">Cookie Policy</a>.</li>
              <li><strong>Ads:</strong> We use the remarketing services to advertise on third party websites (including Google, Facebook, and others) to previous visitors to our website. It could mean that we advertise to previous visitors who haven't completed a task on our website (such as using the contact form to make an inquiry). This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone's past visits to a website. Any data collected will be used in accordance with this privacy policy and the third-party vendor's privacy policy. You can set preferences for how Google, Facebook, and others advertise to you using their corresponding ad preferences settings, and if you want to, you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.</li>
            </ul>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Permitted Use of Personal Information</h2>
            <p className="mb-6">This Website uses your Personal Information to provide you products and services, such as to fulfil your requests for products or to help us personalize our offerings to you. We also use your Personal Information to support our business functions, such as fraud prevention, marketing, and legal functions. To do this, we combine personal and non-Personal Information, collected online and offline, including information from third-party sources. Personal and non-Personal Information will be used to:</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Fulfil Requests:</strong> To fulfil your requests for products and services and communicate with you about those requests.</li>
              <li><strong>Understand Customer Behavior:</strong> To better understand customer behavior so that we may improve our marketing and advertising efforts and to improve the distribution of our products and services.</li>
              <li><strong>Protection:</strong> To protect the security and integrity of our websites, mobile services, and our business.</li>
              <li><strong>Legal:</strong> To comply with legal and/or regulatory requirements.</li>
              <li><strong>Promotional Messaging or Advertising:</strong> With your consent, this Website uses your contact information to recommend products and services that might be of interest to you, to send you marketing and advertising messages such as newsletters, announcements, or special offers or to notify you about our upcoming events. If at any time, you would like to discontinue receiving any such email updates, you may unsubscribe by following the unsubscribe instructions included in each promotional email.</li>
              <li><strong>Providing & Improving Our Services:</strong> We use your information to provide our Services to you, such as returning search results as you browse for homes, and to improve our Services and develop new ones. For example, we track how you use our websites and apps and use that information to troubleshoot issues and adjust things to improve your experience. We use the contact information you provide us, like your phone number and email address, to communicate with you about our services. For example, if you contact us regarding a problem with our site or your account, we may email you to help identify and solve the problem. We may also inform you about our Services, offers, promotions, news, and other updates we think may be of interest to you.</li>
              <li><strong>Connecting You with Real Estate Professionals:</strong> If you ask us to, we also use your information to connect you to real estate professionals, like when you want to contact an agent to discuss a home you find on our platform. We may also contact you before passing your information to the real estate professional, to ensure you are connected with the professional best suited to help you.</li>
              <li><strong>Personalizing Your Experience:</strong> We use the information we collect about you and your activity on our services to personalize the services we offer and show advertising, content, or features that we think you might like. For example, we may use your activity information to provide customized search results that match your preferences and prior search criteria.</li>
              <li><strong>Other Uses:</strong> We also use your data to detect, investigate, and prevent fraudulent transactions and other illegal activities, to enforce our Terms of Service and other agreements with you, and to protect the rights and property of Homes, its customers, and others.</li>
            </ul>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Sharing Your Information</h2>
            <p className="mb-6">Data will not be shared with third-parties for marketing or promotional purposes without your permission. We do not share mobile numbers with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors for support services (such as customer service) is permitted.</p>
            <p className="mb-6"><strong>Information You Ask Us to Share:</strong> We share information when you ask us to share it. For example, if you choose to contact a real estate agent, mortgage lender, property manager, or other real estate professional through our platform, we will send them the information you provide on the "request info" or other inquiry form.</p>
            <p className="mb-6"><strong>Service Providers & Business Partners:</strong> When we hire service providers to help operate our business, we may need to give them access to information to provide their service. We allow them to use the information only to perform the service we have asked them to perform. When we partner with other businesses to offer products and services to you, we may share information with those partners only as needed to provide those products and services.</p>
            <p className="mb-6"><strong>Legal & Compliance Transfers:</strong> When we need to share data to satisfy a legal or regulatory requirement, including responding to a subpoena or other lawful government request for data, we will share information only as necessary to comply with that requirement. We'll endeavor to tell you before sharing your information in these situations, unless we're prohibited from doing so. We may also share information if needed to enforce our legal rights, detect or prevent fraud or security concerns, or protect public safety.</p>
            <p className="mb-6">If this Website is involved in a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of its assets, personal information held by us about our services users may be among the assets transferred. In addition, we may disclose personal information for the purpose of evaluating and/or performing the proposed transaction (including in connection with any bankruptcy, liquidation or similar proceedings).</p>
            <p className="mb-6"><strong>Public and De-Identified Data:</strong> We may disclose or share any publicly available information or aggregated and/or de-identified information without restriction.</p>
            <p className="mb-6"><strong>AI Tools:</strong> We use both internal and externally hosted software, platforms, and applications that utilize data analysis, learning, reasoning, problem solving, perception, prediction, planning or other cognitive functions in an attempt to augment or replicate human intelligence (we refer to these, collectively, as "AI Tools"). Examples of techniques employed by AI Tools include machine learning, deep learning, computer vision, natural language processing, robotics, virtual agents, chatbots, and other emerging technologies that aim to simulate human intelligence. AI Tools with which we share your personal data can be found in the list of sub-processors listed below. We may also share information that does not identify you when we use such AI Tools.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">List of Sub-Processors</h2>
            <p className="mb-6">As of the date of this agreement, we engage the following sub-processors that may process Personal Data:</p>
            <div className="overflow-x-auto mb-6">
              <table className="table table-bordered w-full">
                <thead>
                  <tr className="bg-base-300">
                    <th className="font-bold p-3">Sub-processor (Entity Name)</th>
                    <th className="font-bold p-3">Service Provider's Location</th>
                    <th className="font-bold p-3">Provided Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3">Amazon Web Services (AWS)</td><td className="p-3">USA</td><td className="p-3">Infrastructure as a Service and Platform as a Service</td></tr>
                  <tr><td className="p-3">Google Cloud Platform (GCP)</td><td className="p-3">USA</td><td className="p-3">Natural Language Understanding</td></tr>
                  <tr><td className="p-3">OpenAI</td><td className="p-3">USA</td><td className="p-3">Generative AI</td></tr>
                  <tr><td className="p-3">Vonage</td><td className="p-3">USA</td><td className="p-3">Cloud Communication Service Provider</td></tr>
                  <tr><td className="p-3">Bandwidth</td><td className="p-3">USA</td><td className="p-3">Communication Platform for Messaging Service</td></tr>
                  <tr><td className="p-3">Lob</td><td className="p-3">USA</td><td className="p-3">Automated direct mail and postal service provider</td></tr>
                  <tr><td className="p-3">MailParser</td><td className="p-3">USA</td><td className="p-3">Mail Parsing Service</td></tr>
                  <tr><td className="p-3">Twilio</td><td className="p-3">USA</td><td className="p-3">Cloud Communication Service Provider</td></tr>
                  <tr><td className="p-3">Home Junction / Attom Data</td><td className="p-3">USA</td><td className="p-3">Listing Data Analysis</td></tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Your opt in/opt out choices</h2>
            <p className="mb-6">By providing your phone number, you consent to receive SMS messages from us. Message and data rates may apply. Message frequency may vary depending on your interaction with our services. You may "opt in" and/or "opt out" of certain uses of your Personal Information. For example, you may have the opportunity to choose whether you would like to receive email or text correspondence from us. Your Personal Information will not be shared with third-party service providers unless you give consent. You will have the opportunity to opt out of marketing emails by clicking the "opt out" or "unsubscribe" link in the emails you receive. You will have the opportunity to opt out of marketing text messages. To stop receiving messages, reply 'STOP' at any time. You can also request this by sending a request to <a href="mailto:info@dashrealty.com" className="link link-primary">info@dashrealty.com</a>. If you would like to opt out of your information being shared with our AI Tools, please send a request via email to <a href="mailto:info@dashrealty.com" className="link link-primary">info@dashrealty.com</a>.</p>
            <p className="mb-6">Please take note that if you opt out of receiving promotional correspondence from us, we may still contact you in connection with your relationship, activities, transactions, and communications with us.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Data Security</h2>
            <p className="mb-6">We implement reasonable physical and electronic safeguards to help prevent unauthorized access of, maintain data security for and correctly use the personal information you have provided or that we otherwise collect through our services. However, while such efforts are intended to ensure the confidentiality of your personal information available to us as a result of your use of the services, we cannot and do not warrant or guarantee the absolute safety and security of your personal information. We work to protect the security of your personal information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input. To assist in keeping your personal information safe, you must use an SSL-enabled browser. It is important for you to protect against unauthorized access to your password, your computer and your mobile device(s). Be sure to sign off when finished using a shared computer. Additionally, change your passwords often using a combination of letters and numbers, and make sure you use a secure web browser.</p>
            <p className="mb-6">If you become a member of our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your device, and you agree to and accept sole responsibility for any and all activities that occur under your account or password. You also agree to notify us immediately of any unauthorized use of your account or password, or any other breach of security.</p>
            <p className="mb-6">This Website is based in the United States and the information we collect is governed primarily by U.S. law. Where we are subject to the privacy laws of other countries, we comply with those requirements. If you access or use our services or provide information to us, your information will be processed and stored in the United States, where you may not have the same rights and protections as you do under your local law.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">If you are located in Canada, this section applies to you</h2>
            <p className="mb-6">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
            <p className="mb-6">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
              <li>For investigations and fraud detection and prevention</li>
              <li>For business transactions provided certain conditions are met</li>
              <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
              <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
              <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
              <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
              <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
              <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
              <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
              <li>If the information is publicly available and is specified by the regulations</li>
            </ul>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Children's Online Privacy Protection Act</h2>
            <p className="mb-6">We are in compliance with the requirements of COPPA (Children's Online Privacy Protection Act); we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older. If we learn that we have mistakenly collected personal information from a child under age 13, we will delete that information as soon as possible. If you believe that we might have information from or about a child under age 13, please contact us via <a href="mailto:info@dashrealty.com" className="link link-primary">info@dashrealty.com</a>.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">CAN-SPAM Act</h2>
            <p className="mb-6">The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p>
            <p className="mb-6">To be in accordance with CAN-SPAM we agree to the following:</p>
            <p className="mb-6">If at any time you would like to unsubscribe from receiving future emails, you can email us at <a href="mailto:info@dashrealty.com" className="link link-primary">info@dashrealty.com</a> and we will promptly remove you from ALL correspondence.</p>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Contact us</h2>
            <p className="mb-6">If you have any questions or comments about this Privacy Policy, or if you would like to review, delete, or update information we have about you or your preferences, you can contact us with the following information:</p>
            <div className="bg-base-200 rounded-lg p-4 mb-6 border border-base-300">
              <p className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:info@dashrealty.com" className="link link-primary">info@dashrealty.com</a></p>
              <p className="mb-2"><span className="font-semibold">Address:</span> 13276 Research Blvd, Suite # 107, Austin, Texas, 78750, United States</p>
            </div>
            
            <h2 className="mt-10 text-2xl font-bold border-b border-base-300 pb-2">Version: 20250612.001.001</h2>
          </div>
        </article>
        
        {/* Back to Home */}
        <div className="text-center mt-12">
          <a href="/" className="btn btn-primary btn-lg shadow-md">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}