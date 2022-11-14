<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
window.addEventListener("message", (event) => {
  console.log("APP 2 message", event);
});
</script>

<style lang="less">
@import "../theme/var-theme.less";
.markdown-body {
  width: 100%;
  padding: 0 20px;
  overflow-x: auto;
  code {
    position: relative;
    display: block;
    padding: 16px 20px;
    overflow-x: auto;
    color: var(--raiden-text-color);
    font-weight: 400;
    font-size: 14px;
    font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
    line-height: 26px;
    white-space: pre-wrap;
    word-wrap: break-word;
    -webkit-font-smoothing: auto;
    background-color: var(--raiden-primary-color);
    border-radius: var(--raiden-radius-md);
  }

  pre {
    margin: 20px 0 0;
    + p {
      margin-top: 20px !important;
    }
  }

  .hljs {
    display: block;
    padding: 0.5em;
    overflow-x: auto;
    background: #fff;
  }

  .hljs-string {
    color: var(--raiden-primary-color);
  }
  > pre code {
    position: relative;
    padding-right: 30px;
    pointer-events: none;
    overflow: initial;
  }

  > p a,
  > ul a,
  > table a,
  > blockquote a {
    margin: 0 1px;
    color: var(--raiden-primary-color);
    -webkit-font-smoothing: auto;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  > h3,
  > h4,
  > h5,
  > h6 {
    font-weight: normal;
    line-height: 1.6;

    &[id] {
      cursor: pointer;
    }
  }

  > h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }

  > h4 {
    margin: 24px 0 12px;
    font-weight: 600;
    font-size: 18px;
  }

  > h5 {
    margin: 24px 0 12px;
    font-weight: 600;
    font-size: 16px;
  }

  > p {
    margin-top: 8px;
    color: var(--raiden-gray-3);
    font-size: 15px;
    line-height: 26px;

    strong {
      color: var(--raiden-black);
    }
  }

  > table {
    width: 100%;
    margin-top: 12px;
    color: var(--raiden-gray-3);
    font-size: 14px;
    line-height: 1.5;
    border-collapse: collapse;

    th {
      padding: 8px 10px;
      font-weight: 600;
      text-align: left;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    td {
      padding: 8px;
      border-top: 1px solid var(--raiden-primary-border-color);

      &:first-child {
        padding-left: 0;

        // version tag
        code {
          margin: 0;
          padding: 2px 6px;
          color: var(--van-doc-blue);
          font-weight: 600;
          font-size: 11px;
          background-color: rgba(25, 137, 250, 0.15);
          border-radius: 20px;
        }
      }

      &:last-child {
        padding-right: 0;
      }
    }

    em {
      display: inline-block;
      color: var(--van-doc-green);
      font-size: 14px;
      font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
      font-style: normal;
      max-width: 300px;
      -webkit-font-smoothing: auto;
    }
  }

  > ul {
    margin: 12px 0;
  }

  > ul li,
  > ol li {
    position: relative;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    color: var(--van-doc-text-color-3);
    font-size: 15px;
    line-height: 26px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 6px;
      height: 6px;
      margin-top: 10px;
      border: 1px solid currentColor;
      border-radius: 50%;
      content: "";
    }
  }

  > hr {
    margin: 30px 0;
    border: 0 none;
    border-top: 1px solid #eee;
  }

  > p code,
  > ul code,
  > ol code,
  > table code {
    display: inline;
    margin: 0 2px;
    padding: 2px 5px;
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    word-break: keep-all;
    border-radius: 4px;
    -webkit-font-smoothing: antialiased;
  }
}
</style>
