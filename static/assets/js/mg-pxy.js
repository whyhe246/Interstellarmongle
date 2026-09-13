(function () {
  "use strict";

  function migrate() {
    let hadLegacy =
      localStorage.getItem("pChoice") !== null ||
      localStorage.getItem("uv") !== null ||
      localStorage.getItem("dy") !== null;

    localStorage.removeItem("pChoice");
    localStorage.removeItem("uv");
    localStorage.removeItem("dy");

    let v = localStorage.getItem("pchoice");
    if (v === "sc") {
      localStorage.setItem("pchoice", "uv");
      return "uv";
    }

    if (hadLegacy) {
      localStorage.setItem("pchoice", "uv");
      return "uv";
    }

    if (v === "uv" || v === "dy" || v === "sj") {
      return v;
    }

    localStorage.setItem("pchoice", "uv");
    return "uv";
  }

  window.resolveProxyPchoice = migrate;
  migrate();
})();
