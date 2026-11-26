/**
 * The approved Editorial Overprint artwork, rendered as native SVG geometry.
 * Keep these paths and colors in sync with public/brand/editorial-overprint.svg.
 * The homepage renders this decorative component once; IDs are namespaced here
 * so its paint definitions cannot collide with other inline brand marks.
 */
export function EditorialOverprint({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1500"
      height="500"
      viewBox="0 0 1500 500"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="twic-overprint-bitcoin"
          fillRule="evenodd"
          d="M0 20H46C78 20 92 32 92 54C92 70 84 78 71 84C90 88 101 100 101 119C101 145 80 158 47 158H0V139H17V39H0ZM38 39V74H47C63 74 70 68 70 56C70 44 62 39 48 39ZM38 94V139H50C68 139 78 132 78 116C78 101 68 94 50 94Z"
        />
        <g id="twic-overprint-btc">
          <use href="#twic-overprint-bitcoin" />
          <path d="M25 0H35V20H25ZM48 0H58V20H48ZM25 158H35V178H25ZM48 158H58V178H48Z" />
        </g>
        <pattern id="twic-overprint-dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.75" cy="1.75" r="1.05" fill="#151515" />
          <circle cx="5.25" cy="5.25" r="1.05" fill="#151515" />
        </pattern>
        <pattern id="twic-overprint-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
          <path d="M0 0V8" stroke="#F0EFE9" strokeWidth="1.1" />
        </pattern>
        <clipPath id="twic-overprint-rules">
          <path d="M907 500V447H990V400H1118V350H1500V500Z" />
        </clipPath>
      </defs>
      <rect width="1500" height="500" fill="#151515" />
      <path d="M0 0H870L510 500H0Z" fill="#F0EFE9" />
      <path d="M310 0H890L633 238H422L310 146Z" fill="url(#twic-overprint-dots)" />
      <g transform="translate(-45 -35) rotate(-9 230 250) scale(3.65)" fill="#E8E655">
        <use href="#twic-overprint-btc" transform="translate(2.1 0)" />
      </g>
      <g transform="translate(-45 -35) rotate(-9 230 250) scale(3.65)" fill="#151515">
        <use href="#twic-overprint-btc" />
      </g>
      <path d="M197 500L834 0H1034L418 500Z" fill="#E8E655" />
      <path d="M340 500V438H407V385H474V332H541V279H608V226H675V500Z" fill="#151515" />
      <path d="M817 -88L1080 267L817 366L554 267Z" fill="#F0EFE9" />
      <path d="M817 -88V366L1080 267Z" fill="#A5AAA7" />
      <path d="M554 301L817 647L1080 301L817 408Z" fill="#F0EFE9" />
      <path d="M817 408V647L1080 301Z" fill="#A5AAA7" />
      <path d="M1032 -35H1540V313H1095L1016 234Z" fill="#E8E655" />
      <g transform="translate(1084 9) rotate(-7 200 160)" fill="#151515">
        <path d="M40 0H456L416 80H0Z M0 118H416L456 198H40Z M40 236H456L416 316H0Z" />
      </g>
      <g clipPath="url(#twic-overprint-rules)">
        <rect x="880" y="330" width="650" height="190" fill="url(#twic-overprint-hatch)" />
      </g>
      <path d="M1424 391H1500V500H1387V463H1424Z" fill="#F0EFE9" />
    </svg>
  );
}
