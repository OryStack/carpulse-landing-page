import { Container } from '@/components/landing/Container';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Container>
          <article className="prose prose-gray mx-auto max-w-3xl prose-headings:text-[#1A1A1A] prose-h1:text-[28px] prose-h1:sm:text-4xl prose-h2:text-[20px] prose-h2:sm:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-[16px] prose-h3:sm:text-lg prose-p:text-[14px] prose-p:sm:text-[15px] prose-p:leading-relaxed prose-p:text-[#374151] prose-li:text-[14px] prose-li:sm:text-[15px] prose-li:text-[#374151] prose-a:text-[#FE6C0E] prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </Container>
      </main>
    </>
  );
}