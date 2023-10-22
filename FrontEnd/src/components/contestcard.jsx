import React from "react";
import "./contestcard.css";

const ContestCard = () => {
  return (
    <div
      className="contest-card-container"
      data-test-id="contest-card"
      role="button"
      tabIndex="0"
      style={{ cursor: "pointer" }}
    >
      <div>
        <div
          data-test-id="link-label"
          role="button"
          tabIndex="0"
          style={{ cursor: "pointer" }}
        >
          <div className="full-roster-button">
            <svg
              fill="currentColor"
              version="1.1"
              id="NFL"
              x="0"
              y="0"
              viewBox="0 0 17 17"
              xmlSpace="preserve"
              width="17"
              height="17"
              style={{
                verticalAlign: "middle",
                flex: "0 0 auto",
                fill: "currentColor",
                overflow: "visible",
              }}
            >
              <title>NFL</title>
              <path
                id="football-us"
                d="M16.885 2.363A2.502 2.502 0 0014.641.119c-2.957-.29-8.399-.293-11.607 2.916C-.175 6.243-.17 11.684.118 14.642a2.502 2.502 0 002.244 2.244 24.75 24.75 0 002.396.119c2.962 0 6.746-.568 9.211-3.034 3.21-3.21 3.205-8.651 2.916-11.608zM3.741 3.741C5.966 1.516 9.46.999 12.228.999c.863 0 1.655.05 2.316.115.177.017.346.066.499.139l-4.541 4.542-1.646-1.646a.5.5 0 00-.707.707l1.646 1.646-1.293 1.293-1.646-1.646a.5.5 0 00-.707.707l1.646 1.646-1.293 1.293-1.646-1.646a.5.5 0 00-.707.707l1.646 1.646-4.542 4.542a1.476 1.476 0 01-.139-.499C.842 11.762.823 6.659 3.741 3.741zm9.522 9.522C10.345 16.181 5.241 16.16 2.46 15.89a1.492 1.492 0 01-.499-.139l4.542-4.542 1.646 1.646a.502.502 0 00.707.001.5.5 0 000-.707l-1.647-1.647 1.293-1.293 1.646 1.646a.5.5 0 10.708-.706L9.209 8.502l1.293-1.293 1.646 1.646a.5.5 0 10.708-.706l-1.647-1.647 4.542-4.542c.074.154.122.322.139.499.272 2.783.291 7.886-2.627 10.804z"
              ></path>
            </svg>
            <div className="_a _b _bl _iq _at _dv _ja _hb">
              <span className="League">NFL</span>
              <span className="roster">
                FULL ROSTER
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="_dj _ca _iq _at _dv _ja _hb _a _b _jf _ji"
        data-test-id="contest-card-name"
        theme="[object Object]"
      >
        <div
          className="_dj _rf _at _de _iq _dv _ja _hb _bm _l"
          data-test-id="data-chunk-value"
          theme="[object Object]"
        >
          <button
            className="_a _ap _ag _ji _bm _be _bf _ack _acl _acm _acn _aco _acp _cz _da"
            role="button"
            tabIndex="0"
            style={{ cursor: "pointer" }}
          >
            <span data-test-id="contest-name-formatted-string">
              $40K Sun NFL All Rookie
            </span>
          </button>
        </div>
        <span
          className="_dh _dk _de _ah _at _df _dg _dh _di _iq _dv _ja _hb _ir _l"
          data-test-id="data-chunk-label"
          theme="[object Object]"
        >
          SUN 1:00PM ET (MAIN)
        </span>
      </div>
      <div
        className="_dj _acr _a _b _jf _ji"
        data-test-id="ContestEntryCount"
        theme="[object Object]"
      >
        <div
          className="_dj _aj _at _dd _jj _l"
          data-test-id="data-chunk-value"
          theme="[object Object]"
        >
          <div data-test-id="contest-entry-count-summary" className="_je">
            <span className="_jo _jp">1,494</span> of <span>22,222</span>
          </div>
        </div>
        <div
          className="_dj _de _ah _at _df _gd _dh _di _ir _l"
          data-test-id="data-chunk-label"
          theme="[object Object]"
        >
          <div className="_a _ap _js _ae">
            <div
              className="_jt _co _dc _ar"
              data-test-id="contest-entry-count-percentage"
            >
              6% full
            </div>
            <div className="_jk _co _jl" data-test-id="progress-bar">
              <div
                className="_ju _a _bx _dv _eg _jv _jw _jx _jy"
                role="progressbar"
                aria-valuemin="0"
                aria-valuenow="1494"
                aria-valuemax="22222"
                color="blue"
                theme="[object Object]"
                aria-label="progressbar"
              >
                <div
                  id="progress-bar"
                  className="_bc _jv _jw _jx _jy"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="_dj _acs _iq _at _dv _ja _hb _a _b _jf _ji"
        theme="[object Object]"
      >
        <span
          className="_af _aj _at _de _iq _dv _ja _hb _ul _l"
          data-test-id="data-chunk-value"
          theme="[object Object]"
        >
          $40,000
        </span>
        <span
          className="_dh _dk _de _ah _at _df _gd _dh _di _iq _dv _ja _hb _ir _l"
          data-test-id="data-chunk-label"
          theme="[object Object]"
        >
          GUARANTEED IN PRIZES
        </span>
      </div>
      <div data-test-id="entry-container" className="_acy _a _ap _acr _fh">
        <a
          data-test-id="entry-fee-button"
          theme="[object Object]"
          href="/games/94948/contests/94948-266100545/enter"
          className="_dj _u _bf _dk _el _be _em _ev _ew _ex _acb _acc _af _aj _ot _ou _acd _sk _sl _ow _a _ap _act _eb _y _mb"
        >
          <div
            className="_dj _acu _acv _uf _acw _a _b _ap _fo"
            theme="[object Object]"
          >
            <div
              className="_dj _aj _at _de _jj _l"
              data-test-id="data-chunk-value"
              theme="[object Object]"
            >
              <span data-test-id="entry-fee-copy" className="_acc">
                $2 entry
              </span>
            </div>
            <div
              className="_dj _de _ah _at _df _gd _dh _di _ir _l"
              data-test-id="data-chunk-label"
              theme="[object Object]"
            >
              <div className="_iq _at _dv _ja _acx">
                <span className="_acc">No Experienced Players</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContestCard;
