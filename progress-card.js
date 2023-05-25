import { LitElement, html, css, unsafeCSS } from "lit";
export class ProgressCard extends LitElement {
  static get styles() {
    return css`
      body {
        font-family: "Roboto", sans-serif;
      }
      .secondary-text {
        color: gray;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 9.5rem;
      }
      .compact {
        height: 3rem;
        width: 14rem;
        background: white;
        border: 1px solid #8080801c;
        position: relative;
        box-shadow: 0px 5px 5px 0px #80808038;
      }
      .subtext {
        font-size: 10px;
        position: relative;
        bottom: 10px;
        left: 15px;
      }
      .font-size-15 {
        font-size: 15px;
      }
      .font-size-13 {
        font-size: 13px;
      }
      .font-size-10 {
        font-size: 10px;
      }
      .data {
        margin: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 145px;
        overflow: hidden;
      }

      .p-l5 {
        padding-left: 5px;
      }
      .p-l20 {
        padding-left: 20px;
      }
      .bottom {
        border-bottom-left-radius: 45px;
        border-bottom-right-radius: 0;
        display: inline-block;
        background: #6cd06c;
        float: right;
        width: 50px;
        height: 45px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 13px;
        letter-spacing: 1px;
      }
      .value {
        position: absolute;
        top: 20px;
        transform: translateY(-50%);
        left: 18px;
        color: white;
        overflow: hidden;
      }

      /**************************/

      .medium {
        width: 14rem;
        background: white;
        border: 1px solid #8080801c;
        position: relative;
        box-shadow: 1px 3px 4px 1px #80808038;
        height: 5rem;
      }
      .medium .bottom {
        width: 55px;
      }
      .medium .sub-text-container {
        top: 10px;
        position: relative;
      }
      .medium .subtext-more {
        position: absolute;
        right: 0;
        top: 3px;
        padding-right: 5px;
      }
      .medium .user {
        display: inline-flex;
        align-items: center;
        padding-left: 10px;
      }

      .user img {
        border-radius: 50%;
      }
      /* ************** */
      .relaxed {
        width: 14rem;
        background: white;
        border: 1px solid #8080801c;
        position: relative;
        box-shadow: 1px 3px 4px 1px #80808038;
        height: 8rem;
      }
      .relaxed .sub-text-container {
        position: relative;
        top: 15px;
      }
      .relaxed .subtext-more {
        position: absolute;
        right: 0;
        top: 20px;
        padding-right: 5px;
      }
      .relaxed .user {
        display: flex;
        align-items: center;
        position: relative;
        right: 20px;
      }
      .relaxed .bottom {
        width: 55px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      type: {type: String},
      percentage: { type: String },
      userName: { type: String },
      color: { type: String },
      subTitle: { type: String },
      userUrl: { type: String }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  getCompact() {
    let style = css `background: ${unsafeCSS(this.color)}`;

    return html`
    <div class="compact font-size-15">
      <div class="data" title="${this.title}">${this.title}</div>
      <div class="bottom" style=${style}>
        <div class="value">${this.percentage}<span>%</span></div>
      </div>
    </div>
  `;
  }

  getMediumOrRelaxed() {
    let subtext, userUrlDetails, imgSize, style;
    style = css `background: ${unsafeCSS(this.color)}`;
    imgSize = this.type === "medium" ? "18" : "40";
    if(this.type === "relaxed") {
      subtext = html `<p class="subtext secondary-text">${this.subTitle}</p>`;
    } 
    if(this.userUrl) {
      userUrlDetails = html `<img
                                src=${this.userUrl}
                                alt="user-thumbnail"
                                loading="lazy" 
                                width=${imgSize}
                                height=${imgSize}
                              />`;
      this.userUrl;
    } else {
      userUrlDetails = html `<svg
                              width=${imgSize}
                              height=${imgSize}
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="14.9534" cy="15.0779" r="14.8357" fill="#BBDCFE" />
                              <mask
                                id="mask0_2915_6971"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="30"
                                height="30"
                              >
                                <circle cx="14.9539" cy="15.0789" r="14.8357" fill="#BBDCFE" />
                              </mask>
                              <g mask="url(#mask0_2915_6971)">
                                <circle cx="14.9551" cy="10.0171" r="5.37841" fill="#2F80EB" />
                                <path
                                  d="M4.91943 25.225C4.91943 20.6161 8.65566 16.8799 13.2645 16.8799H16.6462C21.2551 16.8799 24.9913 20.6161 24.9913 25.225V25.625C24.9913 28.1854 22.9156 30.2611 20.3551 30.2611H9.5556C6.99512 30.2611 4.91943 28.1854 4.91943 25.625V25.225Z"
                                  fill="#2F80EB"
                                />
                              </g>
                            </svg>`;
    }

    return html` 
        <div class="${this.type} font-size-15" >
          <div class="data" title="${this.title}">${this.title}</div>
          ${subtext}
          <div class="bottom" style=${style}>
            <span class="value">${this.percentage}%</span>
          </div>
          <div class="sub-text-container">
            <div class="user">
              ${userUrlDetails}
              <span class="p-l5 secondary-text font-size-13"
                title="${this.userName}"
              >${this.userName}</span>
            </div>
          </div>
        </div>
      `;
  }

  render() {
    return (this.type === "medium" || this.type === "relaxed") ? html `${this.getMediumOrRelaxed()}` : html `${this.getCompact()}`;
  }
}
customElements.define("progress-card", ProgressCard);
