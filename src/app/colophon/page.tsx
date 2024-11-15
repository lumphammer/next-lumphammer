export default function Colophon() {
  return (
    <main className={"container"}>
      <h1>Colophon</h1>
      <p>
        Okay, you asked for it. Don&apos;t read on unless you care about web
        technology stacks.
      </p>

      <h2>
        <a target="_blank" href="https://nextjs.org/">
          Next.js
        </a>
      </h2>
      <p>A meta-framework for building full-stack React applications.</p>
      <h3>
        Why use a full-stack framework for a simple static site (as opposed to a
        dedicated static site builder like Gatsby?) Isn&apos;t that overkill?
      </h3>
      <p>
        Well, mainly it gives me extensibility in both directions. If I want to
        add client-side functionality, it&apos;s as simple as writing a
        component and adding <code>&quot;use client&quot;;</code> at the top. If
        I want to add server-side functionality, it&apos;s as simple as writing
        a handler function and adding <code>&quot;use server&quot;;</code> at
        the top.
      </p>
      <p>
        By contrast a static builder has no direct route to add server-side or
        client-side functionality. To add server-side functionality, you&apos;ll
        need an entire separate project to run your back-end. If you introduce
        client-side functionality, you&apos;re adding some kind of client side
        framework anyway. So why not start with a tool that&apos;s got you
        covered for everything?
      </p>
      <h3>
        But why a <em>React</em>-based framework? What about SvelteKit, Nuxt,
        SolidStart, etc?
      </h3>
      <p>
        React gets some flak because it&apos;s such a massive incumbent.
        It&apos;s the &quot;default&quot; reactive renderer for web development.
        It&apos;s also one of the oldest ones (I&apos;ve been working with it
        since 2015), so some folks really want to promote other alternatives.
        But the reality on the ground is that React has a massive ecosystem, and
        is constantly evolving. React in 2024 is as much a new framework as
        Svelte and Solid are. That&apos;s not just true of React, by the way -
        Vue and Angular, which are also senior citizens in the web framework
        space, are also constantly evolving and improving. I just mean that
        React is not the same framework it was in 2015.
      </p>
      <p>
        I think there&apos;s a problem where a lot of &mdash; shall we say
        &mdash; junior and mid-level devs spend their day job working on some
        massive corporate React project, which they hate because it&apos;s
        somebody else&apos;s code and huge corporate projects always suck to
        work on. And they blame React and the React ecosystem. Then they go home
        and work on a hobby project in something cool like Svelte or Solid,
        which they find fun because it&apos;s their code.
      </p>
      <h3>
        Okay okay, but why Next.js? There are other full-stack React frameworks,
        like Remix and TanStack Start.
      </h3>
      <p>
        Yes, and they&apos;re all perfectly valid choices. But the argument for
        Next.js is that it&apos;s the most popular, and has the largest
        ecosystem. Also &mdash; and this is more of a reason why <em>I</em>{" "}
        chose it as opposed to a reason why it&apos;s good overall &mdash; For
        the last few years I&apos;ve been working on SPAs, and I&apos;ve not
        needed to just write a good old <em>website</em> for ages. So I&apos;d
        never used Next, and it&apos;s such a huge part of the modern web
        landscape that I thought it was time I found out what all the
        hullaballoo was about. Every other full-stack framework is to some
        extent working in the shadow of Next.js.
      </p>
      <h3>
        Server-side JavaScript is dumb, JavaScript is a dumb language,
        you&apos;re dumb for using it. And TypeScript sucks too.
      </h3>
      <p>
        Congratulations for being so smart. I&apos;m sure your personal
        favourite language is lovely and much better. I wish you many years of
        happiness together.
      </p>
      <p>
        (I heard all the same arguments when I was writing Perl, then again when
        I was doing PHP, and, yawn, again when I was writing Python. I&apos;ve
        written Java and C# professionally, I was doing Rust at work until
        recently, and I still use Go. I&apos;ve written a <em>lot</em> of
        languages, and right now I&apos;m over here enjoying writing
        TypeScript.)
      </p>
      <h2>
        <a target="_blank" href="https://picocss.com/">
          PicoCSS
        </a>
      </h2>
      <p>Minimal CSS Framework for Semantic HTML.</p>
      <p>
        Fun fact: I never learned Tailwind, even though it&apos;s gigantically
        popular. The reason is that for many years I&apos;ve been working on
        hyper-specialised SPAs, and Tailwind seemed like a better fit for - dare
        I say - sites, rather than apps. Maybe I&apos;m wrong. But anyway,
        I&apos;ve dodged Tailwind thus far and frankly it looks like a hot mess
        (it&apos;s one of things where I don&apos;t get it, but a lot of very
        smart people love it to bits, so I&apos;m going to assume I&apos;m wrong
        not all of them.)
      </p>
      <p>
        So for this project I was already learning Next.js and I didn&apos;t
        need another massive learning endaevour, so I went with a minimalist
        framework that I have used before &mdash; PicoCSS &mdash; and it&apos;s
        been absolutely great so far.{" "}
      </p>
    </main>
  );
}
