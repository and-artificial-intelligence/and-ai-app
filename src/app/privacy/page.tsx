import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { Navbar } from '@/common/components/navbar';

import { BackgroundArt } from '@/module/cta';

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[48rem] xl:px-8 xl:py-24">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-element-high-em text-5xl md:text-6xl">
              Privacy <span className="font-martina italic">policy</span>
            </h1>
            <p className="text-element-mid-em text-sm">
              Effective date: April 3, 2024
            </p>
          </div>

          <div className="text-element-mid-em space-y-8 text-base">
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget.{' '}
              <strong>Vestibulum</strong> felis. Dictum quis montes, sit sit.
              Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu
              amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            </p>

            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in{' '}
              <strong>volutpat mollis</strong> at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.
            </p>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Mi feugiat amet
              </h2>
              <p>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </p>
              <p>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                imperdiet commodo consectetur convallis risus. Sed condimentum
                enim dignissim adipiscing faucibus consequat, urna. Viverra
                purus et erat auctor aliquam. Risus, volutpat vulputate posuere
                purus sit congue convallis aliquet. Arcu id augue ut feugiat
                donec porttitor neque. Mauris, neque ultricies eu vestibulum,
                bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus,
                pharetra, porttitor.
              </p>
              <p>
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
                felis elit erat nam nibh orci.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Volutpat turpis quisque
              </h2>
              <p>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </p>
              <p>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                imperdiet commodo consectetur convallis risus. Sed condimentum
                enim dignissim adipiscing faucibus consequat, urna. Viverra
                purus et erat auctor aliquam. Risus, volutpat vulputate posuere
                purus sit congue convallis aliquet. Arcu id augue ut feugiat
                donec porttitor neque. Mauris, neque ultricies eu vestibulum,
                bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus,
                pharetra, porttitor.
              </p>
              <p>
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
                felis elit erat nam nibh orci.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-element-high-em text-2xl font-medium">
                Elementum odio
              </h2>
              <p>
                Sagittis et eu at elementum, quis in. Proin praesent volutpat
                cursus sodales at lorem ipsum. Eget diam curabitur mi ac. Auctor
                rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
                ultrices at diam et, egestas. Quis facilisi velit eros, ultrices
                nec, turpis in. Iaculis nisi arcu quis urna, lacus convallis
                dignissim massa amet volutpat gravida id. Sed nibh auctor
                vulputate hac elementum gravida cursus dis.
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices
                  suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>
                  Suspendisse maecenas ac donec scelerisque diam sed est duis
                  purus.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-0"
        id="cta"
      >
        <div className="bg-brand-accent-blue border-gray-dark/5 relative w-full overflow-hidden border px-4 pt-24 pb-16 md:px-6 md:pb-16 xl:px-8 xl:pt-[7.5rem] xl:pb-20">
          <BackgroundArt className="pointer-events-none absolute top-1/2 left-1/2 size-[38.375rem] -translate-x-1/2 -translate-y-1/2 md:size-[58.9375rem]" />
          <div className="flex flex-col items-center gap-12">
            <div className="space-y-6 text-center xl:space-y-8">
              <h2 className="text-element-high-em text-5.5xl md:text-7xl">
                Scale your
                <br />
                <span className="font-martina italic">patent expertise</span>
              </h2>
              <p className="text-element-high-em max-w-[20.5625rem] text-center md:max-w-[30rem] xl:max-w-[35rem] xl:text-lg">
                Engineered for patents, &AI executes litigation-grade work at
                machine scale. You set strategy; &AI delivers the work.
              </p>
            </div>

            <Button href="/book-demo">Book demo</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
