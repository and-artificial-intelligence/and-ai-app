import { Footer } from '@/common/components/footer';
import { SchemaScript } from '@/common/components/schema-script';

import { generateBreadcrumbSchema } from '@/lib/schema';
import { CTASection } from '@/module/cta';

const termsBreadcrumb = [
  { name: 'Home', url: 'https://tryandai.com' },
  { name: 'Terms of Service', url: 'https://tryandai.com/terms' },
];

export default function Terms() {
  return (
    <main className="flex min-h-screen flex-col">
      <SchemaScript schema={generateBreadcrumbSchema(termsBreadcrumb)} />

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[48rem] xl:px-8 xl:py-24">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-element-high-em text-5xl md:text-6xl">
              Terms of <span className="font-martina italic">service</span>
            </h1>
            <p className="text-element-mid-em text-sm">
              Effective date: October 21, 2025
            </p>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <section className="space-y-4">
              <p>
                Hello and welcome to &AI! The &AI platform and related services
                (collectively, the &quot;&AI Platform&quot;) are made available
                through our website at www.tryandai.com (our
                &quot;Website&quot;) to help streamline patent and intellectual
                property searches and due diligence using artificial
                intelligence technology and related tools (&quot;AI&quot;).
                Please read these terms of service (the &quot;Terms&quot;)
                carefully, as they are a legally binding agreement between you
                and AndAI, Inc. (&quot;&AI,&quot; &quot;we&quot; or
                &quot;us&quot;). These Terms govern your access to and use of
                any software or services that we make available to you through
                our Website and the &AI Platform, as well as any offline
                services that we may provide to you (collectively, the
                &quot;Services&quot;).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                1. Acceptance of Terms
              </h2>
              <p>
                PLEASE READ THESE TERMS CAREFULLY, AS THEY CONTAIN AN AGREEMENT
                TO ARBITRATE, WHICH REQUIRES THAT YOU AND &AI ARBITRATE CERTAIN
                CLAIMS BY BINDING, INDIVIDUAL ARBITRATION INSTEAD OF GOING TO
                COURT, AND LIMITS CLASS ACTION CLAIMS, UNLESS YOU OPT OUT OF THE
                AGREEMENT TO ARBITRATE AS DESCRIBED IN SECTION 12 OF THESE
                TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR
                OTHERWISE USE OUR SERVICES, OUR WEBSITE, OR THE &AI PLATFORM.
              </p>
              <p>
                By using our Services or accessing or using any Content or
                Output (each as defined below) that we make available, you agree
                to these Terms. BY USING OUR SERVICES, INCLUDING OUR WEBSITE,
                YOU REPRESENT TO US THAT YOU ARE AT LEAST EIGHTEEN (18) YEARS OF
                AGE.
              </p>
              <p>
                These terms may have changed since your last visit. We reserve
                the right to revise these Terms in our sole discretion at any
                time and without prior notice to you other than by posting the
                revised Terms on our Website. Revisions to the Terms are
                effective upon posting. The Terms will be identified as of the
                most recent date of revision. Your continued use of our Services
                after a revised version of these Terms has been posted on our
                Website constitutes your binding acceptance of the revised
                Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                2. Login Credentials; Account Information; Communications
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Login Credentials
              </h3>
              <p>
                In order to use some of our Services, you may be required to
                create an account on the &AI Platform (an &quot;Account&quot;)
                by providing certain information. We may ask you to complete a
                registration form and create a username and password, or we may
                permit you to login through a third party application (your
                username, password for us or for any third party application,
                your &quot;Login Credentials&quot;). Upon creating an Account,
                we may generate a unique identification code (your &quot;User
                ID&quot;) associated with your Account.
              </p>
              <p>
                You are responsible for protecting your Login Credentials from
                unauthorized use, and you are responsible for all activity that
                occurs on your Account (including without limitation any
                financial obligations). You agree to notify us immediately if
                you believe that your Login Credentials have been or may be used
                without your permission so that appropriate action can be taken.
                We are not responsible for losses or damage caused by your
                failure to safeguard your Login Credentials.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Account Information
              </h3>
              <p>
                During your registration, you shall give truthful information
                about you (such as name, email address, physical address, phone
                number and payment account information) (collectively, together
                with the additional information referenced in Section 3, your
                &quot;Account Information&quot;). You represent, warrant and
                covenant to us that your Account Information is and shall remain
                accurate and up-to-date, and you understand that you are
                responsible for ensuring that your Account Information is
                accurate and for keeping your Account Information up-to-date.
              </p>
              <p>
                We may contact you to verify your Account Information and may
                require you to provide additional information for purposes of
                fraud prevention and verifying your Account Information, which
                may include without limitation a copy of your driver&apos;s
                license, passport, or social security card. We may suspend you
                from our Services if you do not provide such information within
                a reasonable period.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Acknowledgement for You to Receive Communications
              </h3>
              <p>
                You hereby agree: (i) to receive communications, including
                emails, text messages, push notifications, mail and telephone
                calls, that are related to our Services; that any communications
                from us may also include marketing materials from us or from
                third parties; and that any notices, agreements, disclosures or
                other communications that we send to you electronically are
                deemed to satisfy any legal communication requirements. You may
                opt out from receiving our communications by emailing
                support@tryandai.com or selecting to unsubscribe as may be
                provided in the applicable correspondence.
              </p>
              <p>
                In addition, if you create an Account, we may allow you to opt
                in to receive certain communications regarding certain Account
                activity (any such settings, &quot;Notification Settings&quot;).
                You may change any Notification Settings through your Account at
                any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                3. Fees and Billing
              </h2>
              <h3 className="text-element-high-em font-semibold">Fees</h3>
              <p>
                By using our Services, you agree to pay the applicable
                subscription and other fees (the &quot;Fees&quot;) as set forth
                in the Fee Schedule posted on our Website, which is incorporated
                herein by reference, or that are otherwise agreed between you
                and us in a separate order form or related document.
              </p>
              <h3 className="text-element-high-em font-semibold">Billing</h3>
              <p>
                &AI uses Stripe Connect service operated by Stripe, Inc.
                (&quot;Stripe&quot;) to bill you through an online account, as
                applicable, in lieu of directly processing your credit card
                information. By using the Stripe payment processing services,
                you acknowledge that you agree to the Stripe Connected Account
                Agreement available at
                https://stripe.com/us/connect-account/legal and you agree to the
                collection, use and disclosure practices by Stripe set forth in
                Stripe Privacy Policy, available at
                https://stripe.com/us/privacy. You also agree that we may change
                the third party payment service and move your information to
                other service providers that encrypt your information using
                transport layer security (TLS) or comparable security
                technology.
              </p>
              <h3 className="text-element-high-em font-semibold">Refunds</h3>
              <p>
                Other than as may be expressly set forth on our Website, all
                Fees are non-refundable once paid.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                4. Scope of Service; Modifying and Terminating Service
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Suspension of Services
              </h3>
              <p>
                We may alter, suspend or discontinue our Services in whole or in
                part, at any time and for any reason, without notice. Our
                Services may also periodically become unavailable due to
                maintenance or malfunction of computer equipment or for other
                reasons.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Termination by Us
              </h3>
              <p>
                We may terminate your access to our Services, in our sole
                discretion, for any reason and at any time. If you have provided
                us with your email address, we will endeavor to provide
                electronic notice to you at such email address. You agree that
                we are not liable to you or any third party for any termination
                of your access to our Services.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Termination by You
              </h3>
              <p>
                You may terminate these Terms at any time by ceasing to use our
                Services and, if applicable, by closing your Account. We may
                provide instructions on our Platform for how to close your
                Account and may update such instructions from time to time.
                Please follow such instructions if you would like to close your
                Account.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Survival of Terms
              </h3>
              <p>
                The following Sections of these Terms and any accrued
                obligations will survive any termination of these Terms: 1, 3,
                4, 5, 6, 8, 9, 10, and 11.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                5. Intellectual Property; Licenses; Content; Individual Data
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Content, Individual Data, Suggestions
              </h3>
              <h4 className="text-element-high-em font-semibold">AI Output</h4>
              <p>
                The &AI Platform includes certain functionality using AI and
                other tools designed to help streamline patent and intellectual
                property searches and due diligence, including to create reports
                and documentation based on your queries (the
                &quot;Output&quot;). You acknowledge and agree that AI sometimes
                produces unpredictable, random, incorrect or inapplicable
                outcomes. You are solely responsible for, and we will have no
                liability related to, the accuracy, quality, or useability of
                any of the Output.
              </p>
              <p>
                Without limiting the foregoing, we grant you a perpetual,
                worldwide, royalty-free right and license to use any Output
                generated by or for you through the &AI Platform based upon your
                queries, solely for your internal business purposes and not for
                resale to any third party.
              </p>
              <h4 className="text-element-high-em font-semibold">
                Our Content
              </h4>
              <p>
                Subject to these Terms and any other agreement between you and
                us, we hereby grant you a limited, personal, non-transferable,
                non-exclusive, non-sublicensable, revocable license to access
                and use any other content, including text, audio, video, images
                or other content (collectively, &quot;Content&quot;) that we
                make available through our Services, solely for your personal
                and non-commercial use, and subject to any restrictions on
                certain types of content set forth in these Terms. You
                understand that the Content that is posted on our Services is
                used by you at your own risk.
              </p>
              <h4 className="text-element-high-em font-semibold">
                Changes to Content
              </h4>
              <p>
                We reserve the right to make changes to any Content or
                descriptions of our Services without obligation to issue any
                notice of such changes.
              </p>
              <h4 className="text-element-high-em font-semibold">
                Rights in User Content Granted by You
              </h4>
              <p>
                You hereby grant to us a non-exclusive, perpetual, irrevocable,
                worldwide, sub-licensable, transferable, royalty free, fully
                paid up license to reproduce, distribute, prepare derivative
                works of, modify, translate, adapt, publicly perform, publicly
                display and otherwise use your Content that you or any user
                authorized by you (each, a &quot;User&quot;) upload or provide
                through the &AI Platform (your &quot;User Content&quot;), and
                you agree that we may make such Content available to other users
                of the &AI Platform.
              </p>
              <h4 className="text-element-high-em font-semibold">
                Your Responsibility for User Content
              </h4>
              <p>
                You are solely responsible for all of your User Content. You
                represent and warrant that you own all your User Content or you
                have all rights that are necessary to grant us the license
                rights in your User Content under these Terms. You also
                represent and warrant that neither your User Content, nor your
                use and provision of your User Content to be made available
                through our Services, nor any use of your User Content by &AI on
                or through our Services, will infringe, misappropriate or
                violate a third party&apos;s intellectual property rights, or
                rights of publicity or privacy, or result in the violation of
                any applicable law or regulation.
              </p>
              <h4 className="text-element-high-em font-semibold">Feedback</h4>
              <p>
                We welcome your feedback, ideas and suggestions (collectively,
                &quot;Suggestions&quot;). If you send us any Suggestions,
                including as permitted under Section 6(a) of these Terms, you
                agree that: (1) your Suggestion(s) become our property and you
                are not owed any compensation in exchange; (2) none of the
                Suggestion(s) contain confidential or proprietary information of
                any third party; (3) we may use or redistribute Suggestion(s)
                for any purpose and in any way; (4) there is no obligation for
                us to review your Suggestion(s); and (5) we have no obligation
                to keep any Suggestions confidential.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Applications; License to Use
              </h3>
              <h4 className="text-element-high-em font-semibold">
                License to Use
              </h4>
              <p>
                Subject to these Terms and any other agreement between you and
                us, we grant to you a limited, personal, non-exclusive,
                non-transferable, non-sublicensable, revocable license to
                install and use any application we may offer on a compatible
                mobile device for your personal, non-commercial purposes and use
                of the &AI Platform, in each case, solely in the manner enabled
                by us.
              </p>
              <h4 className="text-element-high-em font-semibold">
                Limitations; Revocation
              </h4>
              <p>
                Your license to use our Services is automatically revoked if you
                violate these Terms. From time to time, we may upgrade our
                Services or make improvements to our Services. You agree that
                these Terms will apply to all such upgrades or improvements. We
                retain all rights and interest in our Services. Any attempt by
                you to transfer any of the rights, duties or obligations
                hereunder, except as expressly provided for in these Terms, is
                void. We reserve all rights not expressly granted under these
                Terms.
              </p>
              <h4 className="text-element-high-em font-semibold">
                No Implied Licenses
              </h4>
              <p>
                Nothing contained on our Services should be construed as
                granting, by implication, estoppel, or otherwise, any license or
                right to use our Services or any Content, through the use of
                framing or otherwise, except: (a) as expressly permitted by
                these Terms; or (b) with our prior written permission or the
                written permission of the third party that may own the trademark
                or copyright of material displayed on our Services.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Privacy Policy
              </h3>
              <p>
                Our Privacy Policy is made available on our Website and
                describes the collection, use and disclosure of data by us in
                connection with our Services. Our Privacy Policy, as may be
                updated by us from time to time in accordance with its terms, is
                hereby incorporated into these Terms, and you hereby agree to
                the collection, use and disclosure practices set forth therein.
              </p>
              <h3 className="text-element-high-em font-semibold">Security</h3>
              <p>
                You acknowledge that our Services use the Internet for data
                transfer and Internet-connected servers to store Content and
                Individual Data. While we use commercially reasonable security
                measures for such servers, no security measures are entirely
                effective and Internet communications may have inherent
                insecurities. As such, we make no representations or warranties
                regarding the security offered in respect of our Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                6. Your Use; Prohibited Conduct
              </h2>
              <h3 className="text-element-high-em font-semibold">General</h3>
              <p>
                As a condition of your use of our Services, you will not use our
                Services for any purpose that is unlawful or otherwise
                prohibited by these Terms. You further agree to comply with any
                other applicable terms and conditions of use set forth on our
                Website. We reserve the right, without prior notice to you and
                in our sole discretion, to terminate your access to our Services
                if we decide that your use violates these Terms, including for
                the reasons listed in this Section 6, or for any other reason.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Prohibited Use; Unauthorized Access
              </h3>
              <p>
                You agree not to, and will not permit any person or entity to:
                (i) use, or allow the use of, our Services for any unfair or
                deceptive practices or in contravention of any federal, state,
                local, foreign or other applicable law or rules and regulations
                of regulatory or administrative organizations; (ii) act in a
                fraudulent, tortious, malicious or negligent manner when using
                our Services; (iii) act in any manner that, in our sole
                discretion, could damage, disable, overburden, impair or
                interfere with any other party&apos;s use of our Services; (iv)
                obtain or attempt to obtain any information through any means
                not intentionally made available through our Services; (v)
                obtain unauthorized access to any computer system through our
                Services; (vi) circumvent, remove or otherwise interfere with
                any security-related features of our Services, features that
                prevent copying or using any part of our Services or features
                that enforce limitations on the use of our Services, the Output,
                or any Content; (vii) introduce viruses, worms, Trojan horses
                and/or harmful code to our Services; and (viii) use any robot,
                spider, site search/retrieval application or other automated
                device, process or means to access, retrieve, scrape or index
                any portion of our Services or any Content.
              </p>
              <p>
                In the event that you gain access to information not intended to
                be accessed by you, you agree that you will immediately notify
                us and destroy all copies of such information in your
                possession.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Prohibited Content and User Activity
              </h3>
              <p>
                You agree that you will not, and will not authorize or
                facilitate any attempt by another person or organization to use
                our Services to: (i) transmit any Content that is unlawful,
                harmful, threatening, abusive, harassing, defamatory, vulgar,
                offensive, obscene, pornographic, lewd, lascivious or otherwise
                objectionable, as determined by us; (ii) use a name or language
                that we, in our sole discretion, deem offensive; (iii) post
                defamatory statements; (iv) post hateful or offensive Content or
                Content that disparages any ethnic, racial, sexual, gender,
                religious or other group; (v) post Content that depicts or
                advocates the use of illegal drugs; (vi) post Content that
                characterizes violence as acceptable, glamorous or desirable;
                (vii) post Content which infringes another&apos;s copyright,
                trademark or trade secret; (viii) post unsolicited advertising
                or unlawfully promote products or services; (ix) harass,
                threaten, bully, stalk or intentionally embarrass or cause
                distress to another person or entity; (x) promote, solicit or
                participate in any multi-level marketing or pyramid schemes;
                (xi) exploit children under 18 years of age; (xii) engage in
                disruptive activity, such as sending multiple messages in an
                effort to monopolize a forum; (xiii) invade the privacy of any
                person, including without limitation posting personally
                identifying or otherwise private information about a person
                without their consent (or their parent&apos;s consent in the
                case of a child under 13 years of age); (xiv) solicit personal
                information from children under 13 years of age; (xv) create a
                false identity or impersonate another person or entity; or (xvi)
                encourage conduct that would constitute a criminal or civil
                offense.
              </p>
              <p>
                We reserve the right to consider other conduct to be prohibited.
                In addition, you acknowledge and agree that you will not post
                any content to any of our social media accounts that is any of
                items (i)-(xvi) above.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Intellectual Property Infringement
              </h3>
              <p>
                You agree that the structure, organization and code used in
                conjunction with our Services are proprietary to us. You shall
                not, and shall not permit any person or entity to: (i) use our
                Services on a service bureau, time sharing or any similar basis,
                or otherwise for the benefit of any other person or entity; (ii)
                alter, enhance, or make derivative works of our Services,
                Output, or any Content available through the foregoing; (iii)
                reverse engineer, reverse assemble or decompile, or otherwise
                attempt to derive source code from our Services; or (iv) sell,
                transfer, publish, disclose, display or otherwise make available
                our Services or any Output, including any modifications,
                enhancements, derivatives and other software and materials
                provided hereunder by us or copies thereof to others in
                violation of these Terms.
              </p>
              <p>
                Unless as otherwise set forth by us in writing, you understand
                and acknowledge that all Content contained on our Services is
                the property of us and/or our affiliates or licensors and is
                protected from unauthorized copying and dissemination by United
                States copyright law, trademark law, international conventions
                and other intellectual property laws. Product names are
                trademarks or registered trademarks of their respective owners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                7. Third Party Services
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Third Party Services
              </h3>
              <p>
                Our Services may include features or functionalities that
                interoperate with services operated by third parties, which may
                be pursuant to a generally available application programming
                interface made available by such a third party or pursuant to an
                agreement that we have with such a third party. We have no
                control over any features or functionalities offered by any
                third party, and those features or functionalities may be
                modified, suspended or terminated at any time with no notice.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Third Party Links
              </h3>
              <p>
                Our Services may contain links to third party sites. These links
                are provided to you as a convenience, and we are not responsible
                for the content of any linked third party site. Any third party
                site accessed from our Services is independent from us, and we
                have no control over the content of that site. In addition, a
                link to any third party site does not imply that we endorse or
                accept any responsibility for the content or use of such site.
                You understand that use of any third party site is subject to
                its terms of service and privacy policy. We request that you
                exercise caution and good judgment when using third party sites.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Providers of Third Party Platforms
              </h3>
              <p>
                You hereby acknowledge and agree that all of our licensors,
                suppliers or other third parties: (i) are not parties to these
                Terms; (ii) have no obligation whatsoever to furnish any
                maintenance or support services with respect to &AI; (iii) are
                not responsible for addressing claims by you or any third party
                relating to our Services, including without limitation any
                product liability claims, claims under consumer protection laws
                or claims under any other law, rule or regulation; and (iv) have
                no responsibility to investigate, defend, settle or discharge
                any claim that our Services or use thereof infringes any third
                party intellectual property rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                8. Limitation of Liability; Disclaimers; Miscellaneous
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Disclaimer. No Warranty
              </h3>
              <p>
                OUR SERVICES AND ALL OUTPUT, CONTENT ON OR ACCESSIBLE FROM OUR
                SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
                ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE OR NON-INFRINGEMENT. SPECIFICALLY, BUT
                WITHOUT LIMITATION, WE DO NOT WARRANT THAT: (i) THE OUTPUT OR
                OTHER INFORMATION AVAILABLE THROUGH OUR SERVICES IS FREE OF
                ERRORS; (ii) THE FUNCTIONS OR SERVICES (INCLUDING WITHOUT
                LIMITATION MECHANISMS FOR THE DOWNLOADING AND TRANSMITTING
                CONTENT) PROVIDED BY OUR SERVICES WILL BE UNINTERRUPTED, SECURE
                OR FREE OF ERRORS; (iii) DEFECTS WILL BE CORRECTED, OR (iv) THAT
                OUR SERVERS OR THE SERVER(S) THAT MAKE THEM AVAILABLE ARE FREE
                OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Waiver of Liability
              </h3>
              <p>
                WE AND OUR AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE
                THAT ANY PERSONAL INFORMATION SUPPLIED BY YOU WILL NOT BE
                MISAPPROPRIATED, INTERCEPTED, DELETED, DESTROYED OR USED BY
                OTHERS. Under no circumstances will we be liable for any loss or
                damage caused by failed delivery or receipt of Content or any
                third party&apos;s use or distribution of Content. Under no
                circumstances will &AI be liable for any claims that may arise
                from User Content, including without limitation claims for
                intellectual property infringement.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Limitation of Liability
              </h3>
              <h4 className="text-element-high-em font-semibold">General</h4>
              <p>
                IN NO EVENT SHALL WE BE LIABLE TO YOU, ANY OTHER USER OF OUR
                SERVICES, ANY THIRD PARTY PROVIDER OR ANY OTHER PERSON OR ENTITY
                FOR ANY SPECIAL, INCIDENTAL, PUNITIVE, CONSEQUENTIAL, EXEMPLARY
                OR OTHER INDIRECT DAMAGES OR FOR LOSS OF PROFITS, LOSS OF DATA,
                LOSS OF USE OR COSTS OF OBTAINING SUBSTITUTE GOODS OR SERVICES
                ARISING OUT OF THE USE, INABILITY TO USE, UNAUTHORIZED ACCESS TO
                OR USE OR MISUSE OF OUR SERVICES, YOUR CONTACT INFORMATION,
                CONTENT OR ANY INFORMATION CONTAINED THEREON OR IN CONNECTION
                THEREWITH, WHETHER BASED UPON WARRANTY, CONTRACT, TORT
                (INCLUDING NEGLIGENCE), OR OTHERWISE, EVEN IF WE HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES.
              </p>
              <h4 className="text-element-high-em font-semibold">Limitation</h4>
              <p>
                OUR AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM THESE
                TERMS SHALL NOT EXCEED THE GREATEST OF (I) $100.00; OR (II) THE
                AGGREGATE AMOUNT YOU HAVE PAID TO US IN FEES, IF ANY, IN THE
                THEN-PRIOR TWELVE (12)-MONTH PERIOD.
              </p>
              <h4 className="text-element-high-em font-semibold">Exclusions</h4>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
                INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE
                ABOVE LIMITATIONS MAY NOT APPLY TO YOU BUT SHALL INSTEAD APPLY
                TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Indemnification
              </h3>
              <p>
                By using our Services, you hereby agree to indemnify and hold
                harmless us and our officers, directors, employees and agents
                from any claims, damages, losses, liabilities, and all costs and
                expenses of defense (collectively, &quot;Claims&quot;),
                including without limitation attorneys&apos; fees, resulting
                directly or indirectly from a claim by a third party that arises
                in connection with (i) your provision of any Content, (ii) your
                use of our Services and/or (iii) any user or other third
                party&apos;s use of any Content that you submit via our
                Services. At our option, you agree to defend us from any Claims.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Waiver of Rights
              </h3>
              <p>
                &AI&apos;s failure to enforce any right or provision of these
                Terms will not be considered a waiver of such right or
                provision. The waiver of any such right or provision will be
                effective only if in writing and signed by a duly agent of &AI.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Successors and Assigns; Binding Effect
              </h3>
              <p>
                You may not assign or transfer your rights or obligations under
                these Terms in whole or in part to any third party without our
                consent. These Terms shall bind and insure to the benefit of the
                parties to these Terms and their respective successors,
                permitted transferees and permitted assigns.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Independent Contractor Status
              </h3>
              <p>
                We and you are independent contractors and are not partners,
                joint venturers, agents, employees or representatives of each
                other.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Entire Agreement; Amendment; Interpretation
              </h3>
              <p>
                These Terms, including our Privacy Policy, contain the entire
                understanding of the parties with respect to the transactions
                and matters contemplated herein, supersede all previous
                communications, understandings and agreements (whether oral or
                written) other than any click-through or end user license
                agreement provided by us, and cannot be amended except by a
                writing signed by both parties or by our posting of an amended
                version of these Terms on our Website. The headings and captions
                used in these Terms are used for convenience only and are not to
                be considered in construing or interpreting these Terms. If any
                part of these Terms is held to be unlawful, void, or
                unenforceable, that part will be deemed severable and shall not
                affect the validity and enforceability of the remaining
                provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                9. Jurisdictional Issues
              </h2>
              <p>
                By using our Services, you consent to having your Login
                Credentials and any personal information that you provide to us
                transferred to and processed in the United States of America
                subject to the restrictions on such data as provided in our
                Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                10. Governing Law; Dispute Resolutions
              </h2>
              <p>
                These Terms, and any dispute between you and us, shall be
                governed by the laws of New York without regard to principles of
                conflicts of law that would result in the application of the law
                of any other jurisdiction, except that the Federal Arbitration
                Act shall govern the interpretation and enforcement of the
                arbitration provisions set forth below.
              </p>
              <p>
                Unless you and we agree otherwise, in the event that this
                Section 10 is found not to apply to you or to a particular claim
                or dispute, either as a result of your decision to opt-out of
                the Arbitration Procedures or as a result of a decision by the
                arbitrator or a court order, you agree that any claim or dispute
                that has arisen or may arise between you and us must be resolved
                exclusively by a state or federal court located in the New York
                except that you or we are permitted (a) to bring small claims
                actions in state court in the county in which you reside if such
                court has a small claims procedure and if such court is located
                in the United States of America; (b) to bring claims for
                injunctive relief in any court having jurisdiction over the
                parties; or (c) to seek enforcement of a judgment in any court
                having jurisdiction over the parties. To the extent permitted by
                law, you and we agree to waive trial by jury in any court
                proceeding.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                11. Agreement to Arbitrate; Waiver of Class Action
              </h2>
              <h3 className="text-element-high-em font-semibold">
                Mandatory Arbitration of Disputes; Arbitration Procedures
              </h3>
              <p>
                Except if you opt-out or for disputes relating to your or our
                intellectual property (such as trademarks, trade dress, domain
                names, trade secrets, copyrights and patents) or for items
                (a)-(c) set forth in Section 10 (Governing Law; Dispute
                Resolutions), you agree that all disputes between you and us
                (whether or not such dispute involves a third party) arising out
                of or relating to these Terms, our Services, and/or our Privacy
                Policy shall be finally resolved by arbitration before a single
                arbitrator conducted in the English language in the Commonwealth
                of Massachusetts. under the Commercial Arbitration Rules of the
                American Arbitration Association (&quot;AAA&quot;) and you and
                we hereby expressly waive trial by jury.
              </p>
              <p>
                You and we shall appoint as sole arbitrator a person mutually
                agreed by you and us or, if you and we cannot agree within
                thirty (30) days of either party&apos;s request for arbitration,
                such single arbitrator shall be selected by the AAA upon the
                request of either party. The parties shall bear equally the cost
                of the arbitration (except that the prevailing party shall be
                entitled to an award of reasonable attorneys&apos; fees incurred
                in connection with the arbitration in such an amount as may be
                determined by the arbitrator). All decisions of the arbitrator
                shall be final and binding on both parties and enforceable in
                any court of competent jurisdiction. Notwithstanding the
                foregoing, application may be made to any court for a judicial
                acceptance of the award or order of enforcement. Under no
                circumstances shall the arbitrator be authorized to award
                damages, remedies or awards that conflict with these Terms.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Class Action Waiver
              </h3>
              <p>
                Any claims brought by you or us must be brought in such
                party&apos;s individual capacity, and not as a plaintiff or
                class member in any purported class or representative
                proceeding. You agree and acknowledge that neither you nor we
                will participate in a class action or class-wide arbitration for
                any claims covered by these Terms. You hereby waive any and all
                rights to bring any claims related to these Terms and/or our
                Privacy Policy as a plaintiff or class member in any purported
                class or representative proceeding. You understand and agree
                that you may bring claims only on your own behalf.
              </p>
              <h3 className="text-element-high-em font-semibold">Opt-out</h3>
              <p>
                You may opt out of this Agreement to Arbitrate. If you do so,
                neither you nor we can require the other to participate in an
                arbitration proceeding. To opt out, you must notify us in
                writing within thirty (30) days of the date that you first
                became subject to this arbitration provision. The opt-out notice
                must state that you do not agree to the Agreement to Arbitrate
                and must include your name, address, phone number, your &AI
                account, if applicable, to which the opt-out applies and a clear
                statement that you want to opt out of this Agreement to
                Arbitrate. You must sign the opt-out notice for it to be
                effective. This procedure is the only way you can opt out of the
                Agreement to Arbitrate. You must use this address to opt out:
                AndAI, Inc. ATTN: Arbitration Opt-Out, 400 East 57th Street,
                17F, New York, NY 10022.
              </p>
              <h3 className="text-element-high-em font-semibold">
                Effect of Changes on Arbitration
              </h3>
              <p>
                Notwithstanding any provision in these Terms to the contrary,
                you and we agree that if we make any change to the Arbitration
                Procedures (other than a change to any notice address or Website
                link provided herein) in the future, that change shall not apply
                to any claim that was filed in a legal proceeding against us
                prior to the effective date of the change. Moreover, if we seek
                to terminate the Arbitration Procedures from these Terms, such
                termination shall not be effective until thirty (30) days after
                the version of these Terms not containing the Arbitration
                Procedures is posted to our Website and shall not be effective
                as to any claim that was filed in a legal proceeding against us
                prior to the effective date of removal.
              </p>
              <h3 className="text-element-high-em font-semibold">Survival</h3>
              <p>
                In accordance with Section 5 (Scope of Service; Modifying and
                Terminating Service), this Section 11 (Agreement to Arbitrate;
                Waiver of Class Action) will survive the termination of your
                relationship with us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-element-high-em text-xl font-semibold">
                12. Contact Us For Additional Information
              </h2>
              <p>
                If you have any questions about these Terms, please Book a Demo
                at support@tryandai.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
