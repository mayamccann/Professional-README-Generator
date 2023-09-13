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

//Returning license link
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[MIT Link](https://www.opensource.org/licenses/MIT)"
      case "Apache":
        return "[Apache Link](https://www.apache.org/licenses/LICNSE-2.0)"
        case "GNU":
          return "[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en/html)"
          default:
            return "";
  }
}
