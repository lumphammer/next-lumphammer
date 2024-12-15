export default function SvgFilters() {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 600 200"
      style={{ position: "absolute", top: 0, left: 0 }}
      aria-hidden={true}
    >
      <defs>
        {/* SOFT FOCUS */}
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

        {/* SOLID STROKE 2*/}
        <filter id="solid-stroke-2">
          <feMorphology
            operator="dilate"
            radius="2"
            in="SourceAlpha"
            result="expanded"
          />
          <feComposite
            in="expanded"
            in2="SourceAlpha"
            operator="out"
            result="stroke"
          />

          <feFlood floodColor="white" result="flood" />
          <feComposite in="floor" in2="stroke" operator="in" result="stroke" />
          <feComposite
            in="stroke"
            in2="SourceGraphic"
            operator="over"
            result="final"
          />
        </filter>

        {/* SOLID STROKE 1*/}
        <filter id="solid-stroke-1">
          <feMorphology
            operator="dilate"
            radius="1"
            in="SourceAlpha"
            result="expanded"
          />
          <feComposite
            in="expanded"
            operator="out"
            in2="SourceAlpha"
            result="stroke"
          />

          <feFlood floodColor="#fff7" result="flood" />
          <feComposite in="flood" in2="stroke" operator="in" result="stroke" />
          <feComposite
            in="stroke"
            in2="SourceGraphic"
            operator="over"
            result="final"
          />
        </filter>

        {/* INVERT */}
        <filter id="invert">
          <feComponentTransfer>
            <feFuncR type="linear" slope="0" intercept="1" />
          </feComponentTransfer>
        </filter>

        {/* EXTRUDE 5 */}
        <filter id="extrude-5">
          <feConvolveMatrix
            in="SourceAlpha"
            result="extrude"
            order="5,5"
            divisor="1"
            kernelMatrix={`
              1,0,0,0,0,
              0,1,0,0,0,
              0,0,1,0,0,
              0,0,0,1,0,
              0,0,0,0,1
              `}
          >
            {" "}
          </feConvolveMatrix>
          <feOffset in="extrude" dx="3" dy="3" result="extrude-offset" />
          <feFlood floodColor="#04373777" result="flood"></feFlood>
          <feComposite
            in="flood"
            operator="in"
            in2="extrude-offset"
            result="flood-in-extrude"
          />
          <feComposite
            in="SourceGraphic"
            operator="over"
            in2="flood-in-extrude"
            result="final"
          />
        </filter>

        <filter id="inner-shadow">
          <feOffset in="SourceGraphic" dx="2" dy="2" result="offset1" />
          <feComposite
            in="SourceGraphic"
            in2="offset1"
            operator="out"
            result="inner-shadow"
          />
          {/* make it black */}
          <feColorMatrix
            in="inner-shadow"
            result="inner-shadow-color"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 "
          />
          <feGaussianBlur result="blurOut" stdDeviation="1" />
          <feComposite
            in="offsetBlur"
            in2="SourceGraphic"
            operator="in"
            result="inner-shadow"
          />

          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="inner-shadow" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
