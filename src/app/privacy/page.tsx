import { Footer } from '@/common/components/footer';
import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';
import { CTASection } from '@/module/cta';

const privacyBreadcrumb = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Privacy Policy', url: 'https://tryandai.com/privacy' },
];

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col">
      <SchemaScript schema={generateBreadcrumbSchema(privacyBreadcrumb)} />

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[48rem] xl:px-8 xl:py-24">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-element-high-em text-5xl md:text-6xl">
              Privacy <span className="font-martina italic">policy</span>
            </h1>
            <p className="text-element-mid-em text-sm">
              Effective date: October 21, 2025
            </p>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <p>
              This Privacy Policy (&quot;Policy&quot;) describes how AndAI, Inc.
              (&quot;&AI,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;)
              collects, uses, and discloses certain personal information
              obtained through our website (&quot;Site&quot;), which is located
              at https://www.tryandai.com/, as well as information that we
              process as part of our services (collectively with the Site, the
              &quot;Services&quot;). By using our Services, you are agreeing to
              the terms of this Policy.
            </p>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                1. What Information We Collect and Maintain About You
              </h2>
              <p>
                We collect personal and other information from you directly when
                you provide it to us through our Services. We also automatically
                collect certain information about you and your computer,
                smartphone, or other device when you use, access, or interact
                with our Services. We may also collect information from third
                parties in relation to providing you our Services.
              </p>
              <p>
                <strong>
                  Personal information collected from registered users.
                </strong>{' '}
                If you create an account to use our Services, we will collect
                information from you related to maintaining your account. This
                may include your name, email address, and password.
              </p>
              <p>
                <strong>
                  Other personal information collected through the Site.
                </strong>{' '}
                You can visit our Site without submitting any information that
                we can use to identify you personally. However, to use certain
                features on the Site, such as the &quot;Book a Demo&quot;
                feature, you will be required to provide personal information.
                Such information could include, for example, your name, company,
                email address, and any message you chose to provide us.
              </p>
              <p>
                <strong>Web log data.</strong> When you use the Services, we
                automatically receive and record certain information from your
                computer (or other device) and your browser. This may include
                such data as your IP address and domain name, the pages you
                visit on the Services, the date and time of your visit, the
                files that you download, the URLs from the websites you visit
                before and after navigating to the Services, your software and
                hardware attributes (including device IDs), your general
                geographic location (e.g., your city, state, or metropolitan
                region), and certain cookie information (see below). To obtain
                such information, we may use web logs or applications that
                recognize your computer and gather information about its online
                activity.
              </p>
              <p>
                <strong>Cookies.</strong> We use cookies on the Site. Cookies
                are small files that are stored on your computer by your web
                browser. A cookie allows the Site to recognize whether you have
                visited before and may store user preferences and other
                information. For example, cookies can be used to collect or
                store information about your use of the Site during your current
                session and over time (including the pages you view and the
                files you download), your computer&apos;s operating system and
                browser type, your Internet service provider, your domain name
                and IP address, your general geographic location, the website
                that you visited before visiting the Site, and the link you used
                to leave the Site. If you are concerned about having cookies on
                your computer, you can set your browser to refuse all cookies or
                to indicate when a cookie is being set, allowing you to decide
                whether to accept it. You can also delete cookies from your
                computer. However, if you choose to block or delete cookies,
                certain features of the Site may not operate correctly.
              </p>
              <p>
                <strong>Web beacons.</strong> The Site or the emails that you
                receive from &AI may use an application known as a &quot;web
                beacon&quot; (also known as a &quot;clear gif&quot; or &quot;web
                bug&quot;). A web beacon is an electronic file that usually
                consists of a single-pixel image. It can be embedded in a web
                page or in an email to transmit information, which could include
                personal information. For example, it can allow an email sender
                to determine whether a user has opened a particular email.
              </p>
              <p>
                <strong>Third-party online tracking.</strong> We may partner
                with certain third parties to collect, analyze, and use the
                personal and other information described in this section. For
                example, we may allow third parties to set cookies or use web
                beacons on the Site or in email communications from us. This
                information may be used for a variety of purposes, as discussed
                below (see &quot;With Whom and Why We Share Your
                Information&quot;).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                2. How We Use and Process Your Information
              </h2>
              <p>
                We use the information that we collect (described in &quot;What
                Information We Collect and Maintain About You,&quot; above) for
                a variety of purposes. Our legal bases for processing your
                personal information are: 1) our legitimate interest in running
                and maintaining our business; 2) performance and fulfillment of
                our contracts; 3) your consent; and 4) compliance with our legal
                obligations. In many instances, more than one of these legal
                bases apply to the processing of your personal information.
              </p>
              <p>The purposes for which we use your information include to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Provide you with our Services and fulfill the terms of any
                  agreement you have with us;
                </li>
                <li>
                  Respond to your questions or requests concerning the Services;
                </li>
                <li>
                  Fulfill your requests for our Services or otherwise complete a
                  transaction that you initiate;
                </li>
                <li>
                  Send you information about our Services, including operational
                  communications and other topics that are likely to be of
                  interest to you;
                </li>
                <li>
                  Improve your user experience and the quality of our Services;
                </li>
                <li>
                  Analyze how visitors use the Services and various features,
                  including to count and recognize visitors to the Services;
                </li>
                <li>Comply with legal and/or regulatory requirements;</li>
                <li>Aggregate and deidentify information;</li>
                <li>Create new products and services; and</li>
                <li>Manage our business.</li>
              </ul>
              <p>
                We may link information gathered through our Services with
                information that we collect in other contexts. But in that
                event, we will handle the combined information in a manner
                consistent with this Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                3. With Whom and Why We Share Your Information
              </h2>
              <p>
                We may share any of the information described in &quot;What
                Information We Collect and Maintain About You,&quot; above, with
                other parties for a variety of purposes, as described below.
              </p>
              <p>
                <strong>Third-party service providers.</strong> &AI uses
                third-party service providers that perform services on our
                behalf, including web-hosting companies, payment service
                providers, artificial intelligence engine providers, customer
                support services and analytics providers. These service
                providers may collect and/or use your information, including
                information that identifies you personally, to assist us in
                achieving the purposes discussed above. We may share your
                information with other third parties when necessary to fulfill
                your requests for Services; to complete a transaction that you
                initiate; to meet the terms of any agreement that you have with
                us; or to manage our business.
              </p>
              <p>
                <strong>Analytics.</strong> We may partner with certain third
                parties to obtain the automatically collected information
                discussed above and to engage in analysis, auditing, research,
                and reporting. These third parties may use web logs or web
                beacons, and they may set and access cookies on your computer or
                other device.
              </p>
              <p>
                <strong>Legal purposes.</strong> We may use or share your
                information with third parties when we believe, in our sole
                discretion, that doing so is necessary:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  To comply with applicable law or a court order, subpoena, or
                  other legal process;
                </li>
                <li>
                  To investigate, prevent, or take action regarding illegal
                  activities, suspected fraud, violations of our terms and
                  conditions, or situations involving threats to our property or
                  the property or physical safety of any person or third party;
                </li>
                <li>
                  To establish, protect, or exercise our legal rights or defend
                  against legal claims; or
                </li>
                <li>
                  To facilitate the financing, securitization, insuring, sale,
                  assignment, bankruptcy, or other disposal of all or part of
                  our business or assets.
                </li>
              </ul>
              <p>
                <strong>Aggregated and de-identified information.</strong> From
                time to time, &AI may share aggregated or de-identified
                information about users, such as by publishing a report on
                trends in the usage of the Services. Such aggregated information
                will not identify you personally.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                4. Your Privacy Rights
              </h2>
              <p>
                If you want to learn more about the personal information that
                &AI has about you, or you would like to update, change, or
                delete that information, please contact us by email at
                support@tryandai.com.
              </p>
              <p>
                If you are a resident of a jurisdiction with an applicable data
                privacy law, you may have certain rights available to you in
                relation to your personal information. These rights may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  The right to access your personal information (including a
                  data portability request);
                </li>
                <li>
                  The right to correct or amend any personal information we have
                  on file about you;
                </li>
                <li>The right to delete your personal information;</li>
                <li>
                  The right to limit the use of your &quot;sensitive&quot;
                  personal information;
                </li>
                <li>
                  The right to opt-out of the sale or &quot;sharing&quot; of
                  your personal information;
                </li>
                <li>
                  The right to opt-out of the use of your personal information
                  for targeted advertising purposes;
                </li>
                <li>
                  The right to restrict or object to the processing of your
                  personal information (such as for direct marketing purposes);
                </li>
                <li>
                  The right to restrict or opt-out of the use of your personal
                  information for certain automated decision-making (including
                  profiling in furtherance of decisions that produce legal or
                  similarly significant effects);
                </li>
                <li>
                  The right to revoke your consent (to the extent applicable);
                </li>
                <li>
                  The right to confirm whether personal information about you is
                  being processed;
                </li>
                <li>
                  The right to obtain a list of specific third parties (or
                  categories of third parties) to which we have disclosed your
                  personal information or any personal information.
                </li>
              </ul>
              <p>
                To exercise any of the rights listed above, please contact us
                via email at support@tryandai.com. We will respond to your
                request as soon as reasonably possible and within the timeframe
                required under applicable law. You may appeal any decision we
                make in response to such request in accordance with applicable
                law. Appeals may be submitted to support@tryandai.com with the
                subject line &quot;Appeal of Decision Related to Privacy Rights
                Request.&quot;
              </p>
              <p>
                Prior to complying with your request, we will first verify your
                identity by comparing the information you provide with the
                information we have on file for you. You may authorize an agent
                to make a request on your behalf. To designate an agent, please
                provide a written and signed document by both you and the agent
                that authorizes the agent to act on your behalf. You may also
                use a power of attorney. We will still require you to provide
                information to allow us to reasonably verify that you are the
                person about whom we collected personal information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                5. External Links
              </h2>
              <p>
                Our Services may contain links to third-party websites. If you
                use these links, you will leave the Services. We have not
                reviewed these third-party sites and do not control and are not
                responsible for any of these sites, their contents, or their
                privacy policies. Thus, we do not endorse or make any
                representations about them, or any information, software, or
                other products or materials found there, or any results that may
                be obtained from using them. If you decide to access any of the
                third-party sites listed on our website, you do so at your own
                risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                6. Data Security
              </h2>
              <p>
                We employ physical, technical, and administrative procedures to
                safeguard the personal information we collect online. However,
                no website is 100% secure, and we cannot ensure or warrant the
                security of any information you transmit to the Services or to
                us, and you transmit such information at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                7. Data Retention
              </h2>
              <p>
                We retain personal information about you necessary to fulfill
                the purpose for which that information was collected or as
                required or permitted by law. We do not retain personal
                information longer than is necessary for us to achieve the
                purposes for which we collected it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                8. International Users
              </h2>
              <p>
                The information that we collect through or in connection with
                the Services is transferred to and processed in the United
                States for the purposes described above. &AI may subcontract the
                processing of your data to, or otherwise share your data with,
                affiliates or third parties in the United States or countries
                other than your country of residence. The data protection laws
                in these countries may be different from, and less stringent
                than, those in your country of residence. By using the Services
                or by providing any personal or other information to us, you
                expressly consent to such transfer and processing.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                9. Children
              </h2>
              <p>
                Content on the Services is directed at individuals over the age
                of 18 and is not directed at children under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under the age of 13.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                10. Changes to this Policy
              </h2>
              <p>
                We may make changes to the Services in the future and as a
                consequence will need to revise this Policy to reflect those
                changes. We will post all such changes on the Site, so you
                should review this page periodically. If we make a material
                change to the Policy, you will be provided with appropriate
                notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                11. Contact Us
              </h2>
              <p>
                Should you have any questions or concerns about this Policy, you
                can contact us at support@tryandai.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
