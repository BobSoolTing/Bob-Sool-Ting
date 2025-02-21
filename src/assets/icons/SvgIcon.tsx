import React from 'react';

// 검색 아이콘
export const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} width={24} height={24} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M21.7099 20.2899L17.9999 16.6099C19.44 14.8143 20.1374 12.5352 19.9487 10.2412C19.76 7.94721 18.6996 5.81269 16.9854 4.27655C15.2713 2.74041 13.0337 1.91941 10.7328 1.98237C8.43194 2.04534 6.24263 2.98747 4.61505 4.61505C2.98747 6.24263 2.04534 8.43194 1.98237 10.7328C1.91941 13.0337 2.74041 15.2713 4.27655 16.9854C5.81269 18.6996 7.94721 19.76 10.2412 19.9487C12.5352 20.1374 14.8143 19.44 16.6099 17.9999L20.2899 21.6799C20.3829 21.7736 20.4935 21.848 20.6153 21.8988C20.7372 21.9496 20.8679 21.9757 20.9999 21.9757C21.1319 21.9757 21.2626 21.9496 21.3845 21.8988C21.5063 21.848 21.6169 21.7736 21.7099 21.6799C21.8901 21.4934 21.9909 21.2442 21.9909 20.9849C21.9909 20.7256 21.8901 20.4764 21.7099 20.2899ZM10.9999 17.9999C9.61544 17.9999 8.26206 17.5894 7.11091 16.8202C5.95977 16.051 5.06256 14.9578 4.53275 13.6787C4.00293 12.3996 3.86431 10.9921 4.13441 9.63427C4.4045 8.27641 5.07119 7.02912 6.05016 6.05016C7.02912 5.07119 8.27641 4.4045 9.63427 4.13441C10.9921 3.86431 12.3996 4.00293 13.6787 4.53275C14.9578 5.06256 16.051 5.95977 16.8202 7.11091C17.5894 8.26206 17.9999 9.61544 17.9999 10.9999C17.9999 12.8564 17.2624 14.6369 15.9497 15.9497C14.6369 17.2624 12.8564 17.9999 10.9999 17.9999Z' />
  </svg>
);

// 밥술팅 아이콘
export const BobSoolTingIcon = ({ className }: { className?: string }) => (
  <svg className={className} width={24} height={24} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M19.68 6.87896C18.661 6.34349 17.4727 6.22863 16.37 6.55901C16.3163 5.43766 15.833 4.38001 15.0203 3.6054C14.2076 2.8308 13.1278 2.39868 12.005 2.39868C10.8822 2.39868 9.80246 2.8308 8.98975 3.6054C8.17704 4.38001 7.69371 5.43766 7.64001 6.55901C6.5403 6.22788 5.35539 6.33167 4.33001 6.84896C3.57491 7.24578 2.95248 7.85489 2.53947 8.60118C2.12647 9.34747 1.94096 10.1983 2.00581 11.0487C2.07067 11.8992 2.38306 12.7121 2.90446 13.3871C3.42586 14.0622 4.13346 14.5699 4.94001 14.8476C4.4252 15.5801 4.14611 16.4521 4.14001 17.3472C4.14446 17.5986 4.16786 17.8493 4.21001 18.0971C4.37842 19.1125 4.90232 20.035 5.68816 20.6998C6.474 21.3646 7.4706 21.7285 8.50001 21.7265C8.7131 21.7411 8.92693 21.7411 9.14001 21.7265C10.283 21.5465 11.3099 20.9254 12 19.9968C12.6973 20.9104 13.7232 21.5165 14.86 21.6865C15.0731 21.7011 15.2869 21.7011 15.5 21.6865C16.2982 21.6856 17.0807 21.4656 17.7625 21.0506C18.4442 20.6356 18.9989 20.0414 19.3661 19.3329C19.7333 18.6244 19.899 17.8286 19.845 17.0324C19.791 16.2363 19.5195 15.4702 19.06 14.8176C19.8705 14.5447 20.5828 14.0394 21.1083 13.3648C21.6337 12.6901 21.9491 11.8758 22.0152 11.0233C22.0813 10.1707 21.8951 9.31759 21.4799 8.57004C21.0647 7.82248 20.4388 7.21352 19.68 6.81897V6.87896ZM10.34 4.93928C10.7868 4.5115 11.3814 4.27271 12 4.27271C12.6186 4.27271 13.2133 4.5115 13.66 4.93928C14.0011 5.28081 14.2327 5.71617 14.3253 6.18984C14.4179 6.66351 14.3673 7.15403 14.18 7.59884L13.92 8.18874L13.26 8.76865C12.8542 8.62938 12.429 8.55515 12 8.54868C11.4456 8.54921 10.8973 8.66497 10.39 8.88863L9.83001 7.59884C9.63594 7.15599 9.58079 6.6647 9.67185 6.18985C9.7629 5.71501 9.99588 5.27895 10.34 4.93928ZM4.24001 11.7781C4.01677 11.287 3.96784 10.7344 4.1013 10.2117C4.23477 9.68892 4.54264 9.22738 4.97402 8.90331C5.40541 8.57924 5.93448 8.41205 6.47378 8.42938C7.01308 8.44671 7.53033 8.64751 7.94001 8.99861L8.43001 9.42854L8.78001 10.2284C8.27906 10.8986 8.00573 11.7114 8.00001 12.548C7.98815 12.6978 7.98815 12.8482 8.00001 12.9979H7.45001L6.61001 13.0779C6.12956 13.1286 5.64509 13.0313 5.2215 12.799C4.79792 12.5667 4.45546 12.2105 4.24001 11.7781ZM10.84 17.8571C10.7196 18.3909 10.419 18.8669 9.98863 19.2049C9.55831 19.5429 9.02462 19.7223 8.47746 19.7129C7.9303 19.7035 7.40309 19.5059 6.98463 19.1533C6.56616 18.8007 6.282 18.3147 6.18001 17.7772C6.17043 17.6373 6.17043 17.497 6.18001 17.3572C6.18364 16.9508 6.29353 16.5525 6.49878 16.2017C6.70402 15.8509 6.99748 15.5599 7.35001 15.3576L7.86001 14.9976L8.77001 14.8976C9.34357 15.6954 10.1908 16.2542 11.15 16.4674L10.84 17.8571ZM12 14.5477C11.6045 14.5477 11.2178 14.4304 10.8889 14.2107C10.56 13.991 10.3036 13.6787 10.1523 13.3133C10.0009 12.9479 9.96127 12.5458 10.0384 12.1579C10.1156 11.77 10.3061 11.4137 10.5858 11.134C10.8655 10.8544 11.2219 10.6639 11.6098 10.5868C11.9978 10.5096 12.3999 10.5492 12.7654 10.7006C13.1308 10.8519 13.4432 11.1082 13.663 11.4371C13.8827 11.7659 14 12.1525 14 12.548C14 13.0784 13.7893 13.587 13.4142 13.962C13.0392 14.337 12.5304 14.5477 12 14.5477ZM17.82 17.7672C17.7168 18.3772 17.3782 18.9224 16.8769 19.2852C16.3756 19.648 15.7519 19.7994 15.14 19.7068C14.6579 19.6389 14.208 19.4254 13.8506 19.0948C13.4932 18.7643 13.2453 18.3324 13.14 17.8571L13 17.2572L13.21 16.3374C14.1325 16.037 14.9144 15.4116 15.41 14.5777L15.91 14.8776H16L16.66 15.2676C17.0888 15.5124 17.4309 15.8845 17.6387 16.3324C17.8465 16.7803 17.9099 17.2817 17.82 17.7672ZM19.76 11.7682C19.5633 12.1656 19.2599 12.5004 18.8838 12.7353C18.5076 12.9701 18.0735 13.0957 17.63 13.0979H17.39L16.75 12.9979L16 12.588C15.9986 11.6159 15.6431 10.6775 15 9.94845L15.43 9.57851L16.06 8.99861C16.4709 8.63341 16.9959 8.42237 17.5453 8.40164C18.0946 8.3809 18.6341 8.55175 19.0713 8.88493C19.5085 9.21811 19.8163 9.6929 19.942 10.228C20.0676 10.7631 20.0033 11.3252 19.76 11.8181V11.7682Z' />
  </svg>
);

// 마이페이지 아이콘
export const MypageIcon = ({ className }: { className?: string }) => (
  <svg className={className} width={24} height={24} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M15.71 12.7099C16.6904 11.9385 17.406 10.8808 17.7572 9.68382C18.1085 8.48684 18.0779 7.21015 17.6698 6.03135C17.2617 4.85255 16.4963 3.83027 15.4801 3.10674C14.4639 2.3832 13.2474 1.99438 12 1.99438C10.7525 1.99438 9.53611 2.3832 8.51993 3.10674C7.50374 3.83027 6.73834 4.85255 6.33021 6.03135C5.92208 7.21015 5.89151 8.48684 6.24276 9.68382C6.59401 10.8808 7.3096 11.9385 8.29 12.7099C6.61007 13.3829 5.14428 14.4992 4.04889 15.9398C2.95349 17.3804 2.26956 19.0912 2.07 20.8899C2.05555 21.0212 2.06711 21.1541 2.10402 21.2809C2.14093 21.4078 2.20246 21.5261 2.28511 21.6292C2.45202 21.8374 2.69478 21.9707 2.96 21.9999C3.22521 22.0291 3.49116 21.9517 3.69932 21.7848C3.90749 21.6179 4.04082 21.3751 4.07 21.1099C4.28958 19.1551 5.22168 17.3497 6.68822 16.0387C8.15475 14.7277 10.0529 14.0029 12.02 14.0029C13.9871 14.0029 15.8852 14.7277 17.3518 16.0387C18.8183 17.3497 19.7504 19.1551 19.97 21.1099C19.9972 21.3556 20.1144 21.5825 20.2991 21.7469C20.4838 21.9113 20.7228 22.0014 20.97 21.9999H21.08C21.3421 21.9697 21.5817 21.8372 21.7466 21.6311C21.9114 21.4251 21.9881 21.1622 21.96 20.8999C21.7595 19.0961 21.0719 17.3809 19.9708 15.9381C18.8698 14.4953 17.3969 13.3794 15.71 12.7099ZM12 11.9999C11.2089 11.9999 10.4355 11.7653 9.77772 11.3258C9.11992 10.8862 8.60723 10.2615 8.30448 9.53061C8.00173 8.79971 7.92251 7.99544 8.07686 7.21952C8.2312 6.4436 8.61216 5.73086 9.17157 5.17145C9.73098 4.61204 10.4437 4.23108 11.2196 4.07674C11.9956 3.9224 12.7998 4.00161 13.5307 4.30436C14.2616 4.60711 14.8863 5.1198 15.3259 5.7776C15.7654 6.4354 16 7.20876 16 7.99988C16 9.06075 15.5786 10.0782 14.8284 10.8283C14.0783 11.5785 13.0609 11.9999 12 11.9999Z' />
  </svg>
);

// 상세페이지 - 장소 아이콘
export const PlaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M8 1.33337C9.5913 1.33337 11.1174 1.96551 12.2426 3.09073C13.3679 4.21595 14 5.74208 14 7.33337C14 9.38271 12.8827 11.06 11.7053 12.2634C11.117 12.858 10.4752 13.3971 9.788 13.874L9.504 14.0674L9.37067 14.156L9.11933 14.316L8.89533 14.4527L8.618 14.614C8.42967 14.7212 8.2167 14.7776 8 14.7776C7.7833 14.7776 7.57033 14.7212 7.382 14.614L7.10467 14.4527L6.758 14.2394L6.63 14.156L6.35667 13.974C5.61532 13.4723 4.92471 12.8993 4.29467 12.2634C3.11733 11.0594 2 9.38271 2 7.33337C2 5.74208 2.63214 4.21595 3.75736 3.09073C4.88258 1.96551 6.4087 1.33337 8 1.33337ZM8 2.66671C6.76232 2.66671 5.57534 3.15837 4.70017 4.03354C3.825 4.90871 3.33333 6.0957 3.33333 7.33337C3.33333 8.88137 4.18133 10.24 5.24733 11.3307C5.70575 11.7946 6.20116 12.2205 6.72867 12.604L7.034 12.8214C7.13267 12.89 7.22733 12.954 7.31867 13.0134L7.57867 13.18L7.80733 13.3194L8 13.432L8.30333 13.2527L8.548 13.0994C8.678 13.0167 8.818 12.924 8.966 12.8214L9.27133 12.604C9.79884 12.2205 10.2943 11.7946 10.7527 11.3307C11.8187 10.2407 12.6667 8.88137 12.6667 7.33337C12.6667 6.0957 12.175 4.90871 11.2998 4.03354C10.4247 3.15837 9.23768 2.66671 8 2.66671ZM8 4.66671C8.70724 4.66671 9.38552 4.94766 9.88562 5.44776C10.3857 5.94785 10.6667 6.62613 10.6667 7.33337C10.6667 8.04062 10.3857 8.7189 9.88562 9.21899C9.38552 9.71909 8.70724 10 8 10C7.29276 10 6.61448 9.71909 6.11438 9.21899C5.61428 8.7189 5.33333 8.04062 5.33333 7.33337C5.33333 6.62613 5.61428 5.94785 6.11438 5.44776C6.61448 4.94766 7.29276 4.66671 8 4.66671ZM8 6.00004C7.64638 6.00004 7.30724 6.14052 7.05719 6.39057C6.80714 6.64061 6.66667 6.97975 6.66667 7.33337C6.66667 7.687 6.80714 8.02613 7.05719 8.27618C7.30724 8.52623 7.64638 8.66671 8 8.66671C8.35362 8.66671 8.69276 8.52623 8.94281 8.27618C9.19286 8.02613 9.33333 7.687 9.33333 7.33337C9.33333 6.97975 9.19286 6.64061 8.94281 6.39057C8.69276 6.14052 8.35362 6.00004 8 6.00004Z'
      fill='#1B1B1B'
    />
  </svg>
);

// 상세페이지 - 날짜 아이콘
export const DateIcon = ({ className }: { className?: string }) => (
  <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className} preserveAspectRatio='none'>
    <path
      d='M10.6667 2C10.83 2.00002 10.9876 2.05997 11.1096 2.16848C11.2316 2.27698 11.3096 2.4265 11.3287 2.58867L11.3333 2.66667V3.33333H12.6667C13.0031 3.33323 13.327 3.46027 13.5737 3.689C13.8204 3.91772 13.9714 4.23123 13.9967 4.56667L14 4.66667V12.6667C14.0001 13.0031 13.8731 13.327 13.6443 13.5737C13.4156 13.8204 13.1021 13.9714 12.7667 13.9967L12.6667 14H3.33333C2.99695 14.0001 2.67296 13.8731 2.4263 13.6443C2.17965 13.4156 2.02856 13.1021 2.00333 12.7667L2 12.6667V4.66667C1.99989 4.33028 2.12694 4.00629 2.35566 3.75963C2.58439 3.51298 2.8979 3.3619 3.23333 3.33667L3.33333 3.33333H4.66667V2.66667C4.66686 2.49675 4.73192 2.33331 4.84857 2.20975C4.96521 2.0862 5.12464 2.01184 5.29426 2.00189C5.46389 1.99193 5.63092 2.04712 5.76122 2.15618C5.89152 2.26524 5.97526 2.41994 5.99533 2.58867L6 2.66667V3.33333H10V2.66667C10 2.48986 10.0702 2.32029 10.1953 2.19526C10.3203 2.07024 10.4899 2 10.6667 2ZM12.6667 8H3.33333V12.6667H12.6667V8ZM12.6667 4.66667H3.33333V6.66667H12.6667V4.66667Z'
      fill='#1B1B1B'
    />
  </svg>
);

// 상세페이지 - 인원 아이콘
export const PersonnelIcon = ({ className }: { className?: string }) => (
  <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className} preserveAspectRatio='none'>
    <path
      d='M10.4733 8.47338C11.1269 7.95915 11.604 7.25399 11.8382 6.456C12.0723 5.65802 12.0519 4.80689 11.7799 4.02102C11.5078 3.23516 10.9975 2.55364 10.32 2.07128C9.64259 1.58892 8.83163 1.32971 8 1.32971C7.16836 1.32971 6.35741 1.58892 5.67995 2.07128C5.00249 2.55364 4.49223 3.23516 4.22014 4.02102C3.94805 4.80689 3.92767 5.65802 4.16184 6.456C4.396 7.25399 4.87307 7.95915 5.52666 8.47338C4.40672 8.92207 3.42952 9.66627 2.69926 10.6267C1.969 11.587 1.51304 12.7276 1.38 13.9267C1.37037 14.0143 1.37808 14.1028 1.40268 14.1874C1.42729 14.272 1.46831 14.3509 1.52341 14.4196C1.63468 14.5584 1.79652 14.6473 1.97333 14.6667C2.15014 14.6862 2.32744 14.6346 2.46621 14.5233C2.60499 14.412 2.69388 14.2502 2.71333 14.0734C2.85972 12.7702 3.48112 11.5666 4.45881 10.6926C5.4365 9.81856 6.70193 9.33539 8.01333 9.33539C9.32473 9.33539 10.5902 9.81856 11.5679 10.6926C12.5455 11.5666 13.1669 12.7702 13.3133 14.0734C13.3315 14.2372 13.4096 14.3885 13.5327 14.4981C13.6559 14.6076 13.8152 14.6677 13.98 14.6667H14.0533C14.2281 14.6466 14.3878 14.5582 14.4977 14.4209C14.6076 14.2835 14.6587 14.1083 14.64 13.9334C14.5063 12.7308 14.0479 11.5874 13.3139 10.6255C12.5799 9.66366 11.5979 8.91969 10.4733 8.47338V8.47338ZM8 8.00004C7.47258 8.00004 6.95701 7.84364 6.51848 7.55063C6.07995 7.25761 5.73815 6.84113 5.53632 6.35387C5.33449 5.8666 5.28168 5.33042 5.38457 4.81313C5.48746 4.29585 5.74144 3.8207 6.11438 3.44776C6.48732 3.07482 6.96247 2.82084 7.47976 2.71795C7.99704 2.61505 8.53322 2.66786 9.02049 2.8697C9.50776 3.07153 9.92423 3.41332 10.2173 3.85185C10.5103 4.29039 10.6667 4.80596 10.6667 5.33338C10.6667 6.04062 10.3857 6.7189 9.88562 7.21899C9.38552 7.71909 8.70724 8.00004 8 8.00004Z'
      fill='black'
    />
  </svg>
);

// 상단헤더 - X 아이콘
export function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 absolute left-6 top-[50%] transform -translate-y-[50%] cursor-pointer'
      preserveAspectRatio='none'
      onClick={onClick}
    >
      <path d='M6 18L18 6M6 6L18 18' stroke='black' strokeWidth={2} strokeLinecap='round' />
    </svg>
  );
}

// 게시글 작성 아이콘
export const WritingIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path d='M14.1027 7.73371L1.37481 7.73371M7.73877 1.13405L7.73877 14.3334' stroke='white' stroke-width={2} stroke-linecap='round' />
    </svg>
  );
};

// 댓글 - 여성 아이콘
export function WomanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.33335 3.16668C2.33342 2.60248 2.52433 2.05489 2.87505 1.61294C3.22577 1.171 3.71567 0.860675 4.2651 0.732432C4.81453 0.60419 5.39119 0.665567 5.90132 0.906586C6.41144 1.1476 6.82505 1.55409 7.07488 2.05996C7.32472 2.56583 7.39609 3.14134 7.2774 3.69291C7.15872 4.24448 6.85694 4.73969 6.42115 5.09803C5.98535 5.45636 5.44116 5.65675 4.87705 5.66661C4.31293 5.67647 3.76207 5.49523 3.31401 5.15235L2.71801 5.74801L3.19335 6.22335C3.22518 6.2541 3.25058 6.29088 3.26805 6.33155C3.28552 6.37221 3.29471 6.41595 3.2951 6.46021C3.29548 6.50447 3.28705 6.54837 3.27029 6.58933C3.25353 6.6303 3.22878 6.66751 3.19748 6.69881C3.16618 6.73011 3.12896 6.75486 3.088 6.77162C3.04703 6.78838 3.00314 6.79681 2.95888 6.79643C2.91462 6.79605 2.87088 6.78685 2.83021 6.76938C2.78955 6.75191 2.75276 6.72652 2.72201 6.69468L2.24668 6.21968L1.54001 6.92635C1.47747 6.98885 1.39265 7.02395 1.30423 7.02391C1.21581 7.02388 1.13102 6.98873 1.06851 6.92618C1.00601 6.86363 0.970916 6.77882 0.970947 6.6904C0.970979 6.60197 1.00613 6.51718 1.06868 6.45468L1.77535 5.74801L1.30768 5.28035C1.27584 5.2496 1.25045 5.21282 1.23298 5.17215C1.21551 5.13148 1.20632 5.08774 1.20593 5.04348C1.20555 4.99922 1.21398 4.95533 1.23074 4.91436C1.2475 4.8734 1.27225 4.83618 1.30355 4.80488C1.33485 4.77358 1.37206 4.74883 1.41303 4.73207C1.454 4.71531 1.49789 4.70688 1.54215 4.70726C1.58641 4.70765 1.63015 4.71684 1.67082 4.73431C1.71148 4.75178 1.74827 4.77718 1.77901 4.80901L2.24668 5.27668L2.84335 4.68001C2.51174 4.24528 2.33251 3.71345 2.33335 3.16668ZM4.83335 1.33335C4.34712 1.33335 3.8808 1.5265 3.53699 1.87032C3.19317 2.21413 3.00001 2.68045 3.00001 3.16668C3.00001 3.65291 3.19317 4.11923 3.53699 4.46304C3.8808 4.80686 4.34712 5.00001 4.83335 5.00001C5.31958 5.00001 5.78589 4.80686 6.12971 4.46304C6.47353 4.11923 6.66668 3.65291 6.66668 3.16668C6.66668 2.68045 6.47353 2.21413 6.12971 1.87032C5.78589 1.5265 5.31958 1.33335 4.83335 1.33335Z'
        fill='#FF66B2'
      />
    </svg>
  );
}

// 댓글 - 남성 아이콘
export function ManIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 2.52632C8 2.63799 7.95564 2.74509 7.87668 2.82405C7.79771 2.90301 7.69062 2.94737 7.57895 2.94737C7.46728 2.94737 7.36018 2.90301 7.28122 2.82405C7.20225 2.74509 7.15789 2.63799 7.15789 2.52632V1.43748L5.66863 2.92674C6.15446 3.56359 6.38013 4.36127 6.29994 5.15825C6.21974 5.95524 5.83968 6.69196 5.23671 7.21926C4.63374 7.74655 3.85292 8.02501 3.05236 7.99823C2.2518 7.97146 1.49133 7.64147 0.924929 7.07507C0.358531 6.50867 0.0285368 5.7482 0.00176583 4.94764C-0.0250051 4.14708 0.253448 3.36626 0.780742 2.76329C1.30804 2.16032 2.04476 1.78026 2.84175 1.70006C3.63873 1.61987 4.43641 1.84554 5.07326 2.33137L6.56252 0.842107H5.47368C5.36201 0.842107 5.25491 0.797746 5.17595 0.718783C5.09699 0.63982 5.05263 0.532724 5.05263 0.421053C5.05263 0.309383 5.09699 0.202286 5.17595 0.123324C5.25491 0.0443608 5.36201 0 5.47368 0H7.47368C7.76421 0 8 0.23579 8 0.526317V2.52632ZM3.15789 2.52632C2.5437 2.52632 1.95467 2.7703 1.52037 3.2046C1.08608 3.6389 0.842093 4.22793 0.842093 4.84211C0.842093 5.4563 1.08608 6.04533 1.52037 6.47963C1.95467 6.91392 2.5437 7.15791 3.15789 7.15791C3.77207 7.15791 4.3611 6.91392 4.7954 6.47963C5.2297 6.04533 5.47368 5.4563 5.47368 4.84211C5.47368 4.22793 5.2297 3.6389 4.7954 3.2046C4.3611 2.7703 3.77207 2.52632 3.15789 2.52632Z'
        fill='#2768FF'
      />
    </svg>
  );
}

// 검색 바 검색 아이콘
export const SearchBarIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path
        d='M11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5Z'
        stroke='#1B1B1B'
      />
      <path d='M15 15L19 19' stroke='#1B1B1B' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};

// 기본 프로필 아이콘
export const ProfileIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width={80}
      height={80}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-20 h-20 relative'
      preserveAspectRatio='none'
    >
      <rect width={80} height={80} rx={40} fill='#D9D9D9' />
      <path
        d='M47.42 41.42C49.3808 39.8773 50.812 37.7618 51.5145 35.3679C52.217 32.9739 52.1558 30.4205 51.3396 28.0629C50.5233 25.7053 48.9925 23.6608 46.9601 22.2137C44.9278 20.7666 42.4949 19.989 40 19.989C37.5051 19.989 35.0722 20.7666 33.0399 22.2137C31.0075 23.6608 29.4767 25.7053 28.6604 28.0629C27.8442 30.4205 27.783 32.9739 28.4855 35.3679C29.188 37.7618 30.6192 39.8773 32.58 41.42C29.2201 42.7661 26.2886 44.9987 24.0978 47.8798C21.907 50.761 20.5391 54.1826 20.14 57.78C20.1111 58.0426 20.1342 58.3084 20.208 58.5621C20.2819 58.8158 20.4049 59.0525 20.5702 59.2587C20.904 59.675 21.3896 59.9417 21.92 60C22.4504 60.0583 22.9823 59.9036 23.3986 59.5698C23.815 59.236 24.0816 58.7504 24.14 58.22C24.5792 54.3104 26.4434 50.6996 29.3764 48.0776C32.3095 45.4556 36.1058 44.0061 40.04 44.0061C43.9742 44.0061 47.7705 45.4556 50.7036 48.0776C53.6366 50.6996 55.5008 54.3104 55.94 58.22C55.9944 58.7114 56.2289 59.1653 56.5982 59.494C56.9675 59.8228 57.4456 60.003 57.94 60H58.16C58.6843 59.9397 59.1634 59.6746 59.4931 59.2625C59.8228 58.8504 59.9762 58.3247 59.92 57.8C59.519 54.1924 58.1437 50.762 55.9417 47.8764C53.7396 44.9908 50.7938 42.759 47.42 41.42ZM40 40C38.4177 40 36.871 39.5308 35.5554 38.6518C34.2398 37.7727 33.2145 36.5233 32.609 35.0615C32.0035 33.5997 31.845 31.9911 32.1537 30.4393C32.4624 28.8874 33.2243 27.462 34.3431 26.3432C35.462 25.2243 36.8874 24.4624 38.4393 24.1537C39.9911 23.845 41.5997 24.0035 43.0615 24.609C44.5233 25.2145 45.7727 26.2399 46.6518 27.5554C47.5308 28.871 48 30.4178 48 32C48 34.1217 47.1571 36.1566 45.6568 37.6569C44.1566 39.1572 42.1217 40 40 40Z'
        fill='#999999'
      />
    </svg>
  );
};

// 검색 바 클리어 아이콘
export const ClearIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path
        d='M12 4C7.581 4 4 7.582 4 12C4 16.418 7.581 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4ZM15.707 14.293C15.8945 14.4805 15.9998 14.7348 15.9998 15C15.9998 15.2652 15.8945 15.5195 15.707 15.707C15.5195 15.8945 15.2652 15.9998 15 15.9998C14.7348 15.9998 14.4805 15.8945 14.293 15.707L12 13.414L9.707 15.707C9.61435 15.8002 9.50419 15.8741 9.38285 15.9246C9.26152 15.9751 9.13141 16.001 9 16.001C8.86859 16.001 8.73848 15.9751 8.61715 15.9246C8.49581 15.8741 8.38565 15.8002 8.293 15.707C8.10553 15.5195 8.00021 15.2652 8.00021 15C8.00021 14.7348 8.10553 14.4805 8.293 14.293L10.586 12L8.293 9.707C8.10549 9.51949 8.00015 9.26518 8.00015 9C8.00015 8.73482 8.10549 8.48051 8.293 8.293C8.48051 8.10549 8.73482 8.00015 9 8.00015C9.26518 8.00015 9.51949 8.10549 9.707 8.293L12 10.586L14.293 8.293C14.4805 8.10549 14.7348 8.00015 15 8.00015C15.2652 8.00015 15.5195 8.10549 15.707 8.293C15.8945 8.48051 15.9998 8.73482 15.9998 9C15.9998 9.26518 15.8945 9.51949 15.707 9.707L13.414 12L15.707 14.293Z'
        fill='#D9D9D9'
      />
    </svg>
  );
};

// 쓰레기통 아이콘 (알림 삭제)
export const DeleteIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <g clip-path='url(#clip0_212_919)'>
        <path
          d='M10.6665 8.18994L10.6665 5.96128C10.6665 4.40823 10.6665 3.6317 11.1324 3.14922C11.5983 2.66675 12.3481 2.66675 13.8478 2.66675L18.1519 2.66675C19.6516 2.66675 20.4014 2.66675 20.8673 3.14922C21.3332 3.6317 21.3332 4.40823 21.3332 5.96128V8.18994'
          stroke='white'
          stroke-width={2}
        />
        <path d='M18.6665 14.9536V21.6203' stroke='white' stroke-width={2} stroke-linecap='round' />
        <path d='M13.3335 14.9536V21.6203' stroke='white' stroke-width={2} stroke-linecap='round' />
        <path
          d='M24.333 22.102C24.143 23.822 24.0091 25.0171 23.7918 25.9147C23.5811 26.7847 23.3202 27.245 22.9593 27.5682C22.5985 27.8914 22.1123 28.1002 21.2244 28.2141C20.3084 28.3316 19.1059 28.3335 17.3753 28.3335L14.6248 28.3335C12.8943 28.3335 11.6918 28.3316 10.7757 28.2141C9.88788 28.1002 9.40165 27.8914 9.04081 27.5682C8.67996 27.245 8.41905 26.7847 8.2084 25.9147C7.99105 25.0171 7.85713 23.822 7.66715 22.102L6.13621 8.24072L25.8639 8.24072L24.333 22.102Z'
          stroke='white'
          stroke-width={2}
        />
        <path d='M4 8.16284H28' stroke='white' stroke-width={2} stroke-linecap='round' />
      </g>
    </svg>
  );
};

// 알림 삭제 버튼 아이콘
export const DeleteButtonIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <g clip-path='url(#clip0_160_1344)'>
        <path
          d='M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z'
          fill='#767676'
        />
      </g>
    </svg>
  );
};

// 알림 아이콘
export const AlertIcon = ({ className }: { className?: string }) => {
  return (
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <path
        d='M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7048 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29476 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9'
        stroke='#1B1B1B'
        stroke-width={2}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
