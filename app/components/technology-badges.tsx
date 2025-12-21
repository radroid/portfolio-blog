'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/app/components/ui/hover-card'

// Technology icon components
export function NextJSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <mask height="180" id="nextjs-mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" fill="black" r="90"></circle>
      </mask>
      <g mask="url(#nextjs-mask0)">
        <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs-paint0_linear)"></path>
        <rect fill="url(#nextjs-paint1_linear)" height="72" width="12" x="115" y="54"></rect>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="nextjs-paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="nextjs-paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-60 12 12)"/>
    </svg>
  )
}

export function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="#3178C6"/>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25a1.4 1.4 0 0 0 .466-.534c.093-.23.14-.483.14-.757 0-.263-.04-.498-.123-.704a1.715 1.715 0 0 0-.382-.543 3.316 3.316 0 0 0-.623-.444 6.96 6.96 0 0 0-.9-.493 8.277 8.277 0 0 1-1.006-.616 4.212 4.212 0 0 1-.783-.753 2.378 2.378 0 0 1-.436-.963c-.09-.4-.135-.856-.135-1.368 0-.554.11-1.03.33-1.43.22-.399.523-.73.91-.993.388-.263.84-.456 1.356-.58a6.78 6.78 0 0 1 1.65-.2zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="white"/>
    </svg>
  )
}

export function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 19.15 9.53 20 12 20c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C11.61 13.15 10.47 12 7 12z" fill="#06B6D4"/>
    </svg>
  )
}

export function NodeJSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.664-2.604,2.664c-0.508,0-0.909,0-2.026-0.551L2.28,19.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-3.244c-1.223-0.379-1.865-0.621-1.865-1.321c0-0.657,0.533-1.111,1.432-1.111 c0.915,0,1.896,0.295,2.698,0.805c0.092,0.058,0.197,0.09,0.301,0.09c0.147,0,0.258-0.051,0.354-0.15l0.83-0.813 c0.177-0.177,0.138-0.301-0.003-0.44c-0.628-0.611-1.46-1.104-2.421-1.404c-0.69-0.216-1.426-0.328-2.168-0.328 c-2.387,0-4.095,1.278-4.095,3.266c0,1.855,1.195,2.504,3.65,3.269c1.304,0.414,1.932,0.682,1.932,1.343 c0,0.784-0.641,1.216-1.613,1.216c-1.243,0-2.056-0.36-2.863-0.984c-0.092-0.071-0.221-0.105-0.318-0.105 c-0.129,0-0.242,0.055-0.338,0.15l-0.788,0.764c-0.18,0.18-0.141,0.33,0,0.471c0.915,0.984,2.247,1.5,3.69,1.5 c2.519,0,4.297-1.244,4.297-3.325H19.099z" fill="#339933"/>
    </svg>
  )
}

export function PostgreSQLIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5597 15.5332c-.3047 2.1738-1.9512 3.5663-4.2187 4.2188-1.9512.5437-4.2187.8699-6.3412.8699-2.1738 0-4.39-.3262-6.3412-.8699-2.2675-.6525-3.914-2.045-4.2187-4.2188-.0437-.3047-.0437-.6525-.0437-1.0002 0-2.1738.3047-4.3475 1.3047-6.0862.8699-1.5212 2.1738-2.6087 4.2187-3.0862 1.7387-.4349 3.5212-.6525 5.3037-.6525 1.7825 0 3.565-.2176 5.3037-.6525 2.045-.4775 3.3487-1.565 4.2187-3.0862 1-1.7387 1.3047-3.9125 1.3047-6.0862 0-.3477 0-.6955.0437-1.0002.3047-2.1738 1.9512-3.5663 4.2187-4.2188C18.6087.2176 20.875.5437 23.0437.5437c2.1738 0 4.39-.3262 6.3412-.8699 2.2675-.6525 3.914-2.045 4.2187-4.2188.0437-.3047.0437-.6525.0437-1.0002 0-2.1738-.3047-4.3475-1.3047-6.0862-.8699-1.5212-2.1738-2.6087-4.2187-3.0862-1.7387-.4349-3.5212-.6525-5.3037-.6525-1.7825 0-3.565.2176-5.3037.6525-2.045.4775-3.3487 1.565-4.2187 3.0862-1 1.7387-1.3047 3.9125-1.3047 6.0862 0 .3477 0 .6955-.0437 1.0002-.3047 2.1738-1.9512 3.5663-4.2187 4.2188-1.9512.5437-4.2187.8699-6.3412.8699-2.1738 0-4.39-.3262-6.3412-.8699-2.2675-.6525-3.914-2.045-4.2187-4.2188-.0437-.3047-.0437-.6525-.0437-1.0002 0-2.1738.3047-4.3475 1.3047-6.0862.8699-1.5212 2.1738-2.6087 4.2187-3.0862 1.7387-.4349 3.5212-.6525 5.3037-.6525 1.7825 0 3.565.2176 5.3037.6525 2.045.4775 3.3487 1.565 4.2187 3.0862 1 1.7387 1.3047 3.9125 1.3047 6.0862 0 .3477 0 .6955-.0437 1.0002z" fill="#336791"/>
    </svg>
  )
}

export function ExpressIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 18.588V21.6h-4.088l-4.088-4.088v4.088H11.76V2.4h3.984v9.984l3.984-3.984h4.272l-4.272 4.272 4.272 4.272zm-8.088-4.272l-1.536-1.536-1.536 1.536h3.072z"/>
    </svg>
  )
}

export function ConvexIcon({ className }: { className?: string }) {
  return (
    <svg width="144" height="144" viewBox="0 0 144 144" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M90.4762 112.348C111.321 110.089 130.976 99.246 141.807 81.1456C136.686 125.903 86.5295 154.197 45.6046 136.819C41.8281 135.214 38.588 132.574 36.3553 129.15C27.1553 115.056 24.13 97.1188 28.4698 80.8406C40.8908 101.754 66.1275 114.581 90.4762 112.348Z" fill="#F5B01A"/>
      <path d="M27.7121 67.7151C19.2585 86.7701 18.8877 109.096 29.2574 127.462C-7.21311 100.681 -6.80889 43.3974 28.8086 16.8877C32.0949 14.4428 36.0177 12.9778 40.1204 12.7676C57.0101 11.9015 74.1656 18.2706 86.1919 30.141C61.743 30.367 37.9402 45.6574 27.7121 67.7151Z" fill="#8D2576"/>
      <path d="M97.9799 35.9923C85.648 19.2052 66.3361 7.78991 45.1878 7.44222C86.0729 -10.6724 136.352 18.6963 141.835 62.1021C142.344 66.1385 141.677 70.2365 139.842 73.8714C132.2 89.0054 118.035 100.749 101.486 105.097C113.636 83.15 112.126 56.3337 97.9799 35.9923Z" fill="#EE342F"/>
    </svg>
  )
}

export function ClerkIcon({ className }: { className?: string }) {
  return (
    <svg width="110" height="32" viewBox="0 0 110 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16.0003" cy="16" rx="4.99998" ry="5" fill="#9785FF" style={{ fill: '#9785FF', fillOpacity: 1 }} />
      <path d="M25.0091 27.8382C25.4345 28.2636 25.3918 28.9679 24.8919 29.3027C22.3488 31.0062 19.2899 31.9997 15.9991 31.9997C12.7082 31.9997 9.64935 31.0062 7.10616 29.3027C6.60633 28.9679 6.56361 28.2636 6.98901 27.8382L10.6429 24.1843C10.9732 23.854 11.4855 23.8019 11.9012 24.0148C13.1303 24.6445 14.5232 24.9997 15.9991 24.9997C17.4749 24.9997 18.8678 24.6445 20.0969 24.0148C20.5126 23.8019 21.0249 23.854 21.3552 24.1843L25.0091 27.8382Z" fill="#9785FF" style={{ fill: '#9785FF', fillOpacity: 1 }} />
      <path opacity="0.6" d="M24.8928 2.697C25.3926 3.0318 25.4353 3.73609 25.0099 4.16149L21.356 7.81544C21.0258 8.14569 20.5134 8.19785 20.0978 7.98491C18.8687 7.35525 17.4758 7 15.9999 7C11.0294 7 6.99997 11.0294 6.99997 16C6.99997 17.4759 7.35522 18.8688 7.98488 20.0979C8.19782 20.5136 8.14565 21.0259 7.81541 21.3561L4.16147 25.0101C3.73607 25.4355 3.03178 25.3927 2.69698 24.8929C0.993522 22.3497 0 19.2909 0 16C0 7.16344 7.16341 0 15.9999 0C19.2908 0 22.3496 0.993529 24.8928 2.697Z" fill="#9785FF" style={{ fill: '#9785FF', fillOpacity: 1 }} />
      <path fillRule="evenodd" clipRule="evenodd" d="M100.405 21.2489C100.421 21.2324 100.442 21.2231 100.465 21.2231C100.493 21.2231 100.518 21.2375 100.533 21.2613L105.275 28.8821C105.321 28.9554 105.401 29 105.487 29L109.75 29C109.946 29 110.066 28.7848 109.963 28.6183L103.457 18.1226C103.399 18.0278 103.41 17.9056 103.485 17.823L109.752 10.908C109.898 10.7473 109.784 10.4901 109.567 10.4901H105.12C105.05 10.4901 104.983 10.5194 104.936 10.5711L97.6842 18.4755C97.5301 18.6435 97.25 18.5345 97.25 18.3065V3.25C97.25 3.11193 97.138 3 97 3H93.25C93.1119 3 93 3.11193 93 3.25V28.75C93 28.8881 93.1119 29 93.25 29L97 29C97.138 29 97.25 28.8881 97.25 28.75V24.7373C97.25 24.6741 97.2739 24.6132 97.317 24.567L100.405 21.2489ZM52.2502 3.25C52.2502 3.11193 52.3621 3 52.5002 3H56.2501C56.3882 3 56.5001 3.11193 56.5001 3.25V28.75C56.5001 28.8881 56.3882 29 56.2501 29H52.5002C52.3621 29 52.2502 28.8881 52.2502 28.75V3.25ZM46.958 23.5912C46.8584 23.5052 46.7094 23.5117 46.6137 23.602C46.0293 24.1537 45.3447 24.595 44.5947 24.9028C43.7719 25.2407 42.8873 25.4108 41.995 25.4028C41.2415 25.4252 40.4913 25.2963 39.7906 25.0241C39.09 24.7519 38.4537 24.3422 37.9209 23.8202C36.9531 22.8322 36.396 21.4215 36.396 19.7399C36.396 16.3735 38.6356 14.0709 41.995 14.0709C42.896 14.0585 43.7888 14.241 44.6094 14.6052C45.3533 14.9355 46.0214 15.4077 46.5748 15.9934C46.6694 16.0936 46.8266 16.1052 46.9309 16.015L49.4625 13.8244C49.5659 13.7349 49.5785 13.5786 49.4873 13.4767C47.583 11.3488 44.5997 10.25 41.7627 10.25C36.0506 10.25 32.0003 14.1031 32.0003 19.7719C32.0003 22.5756 33.0069 24.9365 34.7044 26.6036C36.402 28.2707 38.8203 29.25 41.6108 29.25C45.1097 29.25 47.9259 27.9082 49.577 26.187C49.6739 26.086 49.6632 25.9252 49.5572 25.8338L46.958 23.5912ZM77.1575 20.9877C77.1436 21.1129 77.0371 21.2066 76.9111 21.2066H63.7746C63.615 21.2066 63.4961 21.3546 63.5377 21.5087C64.1913 23.9314 66.1398 25.3973 68.7994 25.3973C69.6959 25.4161 70.5846 25.2317 71.3968 24.8582C72.1536 24.5102 72.8249 24.0068 73.3659 23.3828C73.4314 23.3073 73.5454 23.2961 73.622 23.3602L76.2631 25.6596C76.3641 25.7476 76.3782 25.8999 76.2915 26.0021C74.697 27.8832 72.1135 29.25 68.5683 29.25C63.1142 29.25 59.0001 25.4731 59.0001 19.7348C59.0001 16.9197 59.9693 14.559 61.5847 12.8921C62.4374 12.0349 63.4597 11.3584 64.5882 10.9043C65.7168 10.4502 66.9281 10.2281 68.1473 10.2517C73.6753 10.2517 77.25 14.1394 77.25 19.5075C77.2431 20.0021 77.2123 20.4961 77.1575 20.9877ZM63.6166 17.5038C63.5702 17.6581 63.6894 17.8084 63.8505 17.8084H72.5852C72.7467 17.8084 72.8659 17.6572 72.8211 17.5021C72.2257 15.4416 70.7153 14.0666 68.3696 14.0666C67.6796 14.0447 66.993 14.1696 66.3565 14.4326C65.7203 14.6957 65.149 15.0908 64.6823 15.5907C64.1914 16.1473 63.8285 16.7998 63.6166 17.5038ZM90.2473 10.2527C90.3864 10.2512 90.5 10.3636 90.5 10.5027V14.7013C90.5 14.8469 90.3762 14.9615 90.2311 14.9508C89.8258 14.9207 89.4427 14.8952 89.1916 14.8952C85.9204 14.8952 84 17.1975 84 20.2195V28.75C84 28.8881 83.8881 29 83.75 29H80C79.862 29 79.75 28.8881 79.75 28.75V10.7623C79.75 10.6242 79.862 10.5123 80 10.5123H83.75C83.8881 10.5123 84 10.6242 84 10.7623V13.287C84 13.3013 84.0116 13.3128 84.0258 13.3128C84.034 13.3128 84.0416 13.3089 84.0465 13.3024C85.5124 11.3448 87.676 10.2559 89.9617 10.2559L90.2473 10.2527Z" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
    </svg>
  )
}

export function StripeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 3.45.491 4.21.944l.89-5.494C17.252.975 15.553.514 13.531.514c-3.974 0-6.286 2.067-6.286 5.02 0 2.515 1.884 3.861 4.35 4.69 2.173.806 3.356 1.426 3.356 2.409 0 .98-.84 1.545-2.04 1.545-1.767 0-3.45-.584-4.35-1.153l-.89 5.494c.935.49 2.665.951 4.69.951 4.2 0 6.59-2.067 6.59-5.02.01-2.52-1.88-3.861-4.35-4.69z" fill="#635BFF"/>
    </svg>
  )
}

export function FramerMotionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0l16 12-8 12L4 12l8-12z"/>
    </svg>
  )
}

export function ThreeJSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M.38 0a.268.268 0 0 0-.256.332l3.85 14.168a.268.268 0 0 0 .01.04l2.027 7.83a.268.268 0 0 0 .255.201h13.722a.268.268 0 0 0 .255-.332L15.802 8.332a.268.268 0 0 0-.01-.04L13.765.462a.268.268 0 0 0-.255-.201H.38zm1.487 1.333h11.64l1.477 5.704-6.64 2.388-1.477-5.704zm-.178 7.035l6.555 2.388 1.477 5.704-6.555-2.388-1.477-5.704z"/>
    </svg>
  )
}

export function AFrameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.24zm-1.24-1.13l-5.64-16.5-5.64 16.5h11.28z"/>
    </svg>
  )
}

export function SandpackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8h8M8 12h8M8 16h5"/>
    </svg>
  )
}

export function ShadcnIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="8" r="1.5"/>
      <circle cx="16" cy="8" r="1.5"/>
      <circle cx="8" cy="16" r="1.5"/>
      <circle cx="16" cy="16" r="1.5"/>
    </svg>
  )
}

export function RadixUIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}

// Technology name to icon mapping
const technologyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Next.js': NextJSIcon,
  'Next.js 15': NextJSIcon,
  'Next.js 16': NextJSIcon,
  'React': ReactIcon,
  'React 19': ReactIcon,
  'TypeScript': TypeScriptIcon,
  'TypeScript 5': TypeScriptIcon,
  'TypeScript 5.9': TypeScriptIcon,
  'Tailwind CSS': TailwindIcon,
  'Tailwind CSS 4': TailwindIcon,
  'Tailwind CSS 4.1': TailwindIcon,
  'Tailwind CSS v4': TailwindIcon,
  'Node.js': NodeJSIcon,
  'PostgreSQL': PostgreSQLIcon,
  'Express.js': ExpressIcon,
  'Express': ExpressIcon,
  'Convex': ConvexIcon,
  'Clerk': ClerkIcon,
  'Stripe': StripeIcon,
  'Framer Motion': FramerMotionIcon,
  'Motion': FramerMotionIcon,
  'Motion One': FramerMotionIcon,
  'Three.js': ThreeJSIcon,
  'A-Frame': AFrameIcon,
  'AR.js': AFrameIcon,
  'Sandpack': SandpackIcon,
  'Shadcn UI': ShadcnIcon,
  'shadcn/ui': ShadcnIcon,
  'Radix UI': RadixUIIcon,
}

interface TechnologyBadgesProps {
  technologies: string[]
  mainCount?: number
}

export function TechnologyBadges({ technologies, mainCount = 4 }: TechnologyBadgesProps) {
  const mainTechs = technologies.slice(0, mainCount)
  const moreTechs = technologies.slice(mainCount)

  const getIcon = (tech: string) => {
    // Try exact match first
    if (technologyIcons[tech]) {
      return technologyIcons[tech]
    }
    // Try partial match
    for (const [key, Icon] of Object.entries(technologyIcons)) {
      if (tech.includes(key) || key.includes(tech)) {
        return Icon
      }
    }
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mt-2">
      {mainTechs.map((tech) => {
        const Icon = getIcon(tech)
        return (
          <div
            key={tech}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors"
            style={{
              backgroundColor: 'rgba(var(--muted), 0.6)',
              color: 'rgb(var(--muted-foreground))',
            }}
            title={tech}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span>{tech}</span>
          </div>
        )
      })}
      {moreTechs.length > 0 && (
        <HoverCard>
          <HoverCardTrigger asChild>
            <button
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer"
              style={{
                backgroundColor: 'rgba(var(--muted), 0.6)',
                color: 'rgb(var(--muted-foreground))',
              }}
            >
              <span>+{moreTechs.length} more</span>
            </button>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-auto max-w-xs"
            style={{
              backgroundColor: 'rgb(var(--popover))',
              color: 'rgb(var(--popover-foreground))',
            }}
          >
            <div className="flex flex-wrap gap-2">
              {moreTechs.map((tech) => {
                const Icon = getIcon(tech)
                return (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(var(--muted), 0.6)',
                      color: 'rgb(var(--muted-foreground))',
                    }}
                    title={tech}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{tech}</span>
                  </div>
                )
              })}
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  )
}

