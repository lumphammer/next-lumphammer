export default function Colophon() {
  return (
    <main className={"container"}>
      <h1>Colophon</h1>
      <p>
        Okay, you asked for it. Don&apos;t read on unless you care about web
        technology stacks.
      </p>

      <p>This site was made using:</p>

      <dl>
        <dt>
          <a target="_blank" href="https://nextjs.org/">
            Next.js
          </a>
        </dt>
        <dd>
          A meta-framework for building full-stack React applications. Gives me
          flexibility to add server or client-side functionality at any time if
          I want to.
        </dd>
        <dt>
          <a target="_blank" href="https://reactjs.org/">
            React
          </a>
        </dt>
        <dd>
          A JavaScript library for building user interfaces. I&apos;ve been
          using it since 2015. Many great alternatives exist, but React is
          constantly evolving.
        </dd>
        <dt>
          <a target="_blank" href="https://picocss.com/">
            PicoCSS
          </a>
        </dt>
        <dd>
          A minimal CSS framework for semantic HTML. I <em>nearly</em> went with
          Tailwind, but PicoCSS is great.
        </dd>
        <dt>
          <a target="_blank" href="https://sass-lang.com/">
            Sass
          </a>
        </dt>
        <dd>A CSS preprocessor.</dd>
        <dt>
          <a target="_blank" href="https://www.typescriptlang.org/">
            TypeScript
          </a>
        </dt>
        <dd>
          A typed superset of JavaScript that compiles to plain JavaScript.
        </dd>
        <dt>
          <a target="_blank" href="https://eslint.org/">
            ESLint
          </a>
        </dt>
        <dd>A pluggable linting utility for JavaScript and TypeScript.</dd>
        <dt>
          <a target="_blank" href="https://vercel.com/font">
            Geist Sans
          </a>
        </dt>
        <dd>
          A screen font designed by Vercel (creators of Next.js). Attractive and
          legible (I hope you agree.) At risk of becoming the &quot;oh hey,
          you&apos;re using Next&quot; font. But I like it.
        </dd>
        <dt>
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter"
          >
            SVG Filters
          </a>
        </dt>
        <dd>I&apos;m using SVG filters to create some visual effects.</dd>
        <dt>
          <a target="_blank" href="https://www.cursor.com/">
            Cursor
          </a>
        </dt>
        <dd>
          Look, I have <strong>strong</strong> opinions about the risks of AI,
          but the utility of it as &quot;very smart autocomplete&quot; is
          undeniable. Cursor is the best AI code helper I&apos;ve used.
        </dd>
      </dl>
    </main>
  );
}
