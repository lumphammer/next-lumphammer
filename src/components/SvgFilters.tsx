export default function SvgFilters() {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 600 200"
      style={{ position: "absolute", top: 0, left: 0 }}
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

        {/* EXTRUDEL 1 */}
        <filter id="extrudel">
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
          <feFlood floodColor="#400" result="flood"></feFlood>
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

        {/* EXTRUDEL 2 */}
        <filter id="extrudel2">
          <feConvolveMatrix
            in="SourceAlpha"
            result="extrude"
            order="3,3"
            divisor="1"
            kernelMatrix={`
              1,0,0,
              0,1,0,
              0,0,1
              `}
          >
            {" "}
          </feConvolveMatrix>
          <feOffset in="extrude" dx="2" dy="2" result="extrude-offset" />
          <feFlood floodColor="#400" result="flood"></feFlood>
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

        {/* EDITING VINTAGE */}
        <filter
          id="editing-vintage"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feConvolveMatrix
            in="SourceGraphic"
            result="extrude"
            order="9,9"
            divisor="1"
            kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
          >
            {" "}
          </feConvolveMatrix>
          <feFlood floodColor="#900" result="flood-extrude"></feFlood>
          <feComposite
            operator="in"
            in="flood-extrude"
            in2="extrude"
            result="extrude-color"
          ></feComposite>
          <feOffset
            dx="5"
            dy="5"
            in="extrude-color"
            result="extrude-offset"
          ></feOffset>
          <feColorMatrix
            in="SourceGraphic"
            result="stroke"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 "
          ></feColorMatrix>
          <feColorMatrix
            in="SourceGraphic"
            result="fill"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 "
          ></feColorMatrix>
          <feConvolveMatrix
            in="stroke"
            result="inner-shadow"
            order="5,5"
            divisor="1"
            kernelMatrix="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 "
          ></feConvolveMatrix>
          <feOffset dx="1" dy="1" in="inner-shadow" result="offset"></feOffset>
          <feComposite
            operator="in"
            in="offset"
            in2="SourceAlpha"
            result="comp"
          ></feComposite>
          <feFlood floodColor="#000" result="flood3"></feFlood>
          <feComposite
            operator="in"
            in="flood3"
            in2="comp"
            result="comp2"
          ></feComposite>
          <feColorMatrix
            in="comp2"
            result="comp3"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0 "
          ></feColorMatrix>
          <feFlood floodColor="#f00" result="flood1"></feFlood>
          <feComposite
            operator="in"
            in="flood1"
            in2="fill"
            result="fill2"
          ></feComposite>
          <feFlood floodColor="#fff" result="flood2"></feFlood>
          <feComposite
            operator="in"
            in="flood2"
            in2="stroke"
            result="stroke2"
          ></feComposite>
          <feMerge result="obj">
            <feMergeNode in="extrude-offset"></feMergeNode>
            <feMergeNode in="fill2"></feMergeNode>
            <feMergeNode in="comp3"></feMergeNode>
          </feMerge>
          <feConvolveMatrix
            in="SourceAlpha"
            result="shadow"
            order="9,9"
            divisor="1"
            kernelMatrix="1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1"
          ></feConvolveMatrix>
          <feOffset
            dx="15"
            dy="15"
            in="shadow"
            result="shadow-offset"
          ></feOffset>
          <feFlood floodColor="#444" result="flood-shadow"></feFlood>
          <feComposite
            operator="in"
            in="flood-shadow"
            in2="shadow-offset"
            result="shadow-color"
          ></feComposite>
          <feMerge>
            <feMergeNode in="shadow-color"></feMergeNode>
            <feMergeNode in="obj"></feMergeNode>
          </feMerge>
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
