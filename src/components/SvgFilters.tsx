export default function SvgFilters() {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 600 200"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <defs>
        <filter id="soft-focus">
          <feGaussianBlur
            in="SourceGraphic"
            result="blurOut"
            stdDeviation="18"
          />

          <feComposite
            operator="over"
            in="SourceGraphic"
            in2="blurOut"
            result="final"
          />
        </filter>
        <filter id="solid-stroke">
          <feMorphology
            operator="erode"
            radius="1"
            in="SourceAlpha"
            result="eroded"
          />
          <feComposite
            in="SourceAlpha"
            in2="eroded"
            operator="xor"
            result="stroke"
          />

          {/* <feFlood floodColor="white" result="flood" /> */}
          <feComposite
            in="SourceGraphic"
            in2="stroke"
            operator="in"
            result="stroke"
          />
          <feComposite
            in="stroke"
            in2="SourceGraphic"
            operator="over"
            result="final"
          />
        </filter>
        <filter id="invert">
          <feComponentTransfer>
            <feFuncR type="linear" slope="0" intercept="1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
