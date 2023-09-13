//function that returns license
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT" :
      return "![License](https://img.shields.io/badge/License-MIT-blue.svg)";
     case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache2.0-red";
      case "GNU":
        return "![License](https://img.shields.io/badge/License-GNU-red)";
        default: 
        return "";
  }
}
 